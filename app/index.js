import { me } from "appbit";
import { display } from "display";
import document from "document";
import * as fs from "fs";
import { inbox } from "file-transfer";
import { preferences } from "user-settings";
import { vibration } from "haptics";
import * as messaging from "messaging";
import * as jpeg from "jpeg";

// *** Brightness Start *** //

var DisplayToggle = 0;
try {
  let DisplayStatus = fs.readFileSync("DisplayStatus.txt", "ascii");
}catch (e) {
  console.log(e);
}
if(DisplayStatus) {
  console.log("DisplayStatus:",DisplayStatus);
  DisplayToggle = DisplayStatus;
}

if ( DisplayToggle == 1 ){
     display.autoOff = true;
     display.brightnessOverride = undefined;
    } else if ( DisplayToggle == 0 ){
     display.autoOff = false;
     display.brightnessOverride = 1.0;
}

// *** Brightness End *** //

// *** Display control Start *** //

let StatusMessageBord = document.getElementById("StatusMessageBord");
let StatusMessageBord2 = document.getElementById("StatusMessageBord2");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const image7 = document.getElementById("image7");
const image8 = document.getElementById("image8");
//const image9 = document.getElementById("image9");

const imageB1 = document.getElementById("imageB1");
const imageB2 = document.getElementById("imageB2");
const imageB3 = document.getElementById("imageB3");
const imageB4 = document.getElementById("imageB4");
const imageB5 = document.getElementById("imageB5");
const imageB6 = document.getElementById("imageB6");
const imageB7 = document.getElementById("imageB7");
const imageB8 = document.getElementById("imageB8");
//const imageB9 = document.getElementById("imageB9");

const imageC1 = document.getElementById("imageC1");
const imageC2 = document.getElementById("imageC2");
const imageC3 = document.getElementById("imageC3");
const imageC4 = document.getElementById("imageC4");
const imageC5 = document.getElementById("imageC5");
const imageC6 = document.getElementById("imageC6");
const imageC7 = document.getElementById("imageC7");
const imageC8 = document.getElementById("imageC8");
//const imageC9 = document.getElementById("imageC9");

let Pic1;
let Pic2;
let Pic3;
let Pic4;
let Pic5;
let Pic6;
let Pic7;
let Pic8;
//let Pic9;

// *** Initial loading Start *** //

  try {
    Pic1 = fs.readFileSync("Pic1.cbor", "cbor");
  } catch (ex) {
    Pic1 = {};
  }
  try {
    Pic2 = fs.readFileSync("Pic2.cbor", "cbor");
  } catch (ex) {
    Pic2 = {};
  }
  try {
    Pic3 = fs.readFileSync("Pic3.cbor", "cbor");
  } catch (ex) {
    Pic3 = {};
  }
  try {
    Pic4 = fs.readFileSync("Pic4.cbor", "cbor");
  } catch (ex) {
    Pic4 = {};
  }
  try {
    Pic5 = fs.readFileSync("Pic5.cbor", "cbor");
  } catch (ex) {
    Pic5 = {};
  }
  try {
    Pic6 = fs.readFileSync("Pic6.cbor", "cbor");
  } catch (ex) {
    Pic6 = {};
  }
  try {
    Pic7 = fs.readFileSync("Pic7.cbor", "cbor");
  } catch (ex) {
    Pic7 = {};
  }
  try {
    Pic8 = fs.readFileSync("Pic8.cbor", "cbor");
  } catch (ex) {
    Pic8 = {};
  }
