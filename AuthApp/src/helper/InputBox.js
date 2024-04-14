import {StyleSheet, Text, TextInput, View, secureTextEntry} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
const InputBox = ({value, onChangeText, placeholder}) => {
  return (
    <>
    <View>
       
      <TextInput
        style={{
          marginTop: 20,
          borderRadius: 10,
          borderWidth: 1,
          paddingVertical: 10,
          marginHorizontal: 20,
          borderColor: 'green',
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={false}
        
      />
    </View>
 

  </>
  );
};

export default InputBox;

const styles = StyleSheet.create({});
