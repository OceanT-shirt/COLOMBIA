import {collection, getDocs, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../firebase";
import {Text} from "../Themed";
import {View} from "react-native";
import {messages_list} from "../messages";
import {Avatar, Button, ListItem} from "react-native-elements";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {GroupTalkRoom} from "./ChatButton";

export interface GroupTalkDetails {
    id: string;
    roomName: string;
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
        <View style={{width: 400, height: 600}}>
            <ListItem containerStyle={{backgroundColor:"transparent"}} >
                <Button title="create a new talk room" />
            </ListItem>
            {roomNameList.map((name)=>(
                <ListItem containerStyle={{backgroundColor:"transparent"}}>
                    <GroupTalkRoom roomName={name} key={roomNameList.indexOf(name)} />
                </ListItem>
            ))
            }
        </View>
    )
}



export {ChatRoomList}