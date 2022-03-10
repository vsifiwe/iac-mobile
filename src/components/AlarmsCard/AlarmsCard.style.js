import { StyleSheet } from "react-native";
import { DIMENSIONS, COLORS } from "../../styles";

const styles = StyleSheet.create({
	container: {
		marginTop: DIMENSIONS.MARGIN_XL,
		height: DIMENSIONS.FULL_HEIGHT * 0.55,
		backgroundColor: COLORS.WHITE,
		width: DIMENSIONS.FULL_WIDTH * 0.8,
		borderRadius: DIMENSIONS.BORDER_RADIUS_L,
		padding: DIMENSIONS.PADDING_XL,
		paddingTop: DIMENSIONS.PADDING_L,
	},
	switch: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: DIMENSIONS.PADDING_SM,
		borderBottomColor: COLORS.LIGHT_GRAY,
		borderBottomWidth: DIMENSIONS.BORDER_SM,
		marginBottom: DIMENSIONS.MARGIN_XL,
	},
	text_switch: {
		textAlignVertical: "center",
		color: COLORS.GRAY,
		fontWeight: "bold",
		fontSize: DIMENSIONS.FONT_MD,
		marginBottom: DIMENSIONS.MARGIN_L,
	},
	to_bed_container: {
		flexDirection: "row",
	},
	icon: {
		paddingRight: DIMENSIONS.PADDING_L,
		textAlignVertical: "center",
	},
	title: {
		fontWeight: "bold",
		color: COLORS.DARK_GRAY,
		fontSize: DIMENSIONS.FONT_L,
	},
	subtitle: {
		color: COLORS.GRAY,
		fontSize: DIMENSIONS.FONT_MD,
		fontWeight: "500",
		textAlignVertical: "center",
	},
	icon1: {
		marginVertical: DIMENSIONS.MARGIN_MD,
	},
	separator: {
		height: 20,
		borderLeftWidth: DIMENSIONS.BORDER_MD,
		borderLeftColor: COLORS.LIGHT_GRAY,
		width: DIMENSIONS.FULL_WIDTH * 0.6,
		marginLeft: 15,
	},
	mid_text: {
		color: COLORS.GRAY,
		textAlignVertical: "center",
	},
	icon2: {
		marginLeft: DIMENSIONS.MARGIN_L,
	},
});

export default styles;
