// import shuffleArray from './shuffleArray'

export interface Messages {
    id: number;
    pic: HTMLImageElement;
    title: string;
    message: string;
}

export const messages_list: Partial<Messages>[] = [
    {
        id: 1,
        pic: require('../assets/images/matching-app-icon.png'),
        title: 'TypeScript',
        message: "少し理解した",
    },
    {
        id:2,
        pic: require('../assets/images/matching-app-red.png'),
        title: 'CSS',
        message: "何もわからないいいいいいいいいいいいいいいい",
    },
    {
        id: 3,
        pic: require('../assets/images/matching-app-icon.png'),
        title: 'React Native',
        message: "少し理解した",
    },
    {
        id:4,
        pic: require('../assets/images/matching-app-red.png'),
        title: 'Firebase',
        message: "少し理解した",
    },
];