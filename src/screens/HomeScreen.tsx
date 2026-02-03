// src/screens/HomeScreen.tsx
import { View, Text, FlatList, RefreshControl,StyleSheet,useColorScheme, Alert  } from "react-native";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { User } from "../types/user";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }: any) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();

  const fetchUsers = async () => {
    try {
      const res = await api.get<User[]>("/users");
      setUsers(res.data);
    } catch {
      Alert.alert("Gagal fetch data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <Loading />;

    if (!users || users.length === 0) {
    return (
      <View style={[styles.center, { backgroundColor: scheme === "dark" ? "#121212" : "#f5f5f5" }]}>
        <Text style={[styles.emptyText, { color: scheme === "dark" ? "#888" : "#999" }]}>
          No users available.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, margin: 10 }}>
        Total users: {users.length}
      </Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: insets.bottom }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchUsers} />
        }
        renderItem={({ item }) => (
          <UserCard
            user={item}
            onPress={() => navigation.navigate("Detail", { user: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
  },
});