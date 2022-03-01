import {ScrollView, Text, View} from "react-native";
import {ProfileCardProps} from "../../types";
import {StyleSheet} from "react-native";
import {Avatar, ListItem} from "react-native-elements";
import React from "react";
import {TitleCenter, TitleStyles} from "../atoms/title";

export interface TalkInfo {
    "title": string;
    "message": string;
    "upDate": string; // TODO ここ日時型に変更すべきかも
    "notificationCount": number;
}

interface TalkInfoArray {
    "infoArray": Array<TalkInfo>
}

export interface EventInfo {
    "regulation": string;
    "eventName": string;
    "attendee": Array<ProfileCardProps>;
    "bonus": number;
}

interface EventInfoArray {
    "infoArray": Array<EventInfo>
}


const styles = StyleSheet.create({
    talkButtonContainer: {
        height: 60,
        backgroundColor: 'purple',
        flex: 1,

    },
    eventButtonContainer: {

    },
    talkListContainer: {

    },
    eventListContainer: {
        backgroundColor: 'blue',
    },
    eventFuncContainer: {
        alignItems: "stretch",

    },
    buttonTitle: {
        fontSize: 30,
        color: 'white',
    },
    avatar: {
        justifyContent: "center",
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
    },
    messageContent: {
        padding: 20,
        paddingLeft:10,
        flex: 1,
        backgroundColor: 'transparent',
    },
    right: {
        justifyContent: "center",
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
    },
    notice: {
        fontSize:24,
        color:'red',
        paddingLeft:6,
    },
    time: {
        fontSize:10,
        color:'black',
        paddingBottom:5,
    },
    title: {
        color: '#000',
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: 24,
        width: '70%',
        height: 40,
    },
    subtitle: {
        color: '#000',
        fontSize:18,
    },
})

const TalkListButton = (props: TalkInfo) => {
    return(
        <View style={styles.talkButtonContainer}>
            {/*<TouchableOpacity onPress={roomLink}>*/}
            <View style={styles.avatar}>
                <Avatar rounded source={require("../../assets/images/matching-app-icon.png")} size={56}/>
            </View>
            <View style={styles.messageContent} >
                <ListItem.Title style={styles.title}>{props.title}</ListItem.Title>
                <Text numberOfLines={1} ellipsizeMode="tail">
                    <ListItem.Subtitle style={styles.subtitle}>{"新規メッセージがあります"}</ListItem.Subtitle>
                </Text>
            </View>
            {/*文字数が増えてもレイアウトがずれないようにする*/}
            <View style={styles.right}>
                <ListItem.Subtitle style={styles.time}>{'12:00'}</ListItem.Subtitle>
                <ListItem.Title style={styles.notice}>{'4'}</ListItem.Title>
            </View>
            {/*</TouchableOpacity>*/}
        </View>
    )
}

// ここでTalkListButtonをループしてスクロール出来るようになっている。
export const TalkListView = ({infoArray}: TalkInfoArray) => {
    return(
        <ScrollView style={styles.talkListContainer}>
            {infoArray.map((info)=>(
                <ListItem containerStyle={{backgroundColor: "transparent"}}>
                    <TalkListButton key={infoArray.indexOf(info)} title={info.title} message={info.message} upDate={info.upDate} notificationCount={info.notificationCount} />
                </ListItem>
            ))}
        </ScrollView>
    )
}

const EventListButton = (props: EventInfo) => {
    return(
        // TODO ここのレイアウトを整える。EventInfoのPropsを適切に配置せよ
        <View style={styles.eventButtonContainer}>
            <Text style={styles.buttonTitle}>{props.eventName}</Text>
        </View>
    )
}


export const EventListView = ({infoArray}: EventInfoArray) => {
    return(
        <View style={styles.eventFuncContainer}>
            <TitleCenter title={"Recommended Events"} />
            <ScrollView style={styles.eventListContainer}>
                {infoArray.map((info)=>(
                    <ListItem containerStyle={{backgroundColor: "transparent"}}>
                        <EventListButton key={infoArray.indexOf(info)} regulation={info.regulation} eventName={info.eventName} attendee={info.attendee} bonus={info.bonus} />
                    </ListItem>
                ))}
            </ScrollView>
        </View>
    )
}