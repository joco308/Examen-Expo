import { Image, StyleSheet } from 'react-native';

export default function HeroImage() {
  return (
    <Image
      source={require('../../../assets/images/LOGO.png')}
      style={s.img}
      resizeMode="contain"
    />
  );
}

const s = StyleSheet.create({
  img: { width: '100%', height: 300 },
});
