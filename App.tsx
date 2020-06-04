import React from 'react';
import {AppLoading} from 'expo';
import {StatusBar} from 'react-native';
import * as Font from 'expo-font';

import Routes from './src/routes';

const customFonts = {
  'Roboto_400Regular': require('@expo-google-fonts/roboto/Roboto_400Regular.ttf'),
  'Roboto_500Medium': require('@expo-google-fonts/roboto/Roboto_500Medium.ttf'),
  'Ubuntu_700Bold': require('@expo-google-fonts/ubuntu/Ubuntu_700Bold.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          <Routes />
        </>
      );
    } else {
      return <AppLoading />;
    }
  }
}
