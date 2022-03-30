import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./TopCard.style";
import { COLORS } from "../../styles";

const image = require("../../../assets/background.png");

const TopCard = () => {
	const [loading, setLoading] = useState(false);
	const [events, setEvents] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch("https://iac-backend.herokuapp.com/events")
			.then((res) => res.json())
			.then((data) => {
				setEvents(data.events);
				setLoading(false);
			});
	}, []);

	return (
		<View style={styles.container}>
			<ImageBackground source={image} resizeMethod="auto" style={styles.image}>
				{loading ? (
					<ActivityIndicator size="large" color={COLORS.PRIMARY} />
				) : (
					<>
						<Text style={styles.title}>Your next appointment:</Text>
						<Text style={styles.body}>{events[0].summary}</Text>
						<Text style={styles.time}>18:30</Text>
					</>
				)}
			</ImageBackground>
		</View>
	);
};

export default TopCard;
