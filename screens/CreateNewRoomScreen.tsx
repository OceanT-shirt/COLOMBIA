import React, {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase";
import {View} from "../components/Themed";
import {Button, Input} from "react-native-elements";

//TODO このページまでのリンク作成及びルーム作成後の画面遷移
const RoomCreateApp = () => {
    const [roomName, setRoomName] = useState("ルーム1")
    const CreateNewRoom = () => {
        addDoc(collection(db, "chatRooms"), {roomName: roomName});
    }
    return(
        <View style={styles.container}>
            <Input
                placeholder='新しいルームの名前を入力して下さい。'
                label='ルーム名'
                leftIcon={{ type: 'material', name: 'house' }}
                value={roomName}
                onChangeText={text => setRoomName(text)}
            />
            <Button title="新規ルームを作成" onPress={CreateNewRoom} />
        </View>
    )
}

export default function CreateNewRoomScreen({navigation}) {
    return(
        <RoomCreateApp />
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

