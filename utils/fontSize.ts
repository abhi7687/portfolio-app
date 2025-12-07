import { Platform } from "react-native";
import { scale } from "react-native-size-matters";

export function fontSize(size: number) {
  if (Platform.OS === "web") {
    return size * 0.95;
  }
  return scale(size);
}
