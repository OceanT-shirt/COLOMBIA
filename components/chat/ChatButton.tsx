import {StyleSheet, TouchableOpacity} from "react-native";
import {View} from "../Themed";
import {Avatar, ListItem, colors, Button} from "react-native-elements";
import React from "react";
import {Messages} from "../messages";

interface GroupTalkDetails {
    roomName: string;
    key: number;
    roomLink?: any;
}

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

export function GroupTalkRoom (props: GroupTalkDetails) {
    const roomName = props.roomName;
    const roomLink = props.roomLink;
    return (
        <View style={styles.talkButton} >
            {/*<TouchableOpacity onPress={roomLink}>*/}
                <View style={styles.avatar}>
                    <Avatar rounded source={require("../../assets/images/matching-app-icon.png")} size={56}/>
                </View>
                <View style={styles.messageContent}>
                    <ListItem.Title style={styles.title}>{roomName}</ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>{"新規メッセージがあります"}</ListItem.Subtitle>
                </View>
                {/*文字数が増えてもレイアウトがずれないようにする*/}
                <View style={styles.left}>
                    <ListItem.Chevron />
                </View>
            {/*</TouchableOpacity>*/}
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
        marginLeft: 20,
        marginRight: 20,
    },
    messageContent: {
        padding: 20,
        flex: 1,
        backgroundColor: 'transparent',
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
    },
    left: {
        backgroundColor: '#00B398',
        flexDirection: 'row',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
});