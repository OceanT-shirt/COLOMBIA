
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProfileScreen from "../screens/ProfileScreen";
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from "../screens/TabThreeScreen";
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {auth} from "../firebase";
import {onAuthStateChanged} from "firebase/auth";
import {useState} from "react";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import EditScreen from "../screens/EditScreen";
import {BlurView} from "expo-blur";
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const [isLogin, setIsLogin] = useState(false)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLogin(() => true)
        } else {
            setIsLogin(() => false)
        }
    })

    if (!isLogin) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        );
    } else {
        return(
            // TODO モーダルの挙動を整える（現状勝手に消えてくれない）
            <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
                <Stack.Screen name="EditScreen" component={EditScreen} />
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
                </Stack.Group>
            </Stack.Navigator>
        );
    }
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                headerStyle: {
                    height: 120,
                    backgroundColor: Colors.dark.background,
                    },
                headerTitleStyle: {
                    fontSize: 40,
                    fontFamily: 'Avenir',
                    fontWeight: '900',
                    color: 'white',
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Colors.dark.tabBar,
                    borderTopColor: '#8D20E0',
                    borderTopWidth: 2,
                    position: "absolute",
                },
                tabBarBackground: () => (
                    <BlurView tint="light" intensity={80} />
                ),
            }}>

            <BottomTab.Screen
                name="TabOne"
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    title: 'Home',
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                    //モーダルへのリンクボタンの設定
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Profile')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="user"
                                size={25}
                                color='white'
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),

                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    title: 'Discover',
                    tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabThree"
                component={TabThreeScreen}
                options={{
                    title: 'Members',
                    tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}