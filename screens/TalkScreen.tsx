import React from "react";
import {View} from "../components/Themed";
import {ProfileCardsDisp} from "../components/molecules/CardsDisp";
import {MemberCardsSample} from "../sample_data/SampleData";
import {TalkRoomList} from "../components/functions/GetTalkRooms";
import {RootStackParamList, RootStackScreenProps, RootTabScreenProps} from "../types";
import {StyleSheet, Text} from 'react-native';
import {MessageFunc} from "../components/functions/TalkFunction";

interface Props {
    roomId: string,
}

const styles = StyleSheet.create({
   container : {
       flex: 1,
   } ,
});

function App (props: Props) {
    console.log(props)

    return(
        <View style={styles.container}>
            <MessageFunc roomId={props.roomId} />
            {/*<Text style={{color: "white"}}>{props.roomId}</Text>*/}
        </View>

    );
};



export default function TalkScreen({ route, navigation }: RootStackScreenProps<"Talk">) {
    const {roomId} = route.params;
    return (
        <App roomId={roomId} />
    );

};