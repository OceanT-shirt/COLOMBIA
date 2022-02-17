// TODO oreoのコードをここに持ってくる

import {ScrollView, Text, View} from "react-native";
import {ProfileCardProps} from "../../types";
import {StyleSheet} from "react-native";
import {ListItem} from "react-native-elements";

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

    },
    eventButtonContainer: {

    },
    talkListContainer: {
        backgroundColor: 'red',
    },
    eventListContainer: {

    },
    buttonTitle: {
        fontSize: 30,
        color: 'white',
    },
})

const TalkListButton = (props: TalkInfo) => {
    return(
        // ここの中身を追加し、リストを完成せよ
        <View style={styles.talkButtonContainer}>
            <Text style={styles.buttonTitle}>{props.title}</Text>
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
        // ここも
        <View style={styles.eventButtonContainer}>
            <Text style={styles.buttonTitle}>{props.eventName}</Text>
        </View>
    )
}


export const EventListView = ({infoArray}: EventInfoArray) => {
    return(
        <ScrollView style={styles.eventListContainer}>
            {infoArray.map((info)=>(
                <ListItem containerStyle={{backgroundColor: "transparent"}}>
                    <EventListButton key={infoArray.indexOf(info)} regulation={info.regulation} eventName={info.eventName} attendee={info.attendee} bonus={info.bonus} />
                </ListItem>
            ))}
        </ScrollView>
    )
}