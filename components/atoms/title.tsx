import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

// タイトルのスタイルをまとめるコンポーネント


export const TitleStyles = StyleSheet.create({
    titleCenter: {
        color: Colors.dark.text,
        fontFamily: 'Avenir',
        fontWeight: '900',
        fontSize: 24,
        width: '70%',
        height: 40,
    },
    // TODO 下のやつミスってる
    titleLeft: {
        alignItems: "flex-start",
        color: '#000',
        fontFamily: 'Avenir',
        fontWeight: '900',
        fontSize: 24,
        backgroundColor: 'red',
        flex: 1,
    },
})
