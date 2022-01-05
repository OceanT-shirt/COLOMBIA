import React,{useState,useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { db,auth } from "../firebase"
import {updateProfile} from "firebase/auth";
import {RootTabScreenProps} from "../types";
import {styles} from "./SignInScreen";

const EditScreen = ({navigation}: RootTabScreenProps<'EditScreen'>) => {
    const [email, setEmail] = useState(auth?.currentUser?.email);
    const [displayName, setName] = useState(auth?.currentUser?.displayName);
    const [photoURL, setURL] = useState(auth?.currentUser?.photoURL);
    const uid = auth?.currentUser?.uid;
    // const [profile, setProfile] = useState(auth?.currentUser?.profile);
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