//  try {
//    Pic9 = fs.readFileSync("Pic9.cbor", "cbor");
//  } catch (ex) {
//    Pic9 = {};
//  }

  if (Pic1.bg) {
    image1.image = Pic1.bg;
    imageB1.image = Pic1.bg;
    imageC1.image = Pic1.bg;
  }
  if (Pic2.bg) {
    image2.image = Pic2.bg;
    imageB2.image = Pic2.bg;
    imageC2.image = Pic2.bg;
  }
  if (Pic3.bg) {
    image3.image = Pic3.bg;
    imageB3.image = Pic3.bg;
    imageC3.image = Pic3.bg;
  }
  if (Pic4.bg) {
    image4.image = Pic4.bg;
    imageB4.image = Pic4.bg;
    imageC4.image = Pic4.bg;
  }
  if (Pic5.bg) {
    image5.image = Pic5.bg;
    imageB5.image = Pic5.bg;
    imageC5.image = Pic5.bg;
  }
  if (Pic6.bg) {
    image6.image = Pic6.bg;
    imageB6.image = Pic6.bg;
    imageC6.image = Pic6.bg;
  }
  if (Pic7.bg) {
    image7.image = Pic7.bg;
    imageB7.image = Pic7.bg;
    imageC7.image = Pic7.bg;
  }
  if (Pic8.bg) {
    image8.image = Pic8.bg;
    imageB8.image = Pic8.bg;
    imageC8.image = Pic8.bg;
  }
//  if (Pic9.bg) {
//    image9.image = Pic9.bg;
//    imageB9.image = Pic9.bg;
//    imageC9.image = Pic9.bg;
//  }

// *** Initial loading End *** //

let screen0 = document.getElementById("screen0");
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");
let screen4 = document.getElementById("screen4");
let screen5 = document.getElementById("screen5");
let screen6 = document.getElementById("screen6");
let screen7 = document.getElementById("screen7");
let screen8 = document.getElementById("screen8");
//let screen9 = document.getElementById("screen9");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
//let button9 = document.getElementById("button9");

let SettingScreenA = document.getElementById("SettingScreenA");
let SettingScreen1 = document.getElementById("SettingScreen1");
let SettingScreen2 = document.getElementById("SettingScreen2");
let SettingScreen3 = document.getElementById("SettingScreen3");
let SettingScreen4 = document.getElementById("SettingScreen4");
let SettingScreen5 = document.getElementById("SettingScreen5");
let SettingScreen6 = document.getElementById("SettingScreen6");
let SettingScreen7 = document.getElementById("SettingScreen7");
let SettingScreen8 = document.getElementById("SettingScreen8");
//let SettingScreen9 = document.getElementById("SettingScreen9");

