import { StyleSheet } from "react-native";
import {DIMENSIONS} from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: DIMENSIONS.PADDING_XL * 2,
    paddingHorizontal: DIMENSIONS.PADDING_SM,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  center: {
    fontWeight: "bold",
    fontSize: DIMENSIONS.FONT_MD,
  }
});

export default styles