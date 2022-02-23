import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";

interface ButtonProps {
    title : string;
}

const styles = StyleSheet.create({
    buttonContainer: {
        height : 52 ,
        width : 268 ,
        backgroundColor : Colors.dark.colorEmphasis,
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "center",
    },
    buttonTitle: {
        color : "white",
        fontSize : 18 ,
        alignItems: "center",
        fontFamily: 'Avenir',
    },
})
// ボタンの背景色には、Colors.dark.colorEmphasisを用いる。


export const CommonButton = (props: ButtonProps) => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>
                { props.title }
            </Text>
        </View>
    )
}