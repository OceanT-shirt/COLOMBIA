import {collection, doc, getDoc, getDocs, onSnapshot, query, where} from "firebase/firestore";
import {auth, db} from "../../firebase";
import {useLayoutEffect, useState} from "react";
import {TalkListView, TalkListViewSimple} from "../molecules/ListButton";
import {MemberCardsDisp} from "../molecules/CardsDisp";
import {Text} from "react-native";


interface TalkRoomsProps {
    roomName: string,
}

// const GetTalkInfo = () => {
//     const uid = auth?.currentUser?.uid;
//     const docRef = doc(db, `profile/users/usersInfo/${uid}`)
//
//     const [joinedRoomsId, setJoinedRoomsId] = useState<string[]>()
//     const [roomInfoArray, setRoomInfoArray] = useState<string[]>()
//
//     // getDoc(docRef).then((snap) => {
//     //     console.log('accessing to FireStore')
//     //     // TODO undefined時の処理
//     //     setJoinedRoomsId(snap.data().joinedRoomId)
//     // })
//
//     const collectionRef = collection(db, "chatRooms");
//     const q = query(collectionRef, where("members", "array-contains", uid));
//
//
//     onSnapshot(q, (collectionSnap) => {
//         setRoomInfoArray(collectionSnap.docs.map(doc => doc.data().info))
//         console.log("updated chat");
//         console.log(roomInfoArray)
//     });
//
//     return (roomInfoArray)
// }

export const TalkRoomList = () => {
    const [roomInfoArray, setRoomInfoArray] = useState<string[]>([])

    useLayoutEffect(() => {
        const uid = auth?.currentUser?.uid;
        const collectionRef = collection(db, "chatRooms");
        const q = query(collectionRef, where("members", "array-contains", uid));

        // TODO 型を与える
        const DocToInfo = (doc) => {
            let dict = {};
            dict.roomName = doc.data().roomName;
            dict.roomImageUrl = doc.data().roomImageUrl;
            dict.roomId = doc.data().roomId;
            return (dict)
        }


        return onSnapshot(q, (collectionSnap) => {
            console.log(collectionSnap.docs.map(doc => DocToInfo(doc)))
            setRoomInfoArray(collectionSnap.docs.map(doc => DocToInfo(doc)))
            console.log("TALK ROOM CONNECTED");
            console.log(roomInfoArray)
        });
    }, []);

    console.log("infoArray")
    console.log(roomInfoArray)
    return (
        <TalkListViewSimple infoArray={roomInfoArray} />
    )
}

