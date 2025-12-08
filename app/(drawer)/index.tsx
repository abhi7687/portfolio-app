import TypeWriter from "@/components/TypeWriter";
import { View, Text, Image, StyleSheet, Dimensions, Platform } from "react-native";
import { Fonts } from "@/constants/theme";

const { width, height } = Dimensions.get("window");

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.webRowWrapper}>
                <View style={styles.heroWrapper}>
                    <View style={styles.orangeShape} />
                    <View style={styles.whiteCircle}>
                        <Image
                            source={require("../../assets/images/sapImg1.png")}
                            style={styles.profileImage}
                        />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <TypeWriter
                        text={"Abhiram welcome's you\n" + "to his Portfolio!.."}
                        speed={100}
                        style={styles.title}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
        ...Platform.select({
            web: {
                alignItems: "center",
            }
        }),
    },

    webRowWrapper: {
        flexDirection: "column", 
        width: "100%",
        ...Platform.select({
            web: {
                flexDirection: "row",
                width: "90%",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "5%",
            }
        })
    },

    heroWrapper: {
        width: "88%",
        height: "82%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",

        ...Platform.select({
            web: {
                width: 600,
                height: 800,
                marginTop: 40,
            },
        }),
    },

    orangeShape: {
        position: "absolute",
        right: "-30%",
        top: "5%",
        width: width * 1.6,
        height: width * 1.1,
        backgroundColor: "#FF6A00",
        borderRadius: width,
        transform: [{ rotate: "60deg" }],
        zIndex: 0,

        ...Platform.select({
            web: {
                top: "-50%",
                right: "40%",
                width: "80%",
                height: "120%",
                borderRadius: 600,
                transform: [{ rotate: "310deg" }],
            },
        }),
    },

    whiteCircle: {
        width: 360,
        height: 360,
        backgroundColor: "white",
        borderRadius: 230,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        elevation: 6,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },

        ...Platform.select({
            web: {
                top: "-22%",
                right: "2%",
                width: 420,
                height: 420,
                borderRadius: 230,
            },
        }),
    },

    profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    textContainer: {
        alignItems: "center",
        marginTop: "2%",

        ...Platform.select({
            web: {
                marginTop: "-25%", 
            },
        }),
    },

    title: {
        fontSize: 26,
        textAlign: "center",
        color: "#111",
        fontFamily: Fonts.mono,

        ...Platform.select({
            web: {
                fontSize: 32, 
            },
        }),
    },
});