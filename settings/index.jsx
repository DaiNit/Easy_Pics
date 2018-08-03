function mySettings(props) {
  let screenWidth = props.settingsStorage.getItem("screenWidth");
  let screenHeight = props.settingsStorage.getItem("screenHeight");

  return (
    <Page>    
      <Section
        title={<Text>Keep EasyPics App active while you upload pics. The picture you upload will be add as for Pic1. Please choose different pictures every time.</Text>}>
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
          title="Picture upload"
          label="Pick an image to upload"
          settingsKey="image"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
    </Page>
  );
}

registerSettingsPage(mySettings);
