import {SafeAreaView, StyleSheet, Switch, TextInput} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React, {useState} from "react";
import CounterText from "./CounterText"
import PeopleIcon from "../components/PeopleIcon";
import {MessageFunc} from "./ChatScreen";
import {ChatRoomList} from "../components/chat/ChatRoomList";
import {Button, Input} from "react-native-elements";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase";
import {MemberCardsDisp} from "../components/molecules/CardsDisp";
import {ProfileCardsSample} from "../sample_data/SampleData";
import {MemberCards} from "../components/functions/GetMemberCards";


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
      {/*<SearchBarComponent atoms="gaga"/>*/}
      <MemberCards />
    </View>

  );
};




export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>, props: Props) {
  return (
      <App color={'#2cb'}></App>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
