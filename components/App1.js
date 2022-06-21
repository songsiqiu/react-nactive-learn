import React from 'react';
import {View, Text,Image} from 'react-native';
import Img from "../res/screen.png"

const App: () => Node = () => {
  
  return (
    <View>
      <Text>方式1</Text>
      <Image source={Img} style={{width:200,height:100}}/>

      <Text>方式2</Text>
      <Image source={require("../res/screen.png")} style={{width:100,height:100}}/>

      <Text>方式3</Text>
      {/* 注意是uri */}
      {/* URI 是 Uniform Resource Identifier 的缩写;  */}
      {/* URI（统一资源标识符）用于定义项目的标识，此处单词标识符表示无论使用的方法是什么（URL或URN），都要将一个资源与其他资源区分开来。 */}
      {/* URL（统一资源定位符）主要用于链接网页，网页组件或网页上的程序，借助访问方法（http，ftp，mailto等协议）来检索位置资源 */}
      {/* 可以说URL是URI（URL是URI的子集），但URI永远不能是URL */}
      {/* URL指定要使用的协议类型，而URI不涉及协议规范 */}
      <Image source={{uri:"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"}} style={{width:100,height:100}}/>
    </View>
  );
};

const StyleSheet = {
};

export default App;
