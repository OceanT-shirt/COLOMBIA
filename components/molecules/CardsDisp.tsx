import {Text, View} from "react-native";
import {Avatar, Button, Divider} from "react-native-elements";
import React from "react";
import {StyleSheet} from "react-native";
import Colors, {colors_new} from "../../constants/Colors";
import Swiper from "react-native-swiper";
import {MemberCardProps, MemberCardsArrayProps, ProfileCardProps, ProfileCardsArrayProps} from "../../types";
import {TitleStyles} from "../atoms/title";
import {BlurView} from "expo-blur";


const styles = StyleSheet.create({
    card: {
        height: 300,
        width: 200,
        // borderRadius: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#fff',
        borderColor: 'white',
        borderWidth: .5,
    },
    compactCard: {
        height: 80,
        width: 200,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: "row",
    },
    score: {
        fontSize: 36,
        color: Colors.dark.colorEmphasis,
        marginTop: 15,
        marginRight: 15,
        alignSelf: 'flex-end',
        fontFamily: 'Avenir',
        fontWeight: '900',
    },
    name: {
        fontSize: 25,
        fontFamily: 'Avenir',
        fontWeight: '900',
        alignItems: 'center',
        color: '#000',
    },
    desc: {
        fontSize: 20,
        alignItems: 'center',
        color: '#000',
        fontFamily: 'Avenir',
        fontWeight: '400',
    },
    avatar: {
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        alignItems: "center",
    },
    buttonTitle: {
        flex: 1,
        fontSize: 25,
        fontFamily: 'Avenir',
        fontWeight: '400',
    },
    button: {
        width: '100%',
        backgroundColor: '#8D20E0',
        height: 50,
        borderTopLeftRadius: 0,
        borderTopRightRadius:0,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        fontSize: 35,
    },
    container: {
        height: 360,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper:{
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    cardName:{

    },
})

// TODO ??????????????????????????????
const ProfileCard = (props: ProfileCardProps) => {

    return(
        <BlurView intensity={70} tint="light" style={styles.card}>
            <Text style={styles.score}>
                {props.score}
            </Text>
            <View style={styles.avatar}>
                <Avatar rounded size={100} source={{uri: props.photoURL}} />
            </View>
            <Text style={styles.name}>
                {props.displayName}
            </Text>
            <Text style={styles.desc}>
                {props.profile}
            </Text>
            <Button title="????????????" buttonStyle={styles.button} containerStyle={styles.buttonContainer} titleStyle={styles.buttonTitle} />
        </BlurView>
    )
}

const MemberCardCompact = (props: MemberCardProps) => {
    return(
        <View style={styles.compactCard}>
            <View style={styles.cardName}>
                <Text style={styles.name}>
                    {props.groupName}
                </Text>
                <Text style={styles.desc}>
                    {props.seasonName}
                </Text>
            </View>
            <Text style={styles.score}>
                {props.score}
            </Text>
        </View>
    )
}

export const MemberCard = "This component shows a member card"


// TODO ????????????????????????????????????????????????
const CardsDisp = ({profileList}: ProfileCardsArrayProps) => {
    return (

        <Swiper style={styles.wrapper} showsButtons bounces >

            {
                profileList.map((info) => {
                    return (<ProfileCard key={profileList.indexOf(info)} {...info} />)})
            }
        </Swiper>
    )
}

export const MemberCardsDisp = ({profileList}: ProfileCardsArrayProps) => {
    return (
        <View style={styles.container}>
            <Text style={TitleStyles.titleCenter}>
                Cloud League
            </Text>
            <CardsDisp profileList={profileList} />
        </View>
    )
}

export const ProfileCardsDisp = ({memberCardList}: MemberCardsArrayProps) => {
    return (
        <View style={styles.container}>
            <Text style={TitleStyles.titleCenter}>
                MY MEMBERS CARDS
            </Text>
            <Swiper style={styles.wrapper} showsButtons loop bounces>
                {
                    memberCardList.map((info) => {
                        return (<MemberCardCompact key={memberCardList.indexOf(info)} groupName={info.groupName} seasonName={info.seasonName} score={info.score} />)})
                }
            </Swiper>
            {/*<Divider color={colors_new.light.title} width={5} />*/}
        </View>
    )
}
// TODO Divider????????????????????????