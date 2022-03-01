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
        backgroundColor:'#c4c4c459',
        justifyContent: 'flex-start',
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#777777',
        borderStyle:'solid',
        flexDirection:'row',
        paddingVertical:2,
    },
    icon:{
        marginTop:6.5,
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
