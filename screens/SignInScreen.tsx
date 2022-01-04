import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {Input, Button} from "react-native-elements";
import {auth} from "../firebase"
import {RootStackScreenProps} from "../types";
import {signInWithEmailAndPassword} from "firebase/auth";

const SignInScreen = ({ navigation }: RootStackScreenProps<'SignIn'>) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorMessage)
            });
    }
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(function (user) {
    //         if (user) {
    //             navigation.replace('Root');
    //         } else {
    //             navigation.navigate("Login")
    //         }
    //
    //     });
    //     return unsubscribe;
    // }, [])

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your email'
                label='email'
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label='Password'
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Button title="sign in" style={styles.button} onPress={signIn} />
            <Button title="register" style={styles.button} onPress={() => navigation.navigate('SignUp')} />
        </View>
    )
}

export default SignInScreen

export const styles = StyleSheet.create ({
    button: {
        width: 200,
        margin: 20,
    },
    container: {
        flex: 1,
    },
})