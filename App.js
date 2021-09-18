import React from 'react';
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { AppRootStack } from './app/navigation/stacks/AppRootStack';

export default function App() {

  // useEffect

  // const script = document.createElement("script");    script.async = true;    script.src = "https://sdk.mercadopago.com/js/v2";    this.div.appendChild(script);  }


  return (
    <ActionSheetProvider>
      <AppRootStack />
    </ActionSheetProvider>
  );
}


