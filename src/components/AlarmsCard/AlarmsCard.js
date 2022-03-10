import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./AlarmsCard.style";
import { COLORS, DIMENSIONS } from "../../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Switch } from "react-native-switch";

const AlarmsCard = ({ navigation }) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	return (
		<View style={styles.container}>
			<View style={styles.switch}>
				<Text style={styles.text_switch}>alarm</Text>
				{/* <Switch
					trackColor={{ false: COLORS.LIGHT_GRAY, true: COLORS.DARK_GRAY }}
					thumbColor={isEnabled ? COLORS.SECONDARY : COLORS.PRIMARY}
					ios_backgroundColor={COLORS.GRAY}
					onValueChange={toggleSwitch}
					value={isEnabled}
				/> */}
				<Switch
					value={isEnabled}
					onValueChange={toggleSwitch}
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
					<Text style={styles.title}>23:30</Text>
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
					<Text style={styles.title}>7:30</Text>
					<Text style={styles.subtitle}>wake up</Text>
				</View>
			</View>
		</View>
	);
};

export default AlarmsCard;
