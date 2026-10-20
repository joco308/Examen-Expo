import { StyleSheet, View } from 'react-native';
import HeroImage from '../atoms/HeroImage';

export default function Hero() {
  return (
    <View style={s.box}>
      <HeroImage />
    </View>
  );
}

const s = StyleSheet.create({
  box: { alignItems: 'center', justifyContent: 'center' },
});
