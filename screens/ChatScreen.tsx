import React, { useCallback, useState, useEffect, useLayoutEffect } from 'react'
import {GiftedChat, QuickReplies, User} from 'react-native-gifted-chat'
import {db} from "../firebase";
import {addDoc, collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import {Bubble} from "react-native-gifted-chat";

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


export function MessageFunc() {
    const [messages, setMessages] = useState<IMessage[]>([]);

    // 入室時に送信されるメッセージを設定
    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Welcome!',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 1,
    //                 name: 'React Native',
    //                 avatar: 'https://placeimg.com/140/140/any',
    //             },
    //         },
    //     ])
    // }, [])
    //useEffectの第二引数に空の配列を渡すと、初回レンダリング時のみ関数が作用する。

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

       addDoc(collection(db, "chats"), {
            id: _id,
            createdAt: createdAt,
            text: text,
            user: user,
        });


    }, [])

    //メッセージ更新時にドキュメントを更新
    useLayoutEffect(() => {
        const collectionRef = collection(db, 'chats');
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



    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 4,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/arch',
            }}
        />

    )

}



