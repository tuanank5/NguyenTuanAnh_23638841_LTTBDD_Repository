import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SelectPhoneApp } from './src/ex1/SelectPhoneApp';
import { SelectPhoneApi } from './src/ex1/SelectPhoneApi';
import { BottomTabApp } from './src/ex3/BottomTabApp';
import { StackTabApp } from './src/ex4/StackTabApp';
import { DrawerApp } from './src/ex5/DrawerApp';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <SafeAreaProvider>
        <DrawerApp />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}