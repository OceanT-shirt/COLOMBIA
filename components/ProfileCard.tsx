import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Avatar, Button} from "react-native-elements";
// import {Members} from "./members";

interface Members {
    id: number |　string;
    pic: HTMLImageElement;
    name: string;
    desc: string;
}

const ProfileCard = (props: Members) => {
    return (
        <View style={styles.card}>
            <View style={styles.avatar}>
                <Avatar rounded size={200} source={{uri: props.pic}} />
            </View>
            <Text style={styles.name}>
                {props.name}
            </Text>
            <Text style={styles.desc}>
                {props.desc}
            </Text>
            <Button title="Check Profile" buttonStyle={styles.button} containerStyle={styles.buttonContainer} titleStyle={styles.buttonTitle} />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginHorizontal: 40,
        marginVertical: 80,
        padding: 30,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#8D20E0',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 45,
        fontFamily: 'Avenir',
        fontWeight: '900',
        alignItems: 'center',
        color: '#000',
    },
    desc: {
        fontSize: 20,
        margin: 15,
        alignItems: 'center',
        color: '#000',
        fontFamily: 'Avenir',
        fontWeight: '400',
    },
    avatar: {
        padding: 30,
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        paddingTop: 30,
        alignItems: "center",
    },
    buttonTitle: {
        flex: 1,
        fontSize: 25,
        fontFamily: 'Avenir',
        fontWeight: '400',
    },
    button: {
        width: '100%',
        backgroundColor: '#8D20E0',
        height: 60,
        borderRadius: 15,
        fontSize: 35,
    },
})

export default ProfileCard
