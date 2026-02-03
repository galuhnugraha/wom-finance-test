// src/screens/DetailScreen.tsx
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import UserCard from "../components/UserCard";

type Props = {
  route: RouteProp<RootStackParamList, "Detail">;
};

export default function DetailScreen({ route }: Props) {
  const { user } = route.params;

  // Helper untuk format address agar bisa tampil sebagai string
  const formatAddress = (address: any) => {
    if (!address) return "N/A";
    return `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`;
  };

  return (
    <ScrollView style={styles.container}>
      {/* UserCard */}
      <UserCard user={user} onPress={() => {}} />

      {/* Detail Info */}
      <View style={styles.infoCard}>
        <Text style={styles.label}>ID</Text>
        <Text style={styles.value}>{user.id}</Text>

        <Text style={styles.label}>Username</Text>
        <Text style={styles.value}>{user.username}</Text>

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{user.phone}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email || "N/A"}</Text>

        <Text style={styles.label}>Website</Text>
        <Text style={styles.value}>{user.website || "N/A"}</Text>

        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{formatAddress(user.address)}</Text>

        <Text style={styles.label}>Company</Text>
        <Text style={styles.value}>{user.company?.name || "N/A"}</Text>
        <Text style={styles.valueSmall}>{user.company?.catchPhrase || ""}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  infoCard: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // for Android shadow
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
    marginTop: 4,
  },
  valueSmall: {
    fontSize: 14,
    color: "#555",
    fontStyle: "italic",
    marginTop: 2,
  },
});
