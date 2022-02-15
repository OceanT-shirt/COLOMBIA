import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";

interface ButtonProps {
//    ここに追記
}

const styles = StyleSheet.create({
    buttonContainer: {
    //    ここに追記
    },
    buttonTitle: {
    //    ここに追記
    },
})
// ボタンの背景色には、Colors.dark.colorEmphasisを用いる。



export const CommonButton = (props: ButtonProps) => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>
            {/*    ここに追記*/}
            </Text>
        </View>
    )
}