function showScreen0() {
  console.log("Show screen 0");
  vibration.start("bump");
  screen0.style.display = "inline";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showScreen1() {
  console.log("Show screen 1");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "inline";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showScreen2() {
  console.log("Show screen 2");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "inline";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showScreen3() {
  console.log("Show screen 3");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "inline";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showScreen4() {
  console.log("Show screen 4");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "inline";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showScreen5() {
  console.log("Show screen 5");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "inline";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showScreen6() {
  console.log("Show screen 6");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "inline";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showScreen7() {
  console.log("Show screen 7");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "inline";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showScreen8() {
  console.log("Show screen 8");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "inline";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

//function showScreen9() {
//  console.log("Show screen 9");
//  vibration.start("bump");
//  screen0.style.display = "none";
//  screen1.style.display = "none";
//  screen2.style.display = "none";
//  screen3.style.display = "none";
//  screen4.style.display = "none";
//  screen5.style.display = "none";
//  screen6.style.display = "none";
//  screen7.style.display = "none";
//  screen8.style.display = "none";
//  screen9.style.display = "inline";
//  SettingScreenA.style.display = "none";
//  SettingScreen1.style.display = "none";
//  SettingScreen2.style.display = "none";
//  SettingScreen3.style.display = "none";
//  SettingScreen4.style.display = "none";
//  SettingScreen5.style.display = "none";
//  SettingScreen6.style.display = "none";
//  SettingScreen7.style.display = "none";
//  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
//}

function showSettingScreenA() {
  console.log("Show SettingScreen A");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "inline";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showSettingScreen1() {
  console.log("Show SettingScreen 1");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "inline";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showSettingScreen2() {
  console.log("Show SettingScreen 2");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "inline";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showSettingScreen3() {
  console.log("Show SettingScreen 3");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "inline";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showSettingScreen4() {
  console.log("Show SettingScreen 4");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "inline";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showSettingScreen5() {
  console.log("Show SettingScreen 5");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "inline";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showSettingScreen6() {
  console.log("Show SettingScreen 6");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "inline";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showSettingScreen7() {
  console.log("Show SettingScreen 7");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "inline";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "none";
}

function showSettingScreen8() {
  console.log("Show SettingScreen 8");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "inline";
//  SettingScreen9.style.display = "none";
}

function showSettingScreen9() {
  console.log("Show SettingScreen 9");
  vibration.start("bump");
  screen0.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "none";
  screen6.style.display = "none";
  screen7.style.display = "none";
  screen8.style.display = "none";
//  screen9.style.display = "none";
  SettingScreenA.style.display = "none";
  SettingScreen1.style.display = "none";
  SettingScreen2.style.display = "none";
  SettingScreen3.style.display = "none";
  SettingScreen4.style.display = "none";
  SettingScreen5.style.display = "none";
  SettingScreen6.style.display = "none";
  SettingScreen7.style.display = "none";
  SettingScreen8.style.display = "none";
//  SettingScreen9.style.display = "inline";
}

button1.onclick = function() {
  showScreen0();
}
button2.onclick = function() {
  showScreen0();
}
button3.onclick = function() {
  showScreen0();
}
button4.onclick = function() {
  showScreen0();
}
button5.onclick = function() {
  showScreen0();
}
button6.onclick = function() {
  showScreen0();
}
button7.onclick = function() {
  showScreen0();
}
button8.onclick = function() {
  showScreen0();
}
//button9.onclick = function() {
//  showScreen0();
//}


imageB1.onclick = function() {
  showScreen1();
}
imageB2.onclick = function() {
  showScreen2();
}
imageB3.onclick = function() {
  showScreen3();
}
imageB4.onclick = function() {
  showScreen4();
}
imageB5.onclick = function() {
  showScreen5();
}
imageB6.onclick = function() {
  showScreen6();
}
imageB7.onclick = function() {
  showScreen7();
}
imageB8.onclick = function() {
  showScreen8();
}
//imageB9.onclick = function() {
//  showScreen9();
//}

imageC1.onclick = function() {
  showSettingScreen1();
}
imageC2.onclick = function() {
  showSettingScreen2();
}
imageC3.onclick = function() {
  showSettingScreen3();
}
imageC4.onclick = function() {
  showSettingScreen4();
}
imageC5.onclick = function() {
  showSettingScreen5();
}
imageC6.onclick = function() {
  showSettingScreen6();
}
imageC7.onclick = function() {
  showSettingScreen7();
}
imageC8.onclick = function() {
  showSettingScreen8();
}
//imageC9.onclick = function() {
//  showSettingScreen9();
//}

screen0.style.display = "inline";

document.onkeypress = function(evt) {
  if (evt.key === "back") {
    console.log("back button");
    if (screen0.style.display === "inline") {
    // Default behaviour to exit the app
    } else if (SettingScreen1.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen2.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen3.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen4.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen5.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen6.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen7.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen8.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
//    } else if (SettingScreen9.style.display === "inline") {
//      showSettingScreenA();
//      evt.preventDefault();
    } else {
      showScreen0();
      evt.preventDefault();
    }
  }
  if (evt.key === "up") {
    console.log("up button");
    if (screen0.style.display === "inline") {
      
      if ( DisplayToggle == 0 ){
       display.autoOff = true;
       display.on = true;
       display.brightnessOverride = undefined;
       DisplayToggle = `${1}`;
       fs.writeFileSync("DisplayStatus.txt", DisplayToggle, "ascii");
       StatusMessageBord.text = "Reader mode : OFF";
       console.log("DisplayStatus(1):",DisplayToggle);
      } else if ( DisplayToggle == 1){
       display.autoOff = false;
       display.on = true;
       display.brightnessOverride = 1.0;
       DisplayToggle = `${0}`;
       fs.writeFileSync("DisplayStatus.txt", DisplayToggle, "ascii");
       StatusMessageBord.text = "Reader mode : ON";
       console.log("DisplayStatus(0):",DisplayToggle);
      }
      evt.preventDefault();
    } else if (screen1.style.display === "inline") {
      showScreen8();
      evt.preventDefault();
    } else if (screen2.style.display === "inline") {
      showScreen1();
      evt.preventDefault();
    } else if (screen3.style.display === "inline") {
      showScreen2();
      evt.preventDefault();
    } else if (screen4.style.display === "inline") {
      showScreen3();
      evt.preventDefault();
    } else if (screen5.style.display === "inline") {
      showScreen4();
      evt.preventDefault();
    } else if (screen6.style.display === "inline") {
      showScreen5();
      evt.preventDefault();
    } else if (screen7.style.display === "inline") {
      showScreen6();
      evt.preventDefault();
    } else if (screen8.style.display === "inline") {
      showScreen7();
      evt.preventDefault();
//    } else if (screen9.style.display === "inline") {
//      showScreen8();
//      evt.preventDefault();
    } else if (SettingScreenA.style.display === "inline") {
      showScreen0();
      evt.preventDefault();
    } else if (SettingScreen1.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen2.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen3.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen4.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen5.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen6.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen7.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen8.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
//    } else if (SettingScreen9.style.display === "inline") {
//      showSettingScreenA();
//      evt.preventDefault();
    } else {
      showScreen0();
      evt.preventDefault();
    }
  }
  if (evt.key === "down") {
    console.log("down button");
    if (screen0.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (screen1.style.display === "inline") {
      showScreen2();
      evt.preventDefault();
    } else if (screen2.style.display === "inline") {
      showScreen3();
      evt.preventDefault();
    } else if (screen3.style.display === "inline") {
      showScreen4();
      evt.preventDefault();
    } else if (screen4.style.display === "inline") {
      showScreen5();
      evt.preventDefault();
    } else if (screen5.style.display === "inline") {
      showScreen6();
      evt.preventDefault();
    } else if (screen6.style.display === "inline") {
      showScreen7();
      evt.preventDefault();
    } else if (screen7.style.display === "inline") {
      showScreen8();
      evt.preventDefault();
    } else if (screen8.style.display === "inline") {
      showScreen1();
      evt.preventDefault();
//    } else if (screen9.style.display === "inline") {
//      showScreen1();
//      evt.preventDefault();
    } else if (SettingScreenA.style.display === "inline") {
      showScreen0();
      evt.preventDefault();
    } else if (SettingScreen1.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen2.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen3.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen4.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen5.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen6.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen7.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
    } else if (SettingScreen8.style.display === "inline") {
      showSettingScreenA();
      evt.preventDefault();
//    } else if (SettingScreen9.style.display === "inline") {
//      showSettingScreenA();
//      evt.preventDefault();
    } else {
      showSettingScreenA();
      evt.preventDefault();
    }
  }
}

// *** Display control End *** //

// *** Picture transport control Start *** //

me.onunload = saveSettings;

inbox.onnewfile = () => {
  let fileName;
  do {
    fileName = inbox.nextFile();
    console.log(`${fileName} is on the watch storage`);
    if (fileName) {
         let outFileName = fileName + ".txi";
         jpeg.decodeSync(fileName, outFileName);
         fs.unlinkSync(fileName);
         StatusMessageBord.text = `Pic1 is updated`;
//         if (Pic9.bg && Pic9.bg !== "") {
//           fs.unlinkSync(Pic9.bg);
//           Pic9.bg = Pic8.bg;
//           Pic8.bg = Pic7.bg;
//           Pic7.bg = Pic6.bg;
//           Pic6.bg = Pic5.bg;
//           Pic5.bg = Pic4.bg;
//           Pic4.bg = Pic3.bg;
//           Pic3.bg = Pic2.bg;
//           Pic2.bg = Pic1.bg;
//           Pic1.bg = `/private/data/${outFileName}`;
           //StatusMessageBord2.text = `Pic1 is updated, Pic9 is deleted`;
//           console.log(`Pic1 is updated, Pic9 is deleted`);
//           applySettings();
         if (Pic8.bg && Pic8.bg !== "") {
           fs.unlinkSync(Pic8.bg);
//           Pic9.bg = Pic8.bg;
           Pic8.bg = Pic7.bg;
           Pic7.bg = Pic6.bg;
           Pic6.bg = Pic5.bg;
           Pic5.bg = Pic4.bg;
           Pic4.bg = Pic3.bg;
           Pic3.bg = Pic2.bg;
           Pic2.bg = Pic1.bg;
           Pic1.bg = `/private/data/${outFileName}`;
           //StatusMessageBord2.text = `Pic1 is updated`;
           console.log(`Pic1 is updated`);
           applySettings();
         } else if (Pic7.bg && Pic7.bg !== "") {
           Pic8.bg = Pic7.bg;
           Pic7.bg = Pic6.bg;
           Pic6.bg = Pic5.bg;
           Pic5.bg = Pic4.bg;
           Pic4.bg = Pic3.bg;
           Pic3.bg = Pic2.bg;
           Pic2.bg = Pic1.bg;
           Pic1.bg = `/private/data/${outFileName}`;
           //StatusMessageBord2.text = `Pic1 is updated`;
           console.log(`Pic1 is updated`);
           applySettings();
         } else if (Pic6.bg && Pic6.bg !== "") {
           Pic7.bg = Pic6.bg;
           Pic6.bg = Pic5.bg;
           Pic5.bg = Pic4.bg;
           Pic4.bg = Pic3.bg;
           Pic3.bg = Pic2.bg;
           Pic2.bg = Pic1.bg;
           Pic1.bg = `/private/data/${outFileName}`;
           //StatusMessageBord2.text = `Pic1 is updated`;
           console.log(`Pic1 is updated`);
           applySettings();
         } else if (Pic5.bg && Pic5.bg !== "") {
           Pic6.bg = Pic5.bg;
           Pic5.bg = Pic4.bg;
           Pic4.bg = Pic3.bg;
           Pic3.bg = Pic2.bg;
           Pic2.bg = Pic1.bg;
           Pic1.bg = `/private/data/${outFileName}`;
           //StatusMessageBord2.text = `Pic1 is updated`;
           console.log(`Pic1 is updated`);
           applySettings();
         } else if (Pic4.bg && Pic4.bg !== "") {
           Pic5.bg = Pic4.bg;
           Pic4.bg = Pic3.bg;
           Pic3.bg = Pic2.bg;
           Pic2.bg = Pic1.bg;
           Pic1.bg = `/private/data/${outFileName}`;
           //StatusMessageBord2.text = `Pic1 is updated`;
           console.log(`Pic1 is updated`);
           applySettings();
         } else if (Pic3.bg && Pic3.bg !== "") {
           Pic4.bg = Pic3.bg;
           Pic3.bg = Pic2.bg;
           Pic2.bg = Pic1.bg;
           Pic1.bg = `/private/data/${outFileName}`;
           //StatusMessageBord2.text = `Pic1 is updated`;
           console.log(`Pic1 is updated`);
           applySettings();
         } else if (Pic2.bg && Pic2.bg !== "") {
           Pic3.bg = Pic2.bg;
           Pic2.bg = Pic1.bg;
           Pic1.bg = `/private/data/${outFileName}`;
           //StatusMessageBord2.text = `Pic1 is updated`;
           console.log(`Pic1 is updated`);
           applySettings();
         } else if (Pic1.bg && Pic1.bg !== "") {
           Pic2.bg = Pic1.bg;
           Pic1.bg = `/private/data/${outFileName}`;
           //StatusMessageBord2.text = `Pic1 is updated`;
           console.log(`Pic1 is updated`);
           applySettings();
         } else {
           Pic1.bg = `/private/data/${outFileName}`;
           //StatusMessageBord2.text = `Pic1 is updated`;
           console.log(`Pic1 is updated`);
           applySettings();
       };
    };
  } while (fileName);
};

function saveSettings() {
  fs.writeFileSync("Pic1.cbor", Pic1, "cbor");
  fs.writeFileSync("Pic2.cbor", Pic2, "cbor");
  fs.writeFileSync("Pic3.cbor", Pic3, "cbor");
  fs.writeFileSync("Pic4.cbor", Pic4, "cbor");
  fs.writeFileSync("Pic5.cbor", Pic5, "cbor");
  fs.writeFileSync("Pic6.cbor", Pic6, "cbor");
  fs.writeFileSync("Pic7.cbor", Pic7, "cbor");
  fs.writeFileSync("Pic8.cbor", Pic8, "cbor");
//  fs.writeFileSync("Pic9.cbor", Pic9, "cbor");
}

function applySettings() {
  if (Pic1.bg) {
    image1.image = Pic1.bg;
    imageB1.image = Pic1.bg;
    imageC1.image = Pic1.bg;
  } else {
    image1.image = ``;
    imageB1.image = ``;
    imageC1.image = ``;
  }
  if (Pic2.bg) {
    image2.image = Pic2.bg;
    imageB2.image = Pic2.bg;
    imageC2.image = Pic2.bg;
  } else {
    image2.image = ``;
    imageB2.image = ``;
    imageC2.image = ``;
  }
  if (Pic3.bg) {
    image3.image = Pic3.bg;
    imageB3.image = Pic3.bg;
    imageC3.image = Pic3.bg;
  } else {
    image3.image = ``;
    imageB3.image = ``;
    imageC3.image = ``;
  }
  if (Pic4.bg) {
    image4.image = Pic4.bg;
    imageB4.image = Pic4.bg;
    imageC4.image = Pic4.bg;
  } else {
    image4.image = ``;
    imageB4.image = ``;
    imageC4.image = ``;
  }
  if (Pic5.bg) {
    image5.image = Pic5.bg;
    imageB5.image = Pic5.bg;
    imageC5.image = Pic5.bg;
  } else {
    image5.image = ``;
    imageB5.image = ``;
    imageC5.image = ``;
  }
  if (Pic6.bg) {
    image6.image = Pic6.bg;
    imageB6.image = Pic6.bg;
    imageC6.image = Pic6.bg;
  } else {
    image6.image = ``;
    imageB6.image = ``;
    imageC6.image = ``;
  }
  if (Pic7.bg) {
    image7.image = Pic7.bg;
    imageB7.image = Pic7.bg;
    imageC7.image = Pic7.bg;
  } else {
    image7.image = ``;
    imageB7.image = ``;
    imageC7.image = ``;
  }
  if (Pic8.bg) {
    image8.image = Pic8.bg;
    imageB8.image = Pic8.bg;
    imageC8.image = Pic8.bg;
  } else {
    image8.image = ``;
    imageB8.image = ``;
    imageC8.image = ``;
  }
//  if (Pic9.bg) {
//    image9.image = Pic9.bg;
//    imageB9.image = Pic9.bg;
//    imageC9.image = Pic9.bg;
//  } else {
//    image9.image = ``;
//    imageB9.image = ``;
//    imageC9.image = ``;
//  }
    display.on = true;
    vibration.start("ping");
}

// *** Picture transport control End *** //

// *** Setting Start *** //

let btnLeft1 = SettingScreen1.getElementById("btnLeft1");
let btnRight1 = SettingScreen1.getElementById("btnRight1");
let btnLeft2 = SettingScreen2.getElementById("btnLeft2");
let btnRight2 = SettingScreen2.getElementById("btnRight2");
let btnLeft3 = SettingScreen3.getElementById("btnLeft3");
let btnRight3 = SettingScreen3.getElementById("btnRight3");
let btnLeft4 = SettingScreen4.getElementById("btnLeft4");
let btnRight4 = SettingScreen4.getElementById("btnRight4");
let btnLeft5 = SettingScreen5.getElementById("btnLeft5");
let btnRight5 = SettingScreen5.getElementById("btnRight5");
let btnLeft6 = SettingScreen6.getElementById("btnLeft6");
let btnRight6 = SettingScreen6.getElementById("btnRight6");
let btnLeft7 = SettingScreen7.getElementById("btnLeft7");
let btnRight7 = SettingScreen7.getElementById("btnRight7");
let btnLeft8 = SettingScreen8.getElementById("btnLeft8");
let btnRight8 = SettingScreen8.getElementById("btnRight8");
//let btnLeft9 = SettingScreen9.getElementById("btnLeft9");
//let btnRight9 = SettingScreen9.getElementById("btnRight9");

btnLeft1.onclick = function(evt) {
  showSettingScreenA();
}
btnRight1.onclick = function(evt) {
  try {
  fs.unlinkSync(Pic1.bg);
  }catch (e) {
  console.log(e);
  }
    Pic1.bg = Pic2.bg;
    Pic2.bg = Pic3.bg;
    Pic3.bg = Pic4.bg;
    Pic4.bg = Pic5.bg;
    Pic5.bg = Pic6.bg;
    Pic6.bg = Pic7.bg;
    Pic7.bg = Pic8.bg;
//    Pic8.bg = Pic9.bg;
    Pic8.bg = ``;
    applySettings();
  showSettingScreenA();
}
btnLeft2.onclick = function(evt) {
  showSettingScreenA();
}
btnRight2.onclick = function(evt) {
  try {
  fs.unlinkSync(Pic2.bg);
  }catch (e) {
  console.log(e);
  }
    Pic2.bg = Pic3.bg;
    Pic3.bg = Pic4.bg;
    Pic4.bg = Pic5.bg;
    Pic5.bg = Pic6.bg;
    Pic6.bg = Pic7.bg;
    Pic7.bg = Pic8.bg;
//    Pic8.bg = Pic9.bg;
    Pic8.bg = ``;
    applySettings();
  showSettingScreenA();
}
btnLeft3.onclick = function(evt) {
  showSettingScreenA();
}
btnRight3.onclick = function(evt) {
  try {
  fs.unlinkSync(Pic3.bg);
  }catch (e) {
  console.log(e);
  }
    Pic3.bg = Pic4.bg;
    Pic4.bg = Pic5.bg;
    Pic5.bg = Pic6.bg;
    Pic6.bg = Pic7.bg;
    Pic7.bg = Pic8.bg;
//    Pic8.bg = Pic9.bg;
    Pic8.bg = ``;
    applySettings();
  showSettingScreenA();
}
btnLeft4.onclick = function(evt) {
  showSettingScreenA();
}
btnRight4.onclick = function(evt) {
  try {
  fs.unlinkSync(Pic4.bg);
  }catch (e) {
  console.log(e);
  }
    Pic4.bg = Pic5.bg;
    Pic5.bg = Pic6.bg;
    Pic6.bg = Pic7.bg;
    Pic7.bg = Pic8.bg;
//    Pic8.bg = Pic9.bg;
    Pic8.bg = ``;
    applySettings();
  showSettingScreenA();
}
btnLeft5.onclick = function(evt) {
  showSettingScreenA();
}
btnRight5.onclick = function(evt) {
  try {
  fs.unlinkSync(Pic5.bg);
  }catch (e) {
  console.log(e);
  }
    Pic5.bg = Pic6.bg;
    Pic6.bg = Pic7.bg;
    Pic7.bg = Pic8.bg;
//    Pic8.bg = Pic9.bg;
    Pic8.bg = ``;
    applySettings();
  showSettingScreenA();
}
btnLeft6.onclick = function(evt) {
  showSettingScreenA();
}
btnRight6.onclick = function(evt) {
  try {
  fs.unlinkSync(Pic6.bg);
  }catch (e) {
  console.log(e);
  }
    Pic6.bg = Pic7.bg;
    Pic7.bg = Pic8.bg;
//    Pic8.bg = Pic9.bg;
    Pic8.bg = ``;
    applySettings();
  showSettingScreenA();
}
btnLeft7.onclick = function(evt) {
  showSettingScreenA();
}
btnRight7.onclick = function(evt) {
  try {
  fs.unlinkSync(Pic7.bg);
  }catch (e) {
  console.log(e);
  }
    Pic7.bg = Pic8.bg;
//    Pic8.bg = Pic9.bg;
    Pic8.bg = ``;
    applySettings();
  showSettingScreenA();
}
btnLeft8.onclick = function(evt) {
  showSettingScreenA();
}
btnRight8.onclick = function(evt) {
  try {
  fs.unlinkSync(Pic8.bg);
  }catch (e) {
  console.log(e);
  }
//    Pic8.bg = Pic9.bg;
    Pic8.bg = ``;
    applySettings();
  showSettingScreenA();
}
//btnLeft9.onclick = function(evt) {
//  showSettingScreenA();
//}
//btnRight9.onclick = function(evt) {
//  try {
//  fs.unlinkSync(Pic9.bg);
//  }catch (e) {
//  console.log(e);
//  }
//    Pic9.bg = ``;
//    applySettings();
//  showSettingScreenA();
//}

// *** Setting End *** //

// *** Status Display Start *** //

StatusMessageBord.text = "Open Fitbit app to upload Pics";

messaging.peerSocket.onmessage = function(evt) {
  StatusMessageBord.text = evt.data;
  display.on = true;
}

// *** Status Display End *** //
