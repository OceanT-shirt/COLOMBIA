import React, { useCallback, useState, useEffect, useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { db,auth } from "../firebase"
import {updateProfile} from "firebase/auth";
import firestore,{updateDoc, collection, doc,onSnapshot, orderBy, query,where} from 'firebase/firestore';
import {RootTabScreenProps} from "../types";
import {styles} from "./SignInScreen";

const EditScreen = ({navigation}: RootTabScreenProps<'EditScreen'>) => {
    const [profileList, setProfileList] = useState([])
    const uid = auth?.currentUser?.uid;
    const [displayName,setName] = useState([])
    const [photoURL, setURL] = useState([])
    const [profile, setProfile] = useState([])
    // const sleep = (waitMsec) => {
    //   var startMsec = new Date();
    //   while (new Date() - startMsec < waitMsec);
    // }
    const updateProfiles = () =>{
    UpdateProfile()
    updateDoc(
      doc(
        db,"profile","users","usersInfo",uid),
    {
        uid: uid,
        info:{
                  // createdAt: db.timestamp.fromDate(new Date()),
                  displayName : displayName,
                  photoURL: photoURL,
                  profile: profile,
                  score: 0}

      });
    }

    useEffect(() => {
      const collectionRef = collection(db, "profile", "users", "usersInfo");
      const q = query(collectionRef,where("uid", "==", uid));
      onSnapshot(q, (collectionSnap) => {
      setProfileList(collectionSnap.docs.map(doc => doc.data().info))
      console.log("プロフィール情報の更新を行いました");
      console.log(profileList);
      // console.log(collectionRef.id)
      // console.log(profileList[0].displayName);
      // console.log(profileList[0].profile);
      setName(profileList[0].displayName);
      setURL(profileList[0].photoURL);
      setProfile(profileList[0].profile);
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
                    onChangeText={text => setProfile(text)}
                />
            {/*<Input*/}
            {/*    placeholder='Enter your Profile'*/}
            {/*    label='profile'*/}
            {/*    leftIcon={{ type: 'material', name: 'face' }}*/}
            {/*    value={profile}*/}
            {/*    onChangeText={text => setProfile(text)}*/}
            {/*/>*/}
            </View>
            <Button title="Update" onPress= {updateProfiles} buttonStyle={styles.registerButton} containerStyle={styles.buttonContainer} titleStyle={styles.buttonTitle} />
        </View>)

}


export default EditScreen
