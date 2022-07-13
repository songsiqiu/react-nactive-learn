import React from 'react';
import {View, TextInput} from 'react-native';

const App: () => Node = () => {
  return (
    <View>
      <TextInput
        style={styles.txtInput}
        placeholder="请输入..."
        placeholderTextColor="#ccc"
        maxLength={8}
        underlineColorAndroid="transparent"
        // secureTextEntry={true}
      />
    </View>
  );
};

const styles = {
  txtInput: {
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 50,
    // padding:0,
    height: 40,
  },
};

export default App;
