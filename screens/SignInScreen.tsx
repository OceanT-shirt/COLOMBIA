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
            <View style={styles.inputContainer}>
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
            </View>
            <Button title="sign in" buttonStyle={styles.signInButton} containerStyle={styles.buttonContainer} onPress={signIn} titleStyle={styles.buttonTitle} />
            <Button title="register" buttonStyle={styles.registerButton} containerStyle={styles.buttonContainer} onPress={() => navigation.navigate('SignUp')} titleStyle={styles.buttonTitle} />
        </View>
    )
}

export default SignInScreen

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: "center",
        justifyContent: "center",
    },
    signInButton: {
        width: '75%',
        backgroundColor: '#8D20E0',
        height: 60,
        borderRadius: 15,
        fontSize: 35,
    },
    registerButton: {
        width: '75%',
        height: 60,
        backgroundColor: '#00B393',
        borderRadius: 15,
        fontSize: 35,
    },
    inputContainer: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 30,
    },
    buttonContainer: {
        width: '100%',
        paddingTop: 30,
        alignItems: "center",
    },
    buttonTitle: {
        flex: 1,
        fontSize: 30,
        fontFamily: 'Avenir',
        fontWeight: '400',
    }
})