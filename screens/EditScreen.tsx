import React, { useCallback, useState, useEffect, useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { db,auth } from "../firebase"
import {updateProfile} from "firebase/auth";
import firestore,{addDoc, collection, onSnapshot, orderBy, query,where} from 'firebase/firestore';
import {RootTabScreenProps} from "../types";
import {styles} from "./SignInScreen";

const EditScreen = ({navigation}: RootTabScreenProps<'EditScreen'>) => {
    const [profileList, setProfileList] = useState([])
    const [displayName,setDisplayName] = useState([])
    const [photoURL, setURL] = useState([])
    const [profile, setProfile] = useState([])
    const uid = auth?.currentUser?.uid;
    const collectionRef = collection(db, "profile", "users", "usersInfo");
    const q = query(collectionRef,where("uid", "==", uid));
    useLayoutEffect(() => {
      onSnapshot(q, (collectionSnap) => {
      setProfileList(collectionSnap.docs.map(doc => doc.data().info))
      console.log("プロフィール情報の更新を行いました");
      console.log(profileList);
      console.log(profileList.displayName);

  });
    }, []);
    // const [displayName, setName] = useState([profileList.displayName])

    // console.log(profileList);
    // const [email, setEmail] = useState(auth?.currentUser?.email);
    // const [displayName, setName] = useState(profileList.displayName);
    // const [photoURL, setURL] = useState(profileList.photoURL);
    // const [profile, setProfile] = useState(profileList.profile)
    const UpdateProfile = () => {
        const user = auth.currentUser;
        updateProfile(user,{
            displayName : displayName,
            photoURL: photoURL,
            // profile : profile
        }).then(function(){
            navigation.replace("Profile")
        }).catch(function(error){
            // An error happened.
            navigation.replace("Root")
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Enter your name'
                    label='name'
                    leftIcon={{ type: 'material', name: 'face' }}
                    value={displayName}
                    onChangeText={text => setName(text)}
                />
                <Input
                    placeholder='Enter your Icon URL'
                    label='photoURL'
                    leftIcon={{ type: 'material', name: 'face' }}
                    value={photoURL}
                    onChangeText={text => setURL(text)}
                />
                <Input
                    placeholder='Enter your description'
                    label='profile'
                    leftIcon={{ type: 'material', name: 'face' }}
                    value={profile}
                    onChangeText={text => setURL(text)}
                />
            {/*<Input*/}
            {/*    placeholder='Enter your Profile'*/}
            {/*    label='profile'*/}
            {/*    leftIcon={{ type: 'material', name: 'face' }}*/}
            {/*    value={profile}*/}
            {/*    onChangeText={text => setProfile(text)}*/}
            {/*/>*/}
            </View>
            <Button title="Update" onPress= {UpdateProfile} buttonStyle={styles.registerButton} containerStyle={styles.buttonContainer} titleStyle={styles.buttonTitle} />
        </View>)

}


export default EditScreen
