import { Text } from "react-native";
import { useEffect, useState, useRef } from "react";

export default function TypeWriter({
  text,
  speed = 70,
  delay = 1000,
  style,
}: {
  text: string;
  speed?: number;
  delay?: number;
  style?: any;
}) {
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const indexRef = useRef(0);
  const typingInterval = useRef<number | null>(null);
  const cursorInterval = useRef<number | null>(null);

  const startTyping = () => {
    setDisplayed("");
    indexRef.current = 0;

    typingInterval.current = setInterval(() => {
      indexRef.current += 1;

      if (indexRef.current > text.length) {
        if (typingInterval.current) {
            clearInterval(typingInterval.current);
        }
        return;
      }

      setDisplayed(text.slice(0, indexRef.current));
    }, speed) as unknown as number;
  };

  useEffect(() => {
    startTyping();

    // Cursor blinking
    cursorInterval.current = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 800) as unknown as number;

    return () => {
      if (typingInterval.current) clearInterval(typingInterval.current);
      if (cursorInterval.current) clearInterval(cursorInterval.current);
    };
  }, [text]);

  return (
    <Text style={style}>
      {displayed}
      {cursorVisible ? "|" : " "}
    </Text>
  );
}
