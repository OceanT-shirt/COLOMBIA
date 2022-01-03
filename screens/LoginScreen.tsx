import React, {useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import {Input, Button} from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace('TabOne');
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    })
    return (
        <View style={styles.container}>
            <Input
            placeholder="Enter your email"
            label="Email"
            leftIcon={{type:'material', name: 'email'}}
            value={email}
            onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder="Enter your password"
                label="Password"
                leftIcon={{type:'material', name: 'lock'}}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Button title="sign in" style={styles.button} />
            <Button title="register" style={styles.button} />
        </View>

    )
}

export default LoginScreen

export const styles = StyleSheet.create ({
    button: {
        width: 200,
        margin: 20,
    },
    container: {
        flex: 1,
    },
})