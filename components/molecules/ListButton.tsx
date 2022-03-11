import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {ProfileCardProps} from "../../types";
import {StyleSheet} from "react-native";
import {Avatar, ListItem} from "react-native-elements";
import React from "react";
import {TitleCenter, TitleStyles} from "../atoms/title";
import {colors_new} from "../../constants/Colors";
import {useNavigation} from "@react-navigation/native";

export interface TalkInfo {
    "title": string;
    "message": string;
    "upDate": string; // TODO ここ日時型に変更すべきかも
    "notificationCount": number;
}

interface TalkInfoArray {
    "infoArray": Array<TalkInfo>
}

// v2用のシンプルなインターフェース
export interface TalkInfoSimple {
    "roomName": string;
    "roomImageUrl": string;
    "roomId": string;
}

interface TalkInfoSimpleArray {
    "infoArray": Array<TalkInfoSimple>
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
        height: 80,
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors_new.light.background,

    },

    eventButtonContainer: {
        height: 74,
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection:'row',
    },
    talkListContainer: {
        flex: 1,

    },
    eventListContainer: {
        backgroundColor: 'transparent',
    },
    eventFuncContainer: {
        alignItems: "stretch",

    },

    buttonTitle: {
        marginTop:3,
        fontSize: 18,
        color: 'white',  
    },

    avatar: {
        justifyContent: "center",
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
    },

    regulation: {
        marginTop:0,
        fontSize: 15,
        color:"white",
    },
    eventTexts:{
        padding:0,
        fontFamily: 'Avenir',
    },
    messageContent: {  
        padding: 20,
        paddingLeft:10, 
        flex: 1,
        marginVertical: 10,
    },
    
    attendee: {
        fontSize:15,
        color:'white',
    },
    bonus: {
        paddingTop:"auto",
        paddingBottom:"auto",
        fontSize:50,
        color:'#F54C21',
        paddingRight:0,
        position: 'absolute',
        right:0,
        bottom:0,
    },
    eventRight:{
        paddingTop:"auto",
        paddingBottom:"auto",
        justifyContent:"center",
        position: 'absolute',
        right:0,
        bottom:0,
    },
    right: {
        justifyContent: "center",
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
    },
    notice: {
        fontSize:24,
        color:colors_new.light.notice,
        paddingLeft:6,
    },
    time: {
        fontSize:10,
        color:colors_new.light.miniText,
        paddingBottom:5,
    },
    title: {
        color: colors_new.light.title,
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: 20,
        height: 40,
    },
    subtitle: {
        color: colors_new.light.subtitle,
        fontSize:15,
    },
})

const TalkListButton = (props: TalkInfo) => {
    return(
        // <View style={styles.talkButtonContainer}>
            <TouchableOpacity style={styles.talkButtonContainer}>
                <View style={styles.avatar}>
                    <Avatar rounded source={require("../../assets/images/matching-app-icon.png")} size={56}/>
                </View>
                <View style={styles.messageContent} >
                    <Text style={styles.title}>{props.title}</Text>
                    <Text numberOfLines={1} ellipsizeMode="tail">
                        <Text style={styles.subtitle}>{"新規メッセージがあります"}</Text>
                    </Text>
                </View>
                {/*文字数が増えてもレイアウトがずれないようにする*/}
                <View style={styles.right}>
                    <Text style={styles.time}>{'12:00'}</Text>
                    <Text style={styles.notice}>{'4'}</Text>
                </View>
            </TouchableOpacity>
        // </View>
    )
}

const TalkListButtonSimple = (props: TalkInfoSimple) => {

    const navigation = useNavigation();

    return(
        // <TouchableOpacity style={styles.talkButtonContainer} onPress={() => console.log(props.roomId)}>
        <TouchableOpacity style={styles.talkButtonContainer} onPress={() => navigation.navigate('Talk', {roomId: props.roomId})}>
            <View style={styles.avatar}>
                <Avatar rounded source={{uri: props.roomImageUrl}} size={56}/>
            </View>
            <View style={styles.messageContent} >
                <Text style={styles.title}>{props.roomName}</Text>
            </View>
        </TouchableOpacity>
    )
}


// ここでTalkListButtonをループしてスクロール出来るようになっている。
export const TalkListView = ({infoArray}: TalkInfoArray) => {
    return(
        <ScrollView style={styles.talkListContainer}>
            {infoArray.map((info)=>(
                <ListItem containerStyle={{padding: 0}}>
                    <TalkListButton key={infoArray.indexOf(info)} title={info.title} message={info.message} upDate={info.upDate} notificationCount={info.notificationCount} />
                </ListItem>
            ))}
        </ScrollView>
    )
}

// v2用のシンプルなトークボタン
export const TalkListViewSimple = ({infoArray}: TalkInfoSimpleArray) => {
    return(
        <ScrollView style={styles.talkListContainer}>
            {infoArray.map((info)=>(
                <ListItem containerStyle={{padding: 0}}>
                    <TalkListButtonSimple key={infoArray.indexOf(info)} {...info} />
                </ListItem>
            ))}
        </ScrollView>
    )
}


const EventListButton = (props: EventInfo) => {
    return(
        // TODO ここのレイアウトを整える。EventInfoのPropsを適切に配置せよ
        <View style={styles.eventButtonContainer}> 
            <View style={styles.avatar}>
                <Avatar rounded source={require("../../assets/images/matching-app-icon.png")} size={56}/>
            </View>
            <View style={ styles.eventTexts }>
                <Text style={styles.regulation} numberOfLines={1} ellipsizeMode="tail">{props.regulation}</Text>
                <ListItem.Title numberOfLines={1} ellipsizeMode="tail" style={styles.buttonTitle}>{props.eventName}</ListItem.Title>
                <Text numberOfLines={1} ellipsizeMode="tail">
                    {/*attendeeを表示するところが未完成*/}
                    <ListItem.Subtitle style={styles.attendee}>{props.attendee[0].displayName}</ListItem.Subtitle>
                </Text>
            </View>
            <View style={ styles.eventRight }>
                <Text style={styles.bonus} >+{ props.bonus}</Text>
            </View>
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