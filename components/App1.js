import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={styles.text1}>
      <ScrollView horizontal>
        <Text>
          Hello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello
          WorldHello WorldHello WorldHello WorldHello WorldHello World
          333
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
  },
});

export default App;
