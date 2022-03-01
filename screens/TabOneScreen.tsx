import {SafeAreaView, StyleSheet, Switch, TextInput} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from "react";
import CounterText from "./CounterText"
import PeopleIcon from "../components/PeopleIcon";
import {MessageFunc} from "./ChatScreen";
import {ChatRoomList} from "../components/chat/ChatRoomList";
import Colors from "../constants/Colors";

// sample imports
import {CardsDisp, ProfileCardsDisp} from "../components/molecules/CardsDisp";
import {ProfileCardProps} from "../components/molecules/CardsDisp";
import {MemberCardsSample, ProfileCardsSample, TalkSample} from "../sample_data/SampleData";
import {TalkListView} from "../components/molecules/ListButton";
import {GroupTalkRoom} from "../components/chat/ChatButton";

interface Props{
  color: string;
}


function App (props: Props) {
  const {color} = props;
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState(false);
  function onValueChange(newValue: boolean) {
    setValue(newValue)
  };
  return(

    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <ProfileCardsDisp memberCardList={MemberCardsSample} />
      </View>
      <View style={styles.chatsContainer}>
        {/*<ChatRoomList />*/}
        <TalkListView infoArray={TalkSample} />
      </View>
    </View>


  );
};



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>, props: Props) {
  return (
      <App color={'#2cb'}></App>
  );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: Colors.light.background,

  },
  cardsContainer: {
    height: 140,
  },
  chatsContainer: {
    flex: 1,
    alignItems: "stretch",
  },
});