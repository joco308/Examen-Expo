import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../atoms/PrimaryButton';
import TextBlock from '../molecules/textBlock';

type Props = { onPress: () => void };

export default function CallToAction({ onPress }: Props) {
  return (
    <View style={s.box}>
      <TextBlock
        title={'Jump start your\ncrypto portfolio'}
        subtitle={'Take your investment portfolio\nto next level'}
      />
      <View style={s.btnWrap}>
        <PrimaryButton title="Get Started" onPress={onPress} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  box: { paddingBottom: 16 },
  btnWrap: { marginTop: 32 },
});