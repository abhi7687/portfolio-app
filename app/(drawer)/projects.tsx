import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { useProjects } from "../../hooks/useProjects";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Loader from "@/components/Loader";
import { fontSize } from "@/utils/fontSize";

export default function ProjectsScreen() {
  const projects = useProjects();

  if (!projects.length) {
    return (
      <Loader />
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

        {projects.map((item) => (
          <View key={item.id} style={styles.card}>

            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.descriptionTitle}>Description:</Text>

            {item.description.map((point, index) => (
              <Text key={index} style={styles.descriptionPoint}>
                • {point}
              </Text>
            ))}

            <Text style={styles.techHeader}>Tech Stack:</Text>

            <View style={styles.techWrapper}>
              {item.techStack.map((tech, index) => (
                <View key={index} style={styles.techPill}>
                  <Text style={styles.techText}>{tech}</Text>
                </View>
              ))}
            </View>

            {item.githubURL && (
              <TouchableOpacity
                onPress={() => Linking.openURL(item.githubURL)}
                style={styles.githubRow}
              >
                <Feather name="github" size={scale(18)} color="#2563EB" />
                <Text style={styles.githubText}>View on GitHub</Text>
              </TouchableOpacity>
            )}

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

  title: {
    fontSize: fontSize(20),
    fontWeight: "bold",
    color: "#111",
    marginBottom: verticalScale(6),
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

  techHeader: {
    fontSize: fontSize(14),
    fontWeight: "600",
    marginBottom: verticalScale(6),
  },

  techWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: fontSize(6),
    marginBottom: verticalScale(10),
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

  githubRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(8),
  },

  githubText: {
    marginLeft: fontSize(8),
    color: "#2563EB",
    fontSize: fontSize(14),
    fontWeight: "600",
  },
});