import React, { useCallback, useState, useEffect, useLayoutEffect } from 'react'
import {View, StyleSheet, Alert} from 'react-native'
import { Input, Button } from 'react-native-elements'
import { db,auth } from "../firebase"
import {updateProfile} from "firebase/auth";
import {updateDoc, doc, getDoc} from 'firebase/firestore';
import {RootTabScreenProps} from "../types";
import {styles} from "./SignInScreen";



const EditScreen = ({navigation}: RootTabScreenProps<'EditScreen'>) => {
    const [profileList, setProfileList] = useState()
    const uid = auth?.currentUser?.uid;
    const [displayName,setName] = useState<string>()
    const [photoUrl, setPhotoUrl] = useState<string>()
    const [profile, setProfile] = useState<string>()

    // Authenticationを更新する情報を格納し、画面遷移する
    const UpdateAuthProfile = () => {
        const user = auth.currentUser;
        updateProfile(user,{
            displayName : displayName,
            photoURL: photoUrl,
        }
        ).then(() => {
            navigation.replace("Profile")
        }).catch((error) => {
            // An error happened.
            Alert.alert(error)
        });
    };

    // FireStoreに格納する情報を格納
    const updateProfiles = () => {
        const docRef = doc(db, `profile/users/usersInfo/${uid}`)
        updateDoc(docRef,
        {
            uid: uid,
            info:{
                      // createdAt: db.timestamp.fromDate(new Date()),
                      displayName : displayName,
                      photoURL: photoUrl,
                      profile: profile,
                      score: 0}

          }).catch((error) => {
            Alert.alert(error);
        });
        UpdateAuthProfile()
    };

    useEffect(() => {
      const docRef = doc(db, `profile/users/usersInfo/${uid}`)

        getDoc(docRef).then((snap) => {
            console.log("------reloaded------")
            setName(snap.data().info.displayName)
            setPhotoUrl(snap.data().info.photoURL)
            setProfile(snap.data().info.profile)
        });

        }, []);

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
                    value={photoUrl}
                    onChangeText={text => setPhotoUrl(text)}
                />
                <Input
                    placeholder='Enter your description'
                    label='profile'
                    leftIcon={{ type: 'material', name: 'face' }}
                    value={profile}
                    onChangeText={text => setProfile(text)}
                />
            </View>
            <Button title="Update" onPress= {updateProfiles} buttonStyle={styles.registerButton} containerStyle={styles.buttonContainer} titleStyle={styles.buttonTitle} />
        </View>)

}


export default EditScreen
