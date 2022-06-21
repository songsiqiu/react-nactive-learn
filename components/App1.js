import React from 'react';
import {View} from 'react-native';
import { WebView } from 'react-native-webview';

const App: () => Node = () => {
  return (
    <View style={{flex:1}}>
      <WebView
        source={{
          uri: 'https://www.bilibili.com/video/BV195411E7pf?p=30&spm_id_from=pageDriver&vd_source=275d80a4973959d74816231a95cbac57',
        }}></WebView>
    </View>
  );
};

const StyleSheet = {};

export default App;
