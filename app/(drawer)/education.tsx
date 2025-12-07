import { View, Text, StyleSheet, Platform } from "react-native";
import { useEducation } from "../../hooks/useEducation";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Loader from "@/components/Loader";
import { fontSize } from "@/utils/fontSize";
import { Image } from "expo-image";

export default function EducationScreen() {
  const education = useEducation();

  if (!education.length) {
    return (
      <Loader />
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >

        {education.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.rowWrapper}>
              <View style={styles.textBox}>
                <Text style={styles.degree}>{item.degree}</Text>

                <Text style={styles.institution}>{item.institution}</Text>

                <Text style={styles.year}>
                  {item.startYear} → {item.endYear}
                </Text>

                {item.grade && (
                  <Text style={styles.grade}>Grade: {item.grade}</Text>
                )}
              </View>

              {item.image && (
                <Image
                  source={{ uri: item.image }}
                  style={styles.institutionImage}
                  contentFit="cover"
                />
              )}
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

  degree: {
    fontSize: fontSize(20),
    fontWeight: "bold",
    color: "#111",
    marginBottom: verticalScale(4),
  },

  institution: {
    fontSize: fontSize(16),
    color: "#FF6A00",
    marginBottom: verticalScale(4),
  },

  year: {
    fontSize: fontSize(14),
    color: "#777",
    marginBottom: verticalScale(8),
  },

  grade: {
    fontSize: fontSize(14),
    color: "#444",
    marginTop: verticalScale(4),
  },

  institutionImage: {
    width: "100%",
    height: verticalScale(160),
    borderRadius: moderateScale(12),
    marginTop: verticalScale(12),
    resizeMode: "cover",

    ...Platform.select({
      web: {
        width: moderateScale(520),
        height: verticalScale(180),
        marginTop: 0,
      },
    }),
  },

  rowWrapper: {
    flexDirection: "column",
    gap: 12,

    ...Platform.select({
      web: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
      },
    }),
  },

  textBox: {
    flex: 1,
    justifyContent: "center",
  }
});