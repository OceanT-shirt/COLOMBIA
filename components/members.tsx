export interface Members {
    id: number;
    pic: HTMLImageElement;
    name: string;
    desc: string;
}

export const members_list: Partial<Members>[] = [
    {
        id: 1,
        pic: require('../assets/images/matching-app-icon.png'),
        name: '積み重ね太郎',
        desc: '起業・投資・仮想通貨・サウナ＃駆け出しエンジニア',
    },
    {
        id:2,
        pic: require('../assets/images/matching-app-red.png'),
        name: 'サブ垢花子',
        desc: '＃おしゃれサンと繋がりたい',
    },
    {
        id:3,
        pic: require('../assets/images/matching-app-icon.png'),
        name: '酒スト三郎',
        desc: 'スト缶しか勝たん卍',
    },
];