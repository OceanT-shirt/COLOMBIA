import React, {useState} from "react";
import {View} from "react-native";
import {Button, Input} from "react-native-elements";
import {styles} from "./LoginScreen";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const auth = getAuth();
    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // firebase公式を参照
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: imageUrl? imageUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <View style={styles.container}>
            <Button title="sign in" style={styles.button} />
            <Input
                placeholder="Enter your email"
                label="Email"
                leftIcon={{type:'material', name: 'email'}}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder="Enter your name"
                label="Name"
                leftIcon={{type:'material', name: 'name'}}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder="Enter your password"
                label="Password"
                leftIcon={{type:'material', name: 'lock'}}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Input
                placeholder="Enter your image url"
                label="Profile Picture"
                leftIcon={{type:'material', name: 'face'}}
                value={imageUrl}
                onChangeText={text => setImageUrl(text)}
            />
            <Button title="register" onPress={register} style={styles.button} />
        </View>

    )
}

export default RegisterScreen