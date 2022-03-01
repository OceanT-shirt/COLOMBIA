import {StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";

// タイトルのスタイルをまとめるコンポーネント
interface TitleProps {
    title: string;
}

export const TitleCenter = (props: TitleProps) => {
    return(
        <View style={TitleStyles.centerContainer}>
            <Text style={TitleStyles.titleCenter}>
                {props.title}
            </Text>
        </View>
    )
}

export const TitleStyles = StyleSheet.create({
    titleCenter: {
        color: Colors.dark.text,
        fontFamily: 'Avenir',
        fontWeight: '900',
        fontSize: 24,
        height: 40,
    },
    centerContainer: {
        alignItems: 'center',
    },
})
