import {collection, getDocs, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../firebase";
import {Text} from "../Themed";
import {ScrollView, StyleSheet, View} from "react-native";
import {messages_list} from "../messages";
import {Avatar, Button, ListItem} from "react-native-elements";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {GroupTalkRoom} from "./ChatButton";

export interface GroupTalkDetails {
    id: string;
    roomName: string;
}

const CreateRoomButton = () => {
    return (
        <View style={styles.createButton} >
            {/*<TouchableOpacity onPress={roomLink}>*/}
            <View style={styles.messageContent}>
                <ListItem.Title style={styles.createButtonTitle}>新規ルームを作成</ListItem.Title>
                {/*<ListItem.Subtitle style={styles.subtitle}>{user.message}</ListItem.Subtitle>*/}
            </View>
            {/*文字数が増えてもレイアウトがずれないようにする*/}
            <View style={styles.createButtonLeft}>
                <ListItem.Chevron />
            </View>
            {/*</TouchableOpacity>*/}
        </View>
        )
}


const ChatRoomList = () => {
    const [roomNameList, setRoomNameList] = useState([])
    useLayoutEffect(() => {
        // getDocs(collection(db, "chatRooms")).then(
        //     (collectionSnap) => {
        //         setRoomNameList(collectionSnap.docs.map(doc => doc.data().roomName))
        //         console.log("通信処理を行いました");
        //     }
        // );
        const collectionRef = collection(db, "chatRooms");
        const q = query(collectionRef);
        return onSnapshot(q, (collectionSnap) => {
            setRoomNameList(collectionSnap.docs.map(doc => doc.data().roomName))
            console.log("通信処理を行いました");
        });
    }, []);
    console.log("roomNameListの中身")
    console.log(roomNameList)
    return(
        <ScrollView style={styles.list}>
            <ListItem containerStyle={{backgroundColor:"transparent"}} >
                <CreateRoomButton />
            </ListItem>
            {roomNameList.map((name)=>(
                <ListItem containerStyle={{backgroundColor:"transparent"}}>
                    <GroupTalkRoom roomName={name} key={roomNameList.indexOf(name)} />
                </ListItem>
            ))
            }
        </ScrollView>
    )
}



export {ChatRoomList}

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
    createButton: {
        flex: 1,
        height: 100,
        justifyContent: "center",
        backgroundColor: '#8D20E0',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center",
    },
    createButtonTitle: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontWeight: '900',
        fontSize: 24,
        width: '70%',
        height: 40,
        marginLeft: 50,
    },
    createButtonLeft: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
});