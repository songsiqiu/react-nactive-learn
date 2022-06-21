import React from 'react';
import {View, FlatList,Text} from 'react-native';

const arr_data = [
  {
    id: 1,
    data: 10,
  },
  {
    id: 2,
    data: 20,
  },
  {
    id: 3,
    data: 30,
  },
  {
    id: 4,
    data: 40,
  },
];

const App: () => Node = () => {
  const renderFun = ({item})=> <Text>{item.id}: {item.data}</Text>;
  return (
    <View style={{flex: 1}}>
      <FlatList 
        numColumns={1}
        data={arr_data} 
        renderItem={renderFun}
      ></FlatList>
         
</View>
  );
};

const StyleSheet = {};

export default App;
