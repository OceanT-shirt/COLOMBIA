import { signOut } from "firebase/auth";
import {Button, Image, StyleSheet} from "react-native";
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
            <Image style={styles.profilePic} source={{uri: photoURL}} />
            {/*TODO null時の処理*/}
            <Text style={styles.title}>{displayName}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            {/*<Text style={styles.getStartedText} >{profile}</Text>*/}
            <Button title="編集する" onPress={() => navigation.navigate('EditScreen')}/>
            <Button title="ログアウト" onPress={signOutFunc}/>
        </View>
    );
}
    
const styles = StyleSheet.create ({
    profilePic: {
        width: 192,
        height: 192,
        borderRadius: 48,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
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
});
    