import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const NewAccount = ({onPress , text1 , text2}) => {
  return (
    <View style = {{ marginTop : 50, flexDirection: 'row' , alignItems: 'center', justifyContent: 'center'}}>
      <Text style = {{fontSize: 16, fontWeight: 'bold' ,}}>{text1} </Text>
      <TouchableOpacity 
      onPress={onPress}
      >
        <Text style = {{fontSize: 16, fontWeight: 'bold' , color: 'blue'}}>
       {text2}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewAccount

const styles = StyleSheet.create({})