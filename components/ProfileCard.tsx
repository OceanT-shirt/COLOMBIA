import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Avatar, Button} from "react-native-elements";
import {Members} from "./members";

const ProfileCard = (props: Members) => {
    return (
        <View style={styles.card}>
            <View style={styles.avatar}>
                <Avatar rounded size={128} source={props.pic} />
            </View>
            <Text style={styles.name}>
                {props.name}
            </Text>
            <Text style={styles.desc}>
                {props.desc}
            </Text>
            <Button title="Check Profile" />
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
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
    },
    name: {
        fontSize: 36,
        fontWeight: "bold",
        alignItems: 'center',
        color: 'white',
    },
    desc: {
        fontSize: 16,
        margin: 15,
        alignItems: 'center',
        color: 'white',
    },
    avatar: {
        padding: 30,
        alignItems: 'center',
    }
})

export default ProfileCard
