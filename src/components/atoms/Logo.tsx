import { StyleSheet, Text } from 'react-native';

export default function Logo() {
    return(
        <Text style={s.logo}>
            Crypt<Text style={s.x}>X</Text>
        </Text>
    )
}

const s = StyleSheet.create({
    logo: {color: '#fff', fontSize: 44, fontWeight: '700'},
    x: {color: '#6B4EFF'},
})