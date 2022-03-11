import React, { useCallback, useState, useEffect, useLayoutEffect } from 'react'
import {GiftedChat, QuickReplies, User} from 'react-native-gifted-chat'
import {auth, db} from "../../firebase";
import {addDoc, collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import {Bubble} from "react-native-gifted-chat";
import {RoomInfo} from "../../types";


// declare the type of each message
interface IMessage {
    _id: string | number
    text: string
    createdAt: Date | number
    user: User
    image?: string
    video?: string
    audio?: string
    system?: boolean
    sent?: boolean
    received?: boolean
    pending?: boolean
    quickReplies?: QuickReplies
}

export function MessageFunc(props: RoomInfo) {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const uid = auth?.currentUser?.uid;
    const displayName = auth?.currentUser?.displayName;
    const photoURL = auth?.currentUser?.photoURL;
    const roomId = props.roomId

    // メッセージ送信時の処理
    const onSend = useCallback((messages=[]) => {
        if (!messages.length){
            setMessages(messages);
        } else {
            setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        }

        //入力をメッセージの形式に変換
        const {
            _id,
            createdAt,
            text,
            user,
        } = messages[0]

       addDoc(collection(db, "chatRooms", roomId, "chat"), {
            id: _id,
            createdAt: createdAt,
            text: text,
            user: user,
        });


    }, [])

    //メッセージ更新時にドキュメントを更新
    useLayoutEffect(() => {
        const collectionRef = collection(db, 'chatRooms', roomId, 'chat');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));
        return onSnapshot(q, (snapshot) => {
                setMessages(snapshot.docs.map((doc: any) => ({
                    _id: doc.data().id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user,
                })))
        });
    }, []);


    //TODO undefined時の処理
    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: uid,
                name: displayName,
                avatar: photoURL,
            }}
        />

    )

}



