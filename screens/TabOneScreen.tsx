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
      <ProfileCardsDisp memberCardList={MemberCardsSample} />
      {/*<ChatRoomList />*/}
      <TalkListView infoArray={TalkSample} />
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    width: 256,
    padding: 4,
  },
});
