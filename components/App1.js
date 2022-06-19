import React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';

const App: () => Node = () => {
  const [count, setCount] = React.useState(0);
  const handlePress = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <Text>{count}</Text>
      {/* 对于默认的button是没有办法用styleSheet去修改样式的 */}
      <Button title="Press me" onPress={handlePress} color="skyblue" />
      <TouchableOpacity onPress={handlePress} style={StyleSheet.btn}>
        <Text>点击自增</Text>
      </TouchableOpacity>
    </View>
  );
};

const StyleSheet = {
  btn: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default App;
