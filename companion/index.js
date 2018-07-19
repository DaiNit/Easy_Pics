import { outbox } from "file-transfer";
import { Image } from "image";
import { device } from "peer";
import { settingsStorage } from "settings";
import { me } from "companion";
import * as messaging from "messaging";

settingsStorage.setItem("screenWidth", device.screen.width);
settingsStorage.setItem("screenHeight", device.screen.height);

var Format;
var QualitySelect = 1;
var timer1 = null;
var timer2 = null;
var timer3 = null;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var StatusMessage = null;
var StatusMessage2 = null;

try {
  Format = settingsStorage.getItem("Quality");
}catch (e) {
  console.log(e);
}
if(Format) {
  console.log( Format );
  QualitySelect = Format.substr(13,1);
  console.log( QualitySelect );
  console.log("Quality level was pre-loaded");
}

if (me.launchReasons.settingsChanged) {
    Status();
    console.log("launchReasons.settingsChanged");
}

if (me.launchReasons.peerAppLaunched) {
    Status();
    console.log("launchReasons.settingsChanged");
}

settingsStorage.onchange = function(evt) {
    TransferSelect(evt.key, evt.newValue);
    console.log(`settingsStorage.onchange:${evt.key}`);
     try {
     Format = settingsStorage.getItem("Quality");
   }catch (e) {
     console.log(e);
   }
   if(Format) {
     console.log( Format );
     QualitySelect = Format.substr(13,1);
     console.log( QualitySelect );
     console.log("User changed quality setting");
   }
};

function TransferSelect(key, newValue) {
         if (key == "image1") { compressAndTransferImage(1, newValue);
  } else if (key == "image2") { compressAndTransferImage(2, newValue);
  } else if (key == "image3") { compressAndTransferImage(3, newValue);
  } else if (key == "image4") { compressAndTransferImage(4, newValue);
  } else if (key == "image5") { compressAndTransferImage(5, newValue);
  } else if (key == "image6") { compressAndTransferImage(6, newValue);
  } else if (key == "image7") { compressAndTransferImage(7, newValue);
  } else if (key == "image8") { compressAndTransferImage(8, newValue);
  } else if (key == "image9") { compressAndTransferImage(9, newValue);
}};

function compressAndTransferImage(PicKey,settingsValue) {
  console.log(`compressAndTransferImage:${PicKey}`);
  if (QualitySelect == 0){  
  const imageData = JSON.parse(settingsValue);
  Image.from(imageData.imageUri)
    .then(image =>
      image.export("image/jpeg", {
        background: "#FFFFFF",
        quality: 20
      })
    )
    .then(buffer => outbox.enqueue(`${PicKey}_${Date.now()}`, buffer))
    .then(fileTransfer => {
      console.log(`Enqueued ${fileTransfer.name}`);     
      console.log( "Quality is Low" );
      
    function event1() {
       count1++;
         if (count1 >= 100 && timer1 != null) {
            clearInterval(timer1);
        }
        StatusMessage = `Pic${PicKey} is ${fileTransfer.readyState}`;
    }
    timer1 = setInterval(event1, 300);
    
  });
  } else if (QualitySelect == 1){
  const imageData = JSON.parse(settingsValue);
  Image.from(imageData.imageUri)
    .then(image =>
      image.export("image/jpeg", {
        background: "#FFFFFF",
        quality: 40
      })
    )
    .then(buffer => outbox.enqueue(`${PicKey}_${Date.now()}`, buffer))
    .then(fileTransfer => {
      console.log(`Enqueued ${fileTransfer.name}`);
      console.log( "Quality is Medium" );
      
    function event2() {
       count2++;
         if (count2 >= 100 && timer2 != null) {
            clearInterval(timer2);
        }
        StatusMessage = `Pic${PicKey} is ${fileTransfer.readyState}`;
    }
    timer2 = setInterval(event2, 300);
    
    });
  } else if (QualitySelect == 2){
  const imageData = JSON.parse(settingsValue);
  Image.from(imageData.imageUri)
    .then(image =>
      image.export("image/jpeg", {
        background: "#FFFFFF",
        quality: 60
      })
    )
    .then(buffer => outbox.enqueue(`${PicKey}_${Date.now()}`, buffer))
    .then(fileTransfer => {
      console.log(`Enqueued ${fileTransfer.name}`);
      console.log( "Quality is High" );
      
    function event3() {
       count3++;
         if (count3 >= 100 && timer3 != null) {
            clearInterval(timer3);
        }
        StatusMessage = `Pic${PicKey} is ${fileTransfer.readyState}`;
    }
    timer3 = setInterval(event3, 300);
    
    });
};
};

function Status() {
    if (StatusMessage == null && count4 < 10 ) {
          SendStatus("Ready for Pic upload");
          count4++;
    } else if (StatusMessage != StatusMessage2) {
          StatusMessage2 = StatusMessage;
          console.log(StatusMessage2);
          SendStatus(StatusMessage2);
    }
}

setInterval(Status, 1500);

function SendStatus(data) {
  // If we have a MessageSocket, send the data to the device
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
    console.log("peerSocket open");
  } else {
    console.log("No peerSocket connection");
  }
}
