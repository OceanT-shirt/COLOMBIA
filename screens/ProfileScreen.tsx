import { signOut } from "firebase/auth";
import {Image, StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import {Text, View} from "../components/Themed";
import {auth} from "../firebase";
import {RootTabScreenProps} from "../types";


export default function ProfileScreen({navigation}: RootTabScreenProps<'Profile'>) {
    const email = auth?.currentUser?.email;
    const displayName = auth?.currentUser?.displayName;
    const photoURL = auth?.currentUser?.photoURL;
    const uid = auth?.currentUser?.uid;
    const signOutFunc = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            alert(error)
        })};

    return (
        <View style={styles.container}>
            <Button title="＜ Back to Home" onPress={() => navigation.navigate('Root')} buttonStyle={styles.logOutButton} containerStyle={styles.buttonContainer} titleStyle={styles.buttonTitle} />
            <Image style={styles.profilePic} source={{uri: photoURL}} />
            {/*TODO null時の処理*/}
            <Text style={styles.title}>{displayName}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            {/*<Text style={styles.getStartedText} >{profile}</Text>*/}

            <Button title="Edit" onPress={() => navigation.navigate('EditScreen')} buttonStyle={styles.editButton} containerStyle={styles.buttonContainer} titleStyle={styles.buttonTitle} />
            <Button title="Log out" onPress={signOutFunc} buttonStyle={styles.logOutButton} containerStyle={styles.buttonContainer} titleStyle={styles.buttonTitle} />
        </View>
    );
}
    
const styles = StyleSheet.create ({
    profilePic: {
        width: 192,
        height: 192,
        borderRadius: 48,
        margin: 24,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        fontFamily: 'Avenir',
        fontWeight: '900',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
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
    },
    editButton: {
        width: '75%',
        backgroundColor: '#8D20E0',
        height: 60,
        borderRadius: 15,
        fontSize: 35,
    },
    logOutButton: {
        width: '75%',
        backgroundColor: '#00B393',
        height: 60,
        borderRadius: 15,
        fontSize: 35,
    },
});
    
