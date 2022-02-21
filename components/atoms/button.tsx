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
    },
    buttonTitle: {
        width : 224,
        height : 26,
        color : "white",
        fontSize : 20 ,
    },
})
// ボタンの背景色には、Colors.dark.colorEmphasisを用いる。


export const CommonButton = (props: ButtonProps) => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>
            {/*    ここに追記*/}
                { props.title }
            </Text>
        </View>
    )
}