import { StatusBar } from 'react-native';
import RootIndex from './index';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <RootIndex />
    </>
  );
}
