function mySettings(props) {
  let screenWidth = props.settingsStorage.getItem("screenWidth");
  let screenHeight = props.settingsStorage.getItem("screenHeight");

  return (
    <Page>    
      <Section
        title={<Text>Keep EasyPics App active while you upload pics. You may need to select pics several times.</Text>}>
      </Section>
      <Section
        title="Picture Quality and Transfer speed">
        <Select
          label="Mode"
          settingsKey="Quality"
          options={[
          {name:"Low quality / High speed"},
          {name:"Mid quality / Mid speed (Default)"},
          {name:"High quality / Low speed"}
        ]}
        />
      </Section>
     <ImagePicker
          title="Picture No.1"
          label="Pick an image for Pic 1"
          settingsKey="image1"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
        <ImagePicker
         title="Picture No.2"
          label="Pick an image for Pic 2"
          settingsKey="image2"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
        <ImagePicker
         title="Picture No.3"
          label="Pick an image for Pic 3"
          settingsKey="image3"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
        <ImagePicker
         title="Picture No.4"
          label="Pick an image for Pic 4"
          settingsKey="image4"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
        <ImagePicker
         title="Picture No.5"
          label="Pick an image for Pic 5"
          settingsKey="image5"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
        <ImagePicker
         title="Picture No.6"
          label="Pick an image for Pic 6"
          settingsKey="image6"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
        <ImagePicker
         title="Picture No.7"
          label="Pick an image for Pic 7"
          settingsKey="image7"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
        <ImagePicker
         title="Picture No.8"
          label="Pick an image for Pic 8"
          settingsKey="image8"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
        <ImagePicker
         title="Picture No.9"
          label="Pick an image for Pic 9"
          settingsKey="image9"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
    </Page>
  );
}

registerSettingsPage(mySettings);
