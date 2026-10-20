import { StyleSheet, Text } from 'react-native';

type Props = { children: string };

export default function Title({ children }: Props) {
  return <Text style={s.title}>{children}</Text>;
}

const s = StyleSheet.create({
  title: { color: '#fff', fontSize: 30, fontWeight: '600', lineHeight: 40 },
});