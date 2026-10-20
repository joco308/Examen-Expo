import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CallToAction from '../components/organisms/CallToAction';
import Header from '../components/organisms/Header';
import Hero from '../components/organisms/Hero';

export default function Index() {
  return (
    <SafeAreaView style={s.screen}>
      <StatusBar style="light" />
      <Header />
      <Hero />
      <CallToAction onPress={() => console.log('Get Started')} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#070707',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
});