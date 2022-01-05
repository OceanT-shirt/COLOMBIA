import React, {useLayoutEffect, useState} from 'react'
import {Image, SafeAreaView, StyleSheet} from 'react-native'
import Swiper from 'react-native-swiper'
import {Text, View} from './Themed';
import ProfileCard from "./ProfileCard";
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "../firebase";


export default function HomeScreen () {
    const [profileList, setProfileList] = useState([])
    useLayoutEffect(() => {
        const collectionRef = collection(db, "profile", "users", "usersInfo");
        const q = query(collectionRef);
        return onSnapshot(q, (collectionSnap) => {
            setProfileList(collectionSnap.docs.map(doc => doc.data().info))
            console.log("プロフィール情報の更新を行いました");
            console.log(profileList);
        });
    }, []);
        console.log(profileList);
    return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper} showsButtons loop={true}>
                {
                    profileList.map((info) => {
                        return (<ProfileCard key={profileList.indexOf(info)} id={info.id} pic={info.photoURL} name={info.displayName} desc={info.profile} />)})
                }
            </Swiper>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    picView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pic: {
        height: 256,
        width: 256,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
      fontSize: 36,
        fontWeight: "bold",
    },
})
