import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
        <Text>2</Text>
      </View>
      <View style={styles.box3}>
        <Text>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    /* 有四个值: row, row-reverse, column, column-reverse */
    flexDirection: 'row',
    flex: 1, //如果加上这条,相当于撑满屏了
    //alignItems的值有: flex-start, flex-end, center, stretch, baseline
    alignItems:"stretch",
  },
  box1: {
    width: 200,
    // height: 200,
    backgroundColor: 'red',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default App;
