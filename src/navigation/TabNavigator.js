import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, SettingsScreen } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles";

const Tab = createBottomTabNavigator();

const options = {
	headerShown: false,
};

const TabNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Home") {
							iconName = focused ? "planet" : "planet-outline";
						} else if (route.name === "Settings") {
							iconName = focused ? "settings" : "settings-outline";
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: COLORS.PRIMARY,
					tabBarInactiveTintColor: COLORS.GRAY,
				})}
			>
				<Tab.Screen name="Home" component={HomeScreen} options={options} />
				<Tab.Screen
					name="Settings"
					component={SettingsScreen}
					options={options}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default TabNavigator;
