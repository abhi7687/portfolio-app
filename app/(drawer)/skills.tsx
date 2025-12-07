import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSkills } from "../../hooks/useSkills";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Loader from "@/components/Loader";
import { fontSize } from "@/utils/fontSize";

export default function SkillsScreen() {
  const skills = useSkills();

  if (!skills.length) {
    return (
      <Loader />
    )
  };

  // Group skills by category
  const grouped = skills.reduce((acc: any, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

        {Object.keys(grouped).map((category) => (
          <View key={category} style={styles.card}>

            <Text style={styles.category}>{category}</Text>

            <View style={styles.skillWrapper}>
              {grouped[category].map((name: string, index: number) => (
                <View key={index} style={styles.skillPill}>
                  <Text style={styles.skillText}>{name}</Text>
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

  category: {
    fontSize: fontSize(18),
    fontWeight: "bold",
    marginBottom: verticalScale(10),
    color: "#111",
  },

  skillWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: fontSize(8),
  },

  skillPill: {
    backgroundColor: "#FF6A0033",
    paddingHorizontal: fontSize(12),
    paddingVertical: fontSize(6),
    borderRadius: moderateScale(12),
  },

  skillText: {
    fontSize: fontSize(13),
    color: "#FF6A00",
    fontWeight: "600",
  },
});
