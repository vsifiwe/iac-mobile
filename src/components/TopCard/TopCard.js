import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./TopCard.style";

const image = require("../../../assets/background.png");

const TopCard = () => {
	return (
		<View style={styles.container}>
			<ImageBackground source={image} resizeMethod="auto" style={styles.image}>
				<Text style={styles.title}>Your next appointment:</Text>
				<Text style={styles.body}>A zoom meeting with INEZA</Text>
				<Text style={styles.time}>18:30</Text>
			</ImageBackground>
		</View>
	);
};

export default TopCard;
