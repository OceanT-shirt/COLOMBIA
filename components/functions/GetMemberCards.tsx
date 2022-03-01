import {MemberCardsDisp} from "../molecules/CardsDisp";
import {useLayoutEffect, useState} from "react";
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "../../firebase";


export const MemberCards = () => {
    const [profileList, setProfileList] = useState([])
    useLayoutEffect(() => {
        const collectionRef = collection(db, "profile", "users", "usersInfo");
        const q = query(collectionRef);
        return onSnapshot(q, (collectionSnap) => {
            setProfileList(collectionSnap.docs.map(doc => doc.data().info))
            console.log("プロフィール情報の更新を行いました");
        });
    }, []);
    return (
        <MemberCardsDisp profileList={profileList} />
    )
}