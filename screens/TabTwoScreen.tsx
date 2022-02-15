import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import HomeScreen from "../components/ShuffleCard";
import {TitleStyles} from "../components/atoms/title";
import {SearchBarComponent} from "../components/molecules/SearchBar";
import {MemberCardsDisp} from "../components/molecules/CardsDisp";
import {ProfileCardsSample} from "../sample_data/SampleData";
import Colors from "../constants/Colors";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/*<SearchBarComponent atoms="gaga"/>*/}
      {/*<HomeScreen />*/}
      <MemberCardsDisp profileList={ProfileCardsSample} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
