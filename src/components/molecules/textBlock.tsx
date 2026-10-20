import { View } from 'react-native';
import Subtitle from '../atoms/Subtitle';
import Title from '../atoms/Title';

type Props = { title: string; subtitle: string };

export default function TextBlock({ title, subtitle }: Props) {
  return (
    <View>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </View>
  );
}