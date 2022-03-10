import { View, Text } from "react-native";
import React from "react";
import styles from "./Settings.style";
import { StatusBar } from "expo-status-bar";

const Settings = () => {
	return (
		<View style={styles.container}>
			<Text>Settings Screen</Text>
			<StatusBar style="auto" />
		</View>
	);
};

export default Settings;
