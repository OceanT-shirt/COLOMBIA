import {TitleStyles} from "../atoms/title";
import {SearchBar} from "react-native-elements";
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {string} from "prop-types";

type SearchBarComponentProps = {};

const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <View style={styles.view}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
    });

interface Props {
    title: string;
}

export function SearchBarComponent(title: Props){

    return(
        <>
            <Text style={TitleStyles.titleCenter}>
                {title}
            </Text>
            <SwitchComponent/>
        </>
        )

}