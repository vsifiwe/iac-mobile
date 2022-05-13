import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./AlarmsCard.style";
import { COLORS, DIMENSIONS } from "../../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Switch } from "react-native-switch";
import { Button, Card, Modal } from "@ui-kitten/components";
import {getData} from '../../helper/storage'
import axios from "axios";

const AlarmsCard = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [next, setNext] = useState(new Date());
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const currentTime = new Date();

  useEffect(() => {
    setLoading(true);
    fetch("https://iac-backend.herokuapp.com/next")
      .then((res) => res.json())
      .then((data) => {
        setNext(new Date(data.next));
        setLoading(false);
      });
  }, []);

  const handleSwith = () => {
    // make a request to the backend

    getData().then(data =>{
      if(!isEnabled) {
        console.log(`${data.ip}/5/on`)
        axios.get(`http://${data.ip}/5/on`)
        .then(() => toggleSwitch())
      }else 
        axios.get(`http://${data.ip}/5/off`)
        .then(() => {
          toggleSwitch()
          setVisible(true);
        })
      }
      ).then(() => {
        toggleSwitch()
        setVisible(true);
      })
    ;
  };

  return (
    <View style={styles.container}>
      <View style={styles.switch}>
        <Text style={styles.text_switch}>alarm</Text>
        <Switch
          value={isEnabled}
          onValueChange={handleSwith}
          disabled={false}
          activeText={"on"}
          inActiveText={"off"}
          circleSize={30}
          barHeight={30}
          circleBorderWidth={2}
          inactiveTextStyle={{ color: COLORS.BLACK }}
          backgroundActive={COLORS.BLACK}
          backgroundInactive={COLORS.LIGHT_GRAY}
          circleActiveColor={COLORS.WHITE}
          circleInActiveColor={COLORS.DARK_GRAY}
          switchLeftPx={5}
          switchRightPx={5}
          switchBorderRadius={40} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
        />
      </View>

      <View style={styles.to_bed_container}>
        <Ionicons
          name="time"
          size={DIMENSIONS.ICON_SIZE}
          color={COLORS.DARK_GRAY}
          style={styles.icon}
        />
        <View style={styles.text_container}>
          <Text style={styles.subtitle}>now</Text>
          <Text style={styles.title}>
            {currentTime.getHours() + ":" + currentTime.getMinutes()}
          </Text>
        </View>
      </View>
      <View style={styles.separator}></View>
      <Pressable onPress={() => navigation.navigate("Settings")}>
        <View style={styles.to_bed_container}>
          <Ionicons
            name="snow"
            size={DIMENSIONS.ICON_SIZE}
            color={COLORS.LIGHT_GRAY}
            style={[styles.icon1, styles.icon]}
          />
          <Text style={styles.mid_text}>8 hours to next alarm</Text>
          <Ionicons
            name="chevron-forward"
            size={DIMENSIONS.ICON_SIZE_SM}
            color={COLORS.DARK_GRAY}
            style={[styles.icon, styles.icon2]}
          />
        </View>
      </Pressable>
      <View style={styles.separator}></View>
      <View style={styles.to_bed_container}>
        <Ionicons
          name="alarm"
          size={DIMENSIONS.ICON_SIZE}
          color={COLORS.DARK_GRAY}
          style={styles.icon}
        />
        <View style={styles.text_container}>
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.PRIMARY} />
          ) : (
            <Text style={styles.title}>
              {next.getHours() + ":" + next.getMinutes()}
            </Text>
          )}
          <Text style={styles.subtitle}>wake up</Text>
        </View>
      </View>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
			{
				isEnabled ? <Text style={styles.text}>Alarm switched on successfully</Text> : <Text style={styles.text}>Alarm switched off successfully</Text>
			}
          <Button onPress={() => setVisible(false)}>DISMISS</Button>
        </Card>
      </Modal>
    </View>
  );
};

export default AlarmsCard;
