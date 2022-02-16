import React from "react";
import {Alert, StyleSheet, Text, View} from "react-native";
import {Avatar, Button, Tile} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontAwesome} from "@expo/vector-icons";


interface Button {
    title: string;
    fontAwesomeTitle: string;
}

const FilterButton = (props: Button) =>{
    return(
        <View style={styles.Button}>
            {/*<TouchableOpacity onPress={roomLink}>*/}
            <View style={styles.icon}>
                <Icon name={props.fontAwesomeTitle} size={14} color={'#FFFFFF'}/>
            </View>
            <View style={styles.titleContent}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            {/*</TouchableOpacity>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    Button:{
        width: 90,
        height:31,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor:'#777777',
        justifyContent: 'flex-start',
        borderRadius: 10,
        paddingVertical:2,
        borderColor:'#C4C4C4',
        flexDirection:'row',
    },
    icon:{
        marginTop:6,
        marginLeft:12,
    },
    titleContent:{
        justifyContent:'center',
        marginLeft:14,
    },
    title:{
        fontSize:14,
        fontFamily:'Avenir',
        color:"#FFFFFF",
    }
})

export default FilterButton;
