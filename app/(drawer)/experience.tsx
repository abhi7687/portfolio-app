import { View, Text, StyleSheet } from "react-native";
import { useExperience } from "../../hooks/useExperience";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Loader from "@/components/Loader";
import { fontSize } from "@/utils/fontSize";

export default function ExperienceScreen() {
  const experience = useExperience();

  if (!experience.length) {
    return (
      <Loader />
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

        {experience.map((item) => (
          <View key={item.id} style={styles.card}>

            <Text style={styles.role}>{item.role}</Text>
            <Text style={styles.company}>{item.company}</Text>

            <Text style={styles.date}>
              {item.startDate} → {item.endDate ?? "Present"}
            </Text>

            <Text style={styles.descriptionTitle}>Responsibilities:</Text>

            {item.description.map((point, index) => (
              <Text key={index} style={styles.descriptionPoint}>
                • {point}
              </Text>
            ))}

            <Text style={styles.techTitle}>Technologies Used:</Text>

            <View style={styles.techWrapper}>
              {item.technologies.map((tech, index) => (
                <View key={index} style={styles.techPill}>
                  <Text style={styles.techText}>{tech}</Text>
                </View>
              ))}
            </View>

          </View>
        ))}

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
    padding: moderateScale(16),
    borderRadius: moderateScale(16),
    marginVertical: verticalScale(10),
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },

  role: {
    fontSize: fontSize(20),
    fontWeight: "bold",
    color: "#111",
  },

  company: {
    fontSize: fontSize(16),
    color: "#FF6A00",
    marginTop: verticalScale(4),
  },

  date: {
    fontSize: fontSize(14),
    color: "#777",
    marginVertical: verticalScale(4),
  },

  descriptionTitle: {
    fontSize: fontSize(15),
    fontWeight: "600",
    marginBottom: verticalScale(6),
  },

  descriptionPoint: {
    fontSize: fontSize(14),
    color: "#444",
    marginBottom: verticalScale(4),
    lineHeight: fontSize(20),
    textAlign: "left",
  },

  techTitle: {
    fontSize: fontSize(15),
    fontWeight: "600",
    marginBottom: verticalScale(6),
  },

  techWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: fontSize(6),
  },

  techPill: {
    backgroundColor: "#FF6A0033",
    paddingHorizontal: fontSize(10),
    paddingVertical: fontSize(5),
    borderRadius: moderateScale(12),
  },

  techText: {
    fontSize: fontSize(13),
    color: "#FF6A00",
    fontWeight: "600",
  },
});