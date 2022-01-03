import {StyleSheet} from "react-native";
import {View} from "../Themed";
import {Avatar, ListItem, colors, Button} from "react-native-elements";
import React from "react";
import {Messages} from "../messages";


export default function ChatButton (user: Partial<Messages>) {
    return (
        <View style={styles.button}>
            <View style={styles.avatar}>
                <Avatar rounded source={user.pic} size={40}/>
            </View>
            <View style={styles.messageContent}>
                <ListItem.Title style={styles.title}>{user.title}</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>{user.message}</ListItem.Subtitle>
            </View>
            {/*文字数が増えてもレイアウトがずれないようにする*/}
            <ListItem.Chevron />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        marginHorizontal: 20,
        height: 100,
        justifyContent: "center",
        backgroundColor: '#6964FA',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
    },
    avatar: {
        justifyContent: "center",
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
    },
    messageContent: {
        padding: 20,
        flex: 1,
        backgroundColor: 'transparent',
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        color: '#fff',
    },
});