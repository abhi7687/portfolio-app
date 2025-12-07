import { View, Text, StyleSheet } from "react-native";
import { useProfile } from "../../hooks/useProfile";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import InfoRow from "@/components/InfoRow";
import { ScrollView } from "react-native-gesture-handler";
import Loader from "@/components/Loader";
import { fontSize } from "@/utils/fontSize";

export default function ProfileScreen() {
  const profile = useProfile();

  if (!profile) {
    return (
      <Loader />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: verticalScale(40) }}
      >

        {/* Profile Card */}
        <View style={styles.card}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>

          <View style={styles.divider} />

          <Text style={styles.bio}>{profile.bio}</Text>

          <InfoRow icon="mail" text={profile.email} />
          <InfoRow icon="phone" text={profile.phone} />
          <InfoRow icon="map-pin" text={profile.location} />
          <InfoRow icon="github" text={profile.github} />
          <InfoRow icon="linkedin" text={profile.linkedIn} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
    paddingTop: verticalScale(40),
  },

  card: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    marginTop: verticalScale(10),
    padding: moderateScale(20),
    borderRadius: moderateScale(20),
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },

  name: {
    fontSize: fontSize(24),
    fontWeight: "bold",
    textAlign: "center",
    color: "#111",
  },

  title: {
    fontSize: fontSize(14),
    textAlign: "center",
    color: "#FF6A00",
    marginTop: verticalScale(4),
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: verticalScale(15),
  },

  bio: {
    textAlign: "justify",
    fontSize: fontSize(14),
    color: "#444",
    marginBottom: verticalScale(15),
    lineHeight: fontSize(22),
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: verticalScale(6),
  },

  infoText: {
    marginLeft: verticalScale(10),
    fontSize: fontSize(15),
    color: "#555",
  },
});
