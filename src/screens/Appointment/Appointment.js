import { View, Text } from "react-native";
import React from "react";
import styles from "./Appointment.style";
import { Divider, List, ListItem } from "@ui-kitten/components";
import axios from "axios";
import { getData } from "../../helper/storage";

const Appointment = () => {
  const [loading, setLoading] = React.useState(false);
  const [appointments, setAppointments] = React.useState([]);

  // const data = [
  //   {
  //     title: "Aegis Daily standup",
  //     date: "03/05/2022 10:00",
  //     description: "Google Meet"
  //   }, 
  //   {
  //     title: "Eye doctor",
  //     date: "03/05/2020 13:00",
  //     description: "KK 217 ST",
  //   },
  //   {
  //     title: "Amalitech Town hall",
  //     date: "03/05/2020 16:00",
  //     description: "Microsoft Teams"
  //   }
  // ]

  React.useEffect(() => {
    setLoading(true);
    getData()
      .then((data) =>
        axios
          .get("https://iac-django.herokuapp.com/api/events", {
            params: {
              email: data.email,
            },
          })
          .then((res) => {
            // console.log(res.data.message[0].start)
            setAppointments(res.data.message)
            console.log(appointments)
          })
          .then(() => setLoading(false))
          .catch((err) => console.error(err))
      )
      .catch((err) => console.error(err));
  }, []);

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.summary} - ${item.start.dateTime}`}
      description={`${item.location}`}
      // title={`Summary - 12-12-2022`}
      // description={`Kigali`}
    />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.center}>Loading...</Text>
      ) : appointments.length == 0 ? <Text style={styles.center}>You do not have any appointments</Text>:(
        <List
          // style={styles.container}
          data={appointments}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Appointment;
