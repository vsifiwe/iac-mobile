import React from "react";
import styles from "./Home.style";
import { StatusBar } from "expo-status-bar";
import { AlarmsCard, TopCard } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Pressable onPress={() => navigation.navigate("Settings")}>
				<TopCard />
			</Pressable>
			<AlarmsCard navigation={navigation} />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

export default Home;
