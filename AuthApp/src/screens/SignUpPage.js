import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LoginImage from '../helper/LoginImage';
import InputBox from '../helper/InputBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';
import ForgetPassword from '../helper/ForgetPassword';
import NewAccount from '../helper/NewAccount';
import {useNavigation} from '@react-navigation/native';
import SignUpScreen from '../helper/SignUpScreen';
import axios from 'axios';


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const navigation = useNavigation();

  function handleSubmit() {
    const userData = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };
    axios.post('http://192.168.56.1:5001/register', userData)
      .then(res =>{
        console.log(res.data);
        if(res.data.status ==="success"){
          Alert.alert("User Created Successfully"); 
        } else {
          Alert.alert("Getting this API ERROR  ",res.data); 
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          Register Account{' '}
        </Text>
      </View>
      <SignUpScreen />
      <InputBox
        value={name}
        onChangeText={text => setName(text)}
        placeholder={'Enter Your Name'}
      />
      <InputBox
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder={'Enter Your Email'}
      />
      <InputBox
        value={mobile}
        onChangeText={text => setMobile(text)}
        placeholder={'Enter Your Mobile Number'}
      />

      <InputBox
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder={'Enter Your Passwords'}
      />

      <CustomButton text={'Sign Up'} onPress={handleSubmit} />
      <NewAccount
        text1={'Already have an account?'}
        text2={'Login'}
        onPress={handleLogin}
      />
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({});
