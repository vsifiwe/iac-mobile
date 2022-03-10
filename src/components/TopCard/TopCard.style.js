import { StyleSheet } from "react-native";
import { DIMENSIONS, COLORS } from "../../styles";

const styles = StyleSheet.create({
	container: {
		height: DIMENSIONS.FULL_HEIGHT * 0.25,
		backgroundColor: COLORS.WHITE,
		width: DIMENSIONS.FULL_WIDTH * 0.8,
		borderRadius: DIMENSIONS.BORDER_RADIUS_L,
		overflow: "hidden",
	},
	image: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		opacity: 0.65,
	},
	title: {
		color: COLORS.BLACK,
		fontWeight: "500",
	},
	body: {
		color: COLORS.BLACK,
		fontSize: 20,
		fontStyle: "italic",
		fontWeight: "bold",
	},
	time: {
		color: COLORS.COMPLIMENT,
		fontWeight: "600",
		fontSize: DIMENSIONS.FONT_MD,
	},
});

export default styles;
