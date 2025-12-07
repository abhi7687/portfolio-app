import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useContact } from "../../hooks/useContact";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoRow from "@/components/InfoRow";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Loader from "@/components/Loader";

export default function ContactScreen() {
  const contact = useContact();

  if (!contact) {
    return (
      <Loader />
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(40)
        }}
      >

        <View style={styles.card}>
          <InfoRow icon="mail" text={contact.email} />

          {contact.phone && (
            <InfoRow icon="phone" text={contact.phone} />
          )}

          {contact.linkedIn && (
            <InfoRow icon="linkedin" text={contact.linkedIn} />
          )}

          {contact.github && (
            <InfoRow icon="github" text={contact.github} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingVertical: verticalScale(40),
  },

  card: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: moderateScale(20),
    borderRadius: moderateScale(20),
    marginVertical: verticalScale(10),
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },
});
