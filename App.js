import React from 'react';
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { AppRootStack } from './app/navigation/stacks/AppRootStack';

export default function App() {
  return (
    <ActionSheetProvider>
      <AppRootStack />
    </ActionSheetProvider>
  );
}


