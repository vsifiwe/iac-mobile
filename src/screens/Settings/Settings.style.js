import { StyleSheet } from "react-native";
import style from "../../styles/dimensions.style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: style.PADDING_XL * 2,
    paddingHorizontal: style.PADDING_XL,
  },
  title: {
    marginBottom: style.MARGIN_L,
  },
  input: {
    marginBottom: style.MARGIN_L,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default styles;
