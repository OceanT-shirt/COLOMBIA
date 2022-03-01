import {SafeAreaView, StyleSheet, Switch, TextInput} from 'react-native';
import { Text, View } from './Themed';
import React, {useState} from "react";
import {RootTabScreenProps} from "../types";
import Colors from "../constants/Colors";
import {TitleStyles} from "./atoms/title";
import {string} from "prop-types";
import {Input} from "react-native-elements/dist/Input";

export default function CreateNewEvent(){
    return (
        <View style={styles.container}>
            <Text style={TitleStyles.titleCenter}>
                CREATE NEW EVENT
            </Text>
            <Text style={styles.title}>
                グループを選択
            </Text>
            <InputBox/>
            <Text style={styles.title}>
                イベント形式を選択
            </Text>
            <InputBox/>
            <Text style={styles.title}>
                イベントテーマ
            </Text>
            <InputBox/>
            <Text style={styles.title}>
                日程
            </Text>
            <InputBox/>
            <Text style={styles.title}>
                友人を招待
            </Text>
            <InputBox/>
            <Text style={styles.title}>
                場所
            </Text>
            <InputBox/>
        </View>
    )
}

function InputBox(){
    const [text, setText] = useState("");
    return(
        <View style={styles.Input}>
        <Input
            onChangeText={text => setText(text)}
            value={text}
            style={styles.InputText}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: Colors.dark.background,
    },
    title:{
        fontSize:18,
        fontFamily:'Avenir',
        fontWeight:'bold',
        alignItems:'flex-start',
        color:'white',
        marginLeft:12,
        marginBottom:12,
    },
    Input:{
        width: 327,
        height: 31,
        borderRadius:10,
        borderStyle:'solid',
        borderColor:'#777777',
        borderWidth:1,
        backgroundColor:'#c4c4c426',
        color:'white',
        marginBottom:10,
    },
    InputText:{
        color:'white',
    }
})