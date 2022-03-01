import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {TitleStyles} from "../components/atoms/title";
import {SearchBarComponent} from "../components/molecules/SearchBar";
import {MemberCardsDisp} from "../components/molecules/CardsDisp";
import {ProfileCardsSample} from "../sample_data/SampleData";
import Colors from "../constants/Colors";
import {EventList} from "../components/functions/GetEventList";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <EventList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: Colors.dark.background,
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
});
