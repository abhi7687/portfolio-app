import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Platform, View } from "react-native";

export default function DrawerLayout() {
  const isWeb = Platform.OS === "web";
  return (
    <Drawer
      screenOptions={{
        headerTransparent: true,
        headerShown: true,
        drawerType: isWeb ? "permanent" : "front",
        swipeEnabled: !isWeb,
        drawerStyle: {
          backgroundColor: "#ffffff",
          width: 260,
          borderRightWidth: isWeb ? 1 : 0,
          borderRightColor: "#eee",
        },
        // sceneStyle: {
        //   marginLeft: isWeb ? 260 : 0,
        // },
        headerTitleAlign: "center",
        drawerActiveTintColor: "#FF6A00",
        drawerInactiveTintColor: "#555",
        headerLeft: isWeb ? () => <View /> : undefined,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="experience"
        options={{
          title: "Experience",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="education"
        options={{
          title: "Education",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="projects"
        options={{
          title: "Projects",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="folder-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="skills"
        options={{
          title: "Skills",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bulb-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="contact"
        options={{
          title: "Contact",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
