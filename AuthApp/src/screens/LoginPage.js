import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LoginImage from '../helper/LoginImage';
import InputBox from '../helper/InputBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';
import ForgetPassword from '../helper/ForgetPassword';
import NewAccount from '../helper/NewAccount';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handlerSignUp = ()=>{
    navigation.navigate('SignUpPage')
  }
  return (
    <View style = {{flex : 1}}>
      <View style={{marginTop: 50, alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to Login</Text>
       
      </View>
      <LoginImage />
      
      <InputBox
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder={'Enter Your Email'}
      />
      
      <InputBox
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder={'Enter Your Passwords'}
        
      />

      <ForgetPassword/>
      <CustomButton text={'Login'} />
      <NewAccount onPress={handlerSignUp}
      text1={'Don’t have an account?'}
      text2 ={"Sign up"}
      />
      
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
