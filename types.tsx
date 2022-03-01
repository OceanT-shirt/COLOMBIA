/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  EditProfile: undefined;
  Profile: undefined;
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

// interfaces of cards
export interface ProfileCardProps {
  displayName: string;
  profile: string;
  photoURL: string;
  score?: number;
}

export interface MemberCardProps {
  groupName: string;
  seasonName: string;
  score: number;
  id?: number;
  name?: string;
}


export interface ProfileCardsArrayProps {
  profileList: Array<ProfileCardProps>
}


export interface MemberCardsArrayProps {
  memberCardList: Array<MemberCardProps>
}