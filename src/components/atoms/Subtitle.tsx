import { StyleSheet, Text } from 'react-native';

type Props = { children: string};

export default function Subtitle({children}:Props){
    return <Text style={s.sub}>{children}</Text>
}

const s = StyleSheet.create({
    sub: {color:'#fff', fontSize: 15, lineHeight: 22, marginTop: 12},
})