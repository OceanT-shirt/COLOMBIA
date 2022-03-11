import {MemberCardProps, ProfileCardProps, ProfileCardsArrayProps} from "../types";
import {EventInfo, TalkInfo, TalkInfoSimple} from "../components/molecules/ListButton";


export const ProfileCardsSample: Array<ProfileCardProps> = [{
    "displayName": "Haru",
        "photoURL": "https://placeimg.com/120/120/any",
        "profile": "こんにちは",
        "score": 10,
}, {
    "displayName": "Hao",
        "photoURL": "https://placeimg.com/120/120/people/grayscale",
        "profile": "Hello",
        "score": 1,
}, {
    "displayName": "gsaga",
        "photoURL": "https://pbs.twimg.com/media/Dr40WvuU0AAaiPn.jpg",
        "profile": "こんにちは",
        "score": 0,
},]


export const MemberCardsSample: Array<MemberCardProps> = [{
    "name": "HaoHao",
    "seasonName": "SEASON 1",
    "groupName": "Cloud League",
    "score": 4,
    "id": 1145151,
},]


export const TalkSample: Array<TalkInfo> = [{
    "title": "2/15 キムチコイン開発",
    "message": "今夜私が頂くのは、ヤンニョムチキンです。",
    "upDate": "12:24",
    "notificationCount": 12,
}, {
        "title": "Haru",
        "message": "チャリで来た",
        "upDate": "2:54",
        "notificationCount": 1,
    },]

export const TalkSimpleSample: Array<TalkInfoSimple> = [{
    "roomId": "gaga",
    "roomName": "2/15 キムチコイン開発",
    "roomImageUrl": "https://placeimg.com/640/640/any",
}, {
    "roomId": "gaga",
    "roomName": "Haru",
    "roomImageUrl": "https://placeimg.com/640/640/any",
},]

export const EventsSample: Array<EventInfo> = [{
    "regulation": "10以上限定",
    "eventName": "キムチコイン開発",
    "attendee": ProfileCardsSample,
    "bonus": 3,
},{
    "regulation": "初見限定",
    "eventName": "日本酒を飲む会",
    "attendee": ProfileCardsSample,
    "bonus": 10,
},]