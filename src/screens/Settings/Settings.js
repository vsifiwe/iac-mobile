import { View, Text } from "react-native";
import React from "react";
import styles from "./Settings.style";
import { StatusBar } from "expo-status-bar";
import { Input, Button, Card, Modal } from "@ui-kitten/components";
import {storeData} from '../../helper/storage'

const Settings = () => {
  const [email, setEmail] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");
  const [ip, setIp] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const handleSave = () => {
	  const data = {
		  "email": email,
		  "lat": lat,
		  "long": long,
      "ip": ip
	  }

	  storeData(data).then(() => 
	  setVisible(!visible)
	  )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <StatusBar style="auto" />
      <Input
	  	  style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <Input
	  	  style={styles.input}
        placeholder="Home Latitude"
        value={lat}
        onChangeText={(nextValue) => setLat(nextValue)}
      />
      <Input
	  	  style={styles.input}
        placeholder="Home Longitude"
        value={long}
        onChangeText={(nextValue) => setLong(nextValue)}
      />
      <Input
	  	  style={styles.input}
        placeholder="Device IP Address"
        value={ip}
        onChangeText={(nextValue) => setIp(nextValue)}
      />
	  <Button onPress={handleSave} status="danger">
		  Save
	  </Button> 

	  <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text style={styles.title}>Your data has been saved successfully. 😻</Text>
          <Text style={styles.title}>Make sure to restart the application</Text>
          <Button onPress={() => setVisible(false)}>
            DISMISS
          </Button>
        </Card>
      </Modal>
    </View>
  );
};

export default Settings;
