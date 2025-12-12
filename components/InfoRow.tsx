import { fontSize } from "@/utils/fontSize";
import { Feather } from "@expo/vector-icons";
import { Alert, Linking, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function InfoRow({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {

    const handlePress = async () => {
        if(!text) {
            return;
        }
        let url = text;

        if (icon === "mail") {
            url = `mailto:${text}`;
            Linking.openURL(url);
        }
        else if (icon === "phone") {
            url = `tel:${text}`;
            Linking.openURL(url);
        }
        else {
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert(`Cannot open URL: ${url}`);
            }
        }
    }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.row} activeOpacity={0.6}>
      <Feather name={icon as any} size={fontSize(18)} color="#555" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: fontSize(6),
  },
  text: {
    marginLeft: fontSize(10),
    fontSize: fontSize(14),
    color: "#555",
  },
});
