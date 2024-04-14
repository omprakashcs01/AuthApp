import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({text, onPress}) => {
  return (
    <View style={{alignItems: 'center',  justifyContent: 'center' }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          paddingVertical: 20,
          marginTop: 10,
          borderRadius: 20,
          elevation: 10,
          paddingHorizontal: 30
         
          
        }}
        onPress={onPress}
        >
        <Text style={{fontSize: 20, color: 'white'}}>{text}</Text>
        
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})