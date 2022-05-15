import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./TopCard.style";
import { COLORS } from "../../styles";
import axios from "axios";
import {getData} from '../../helper/storage'

const image = require("../../../assets/background.png");

const TopCard = () => {
	const [loading, setLoading] = useState(false);
	const [events, setEvents] = useState([]);
	const [date, setDate] = useState([]);
	const [time, setTime] = useState("")

	useEffect(() => {
		setLoading(true);
		getData().then(
			data => 
			axios.get('https://iac-django.herokuapp.com/api/events', {
				params: {
					email: data.email
				}
			})
			.then(res => setEvents(res.data.message)).then(() => {
				setDate(events[0].start.dateTime.split("T"))
				console.log(date[1])
				let time = date[1].split(":");
				setTime(`${time[0]}:${time[1]}`)
			})
			.then(() => setLoading(false))
			.catch(err => console.error(err))
		).catch(err => console.error(err))
		
	}, []);

	return (
		<View style={styles.container}>
			<ImageBackground source={image} resizeMethod="auto" style={styles.image}>
				{loading ? (
					<ActivityIndicator size="large" color={COLORS.PRIMARY} />
				) : (

					events.length !== 0 ?
					<>
						<Text style={styles.title}>Your next appointment:</Text>
						<Text style={styles.body}>{events[0].summary}</Text>
						<Text style={styles.time}>{`${date[0]} - ${time}`}</Text>
					</>

					:

					<>
						<Text style={styles.title}>You do not have any appointment.</Text>
						<Text style={styles.body}>Yaay! 🎉</Text>
						{/* <Text style={styles.time}>18:30</Text> */}
					</>
				)}
			</ImageBackground>
		</View>
	);
};

export default TopCard;
