import React from "react";
import {Alert, StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


interface Button {
    title: string;
    fontAwesomeTitle: string;
}

const FilterButton = (props: Button) =>{
    return(
        <Button
            icon={{name: props.fontAwesomeTitle,size:14}}
            title={props.title}
            titleStyle={styles.title}
            buttonStyle={styles.Button}
        />
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
    },
    title:{
        fontSize:14,
        marginLeft:5,
        fontFamily:'Avenir'
    },
})

export default FilterButton;