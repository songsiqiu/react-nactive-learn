import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';

const {width, height,scale} = Dimensions.get('window'); //获取的这个宽度,高度不是平常的单位,是react-native的单位,同时也是可见范围内的单位

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <Text>屏幕的宽度是 : {width}</Text>
      <Text>屏幕的宽度是 : {height}</Text>
      <Text>屏幕的像素比是 : {scale}</Text>
      {/* 画一条一个单位的线,如果没出来,可能是虚拟机大小被调整过了,导致没显示出来 */}
      <View style={styles.line}></View> 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width,  //获取宽度,在css中设置,这样就达到了设置宽屏的效果,或者设置flex为1
        backgroundColor:"gray",
        height
    },
    line:{
        height:1/scale,
        backgroundColor:"red"
    }
})

export default App;
