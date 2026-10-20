import { StyleSheet, View } from 'react-native';
import Logo from '../atoms/Logo';

export default function Header() {
  return (
    <View style={s.box}>
      <Logo />
    </View>
  );
}

const s = StyleSheet.create({
  box: { paddingTop: 16 },
});
