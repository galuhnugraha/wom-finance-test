// src/components/UserCard.tsx
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { User } from "../types/user";

interface Props {
  user: User;
  onPress: () => void;
}

export default function UserCard({ user, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.name.charAt(0).toUpperCase()}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
 card: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: 16,
  marginHorizontal: 16,
  marginVertical: 8, // jarak antar card
  borderRadius: 12,
},

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#4F46E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  email: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
});
