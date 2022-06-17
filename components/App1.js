import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App: () => Node = () => {
  return (
    <View>
      <Text style={styles.text1}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    text1:{
        fontSize:30,
    }
})

export default App;
