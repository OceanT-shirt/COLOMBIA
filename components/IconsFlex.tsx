import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {View} from "../components/Themed";
import {Avatar, ListItem, colors, Button} from "react-native-elements";
import {messages_list} from "./messages";
import React from "react";
import ChatButton from "./chat/ChatButton";



export default function IconsFlex () {
    return (
        <ScrollView style={styles.list}>
            {messages_list.map((user)=>(
                <ListItem key={user.id} containerStyle={{backgroundColor:"transparent"}}>
                    <View style={styles.talkButton}>
                        <View style={styles.avatar}>
                            <Avatar rounded source={user.pic} size={56}/>
                        </View>
                        <View style={styles.messageContent}>
                            <ListItem.Title style={styles.title}>{user.title}</ListItem.Title>
                            <ListItem.Subtitle style={styles.subtitle}>{user.message}</ListItem.Subtitle>
                        </View>
                        {/*文字数が増えてもレイアウトがずれないようにする*/}
                        <View style={styles.left}>
                            <ListItem.Chevron />
                        </View>
                    </View>
                    {/*<ChatButton />*/}
                </ListItem>
            ))
            }
        </ ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%',
    },
    talkButton: {
        flex: 1,
        height: 100,
        justifyContent: "center",
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
    },
    avatar: {
        justifyContent: "center",
        backgroundColor: 'transparent',
        marginHorizontal: 24,
    },
    messageContent: {
        // padding: 20,
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: 20,
    },
    title: {
        color: '#000',
        fontFamily: 'Avenir',
        fontWeight: '900',
        fontSize: 24,
        width: '70%',
        height: 40,
    },
    subtitle: {
        color: '#000',
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 15,
        width: '95%',
        height: 25,
    },
    left: {
        backgroundColor: '#00B398',
        flexDirection: 'row',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
});