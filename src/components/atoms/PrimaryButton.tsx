import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {title: string; onPress: () => void};

export default function PrimaryButton({title, onPress}: Props){
    return(
        <Pressable style={s.btn} onPress={onPress}>
            <Text style={s.text}>{title}</Text>
        </Pressable>
    )
}

const s = StyleSheet.create({
    btn: {
        backgroundColor: '#6B4EFF',
        paddingVertical: 18,
        borderRadius: 14,
        alignItems: 'center',
    },
    text: {color:'#fff', fontSize: 16, fontWeight: '500'}
})