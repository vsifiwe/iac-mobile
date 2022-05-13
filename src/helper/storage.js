import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@iac_data", jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@iac_data");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};