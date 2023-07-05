import React, { useState } from 'react';
import { View, TextInput, Button,NumberInput, StyleSheet} from 'react-native';
import firebase from 'firebase';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactno, setNumber] = useState('');
  const [bname, setBName] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [about, setAbout] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');


  const handleSubmit = () => {
    const formData = { name, email, contactno, bname, address, website, about, password, cpassword};
    firebase.database().ref('formData').push(formData);
    setName('');
    setEmail('');
    setNumber('');
    setBName('');
    setAddress('');
    setWebsite('');
    setAbout('');
    setPassword('');
    setCPassword('');
  };

  return (
    <View style = {styles.container}>
      <TextInput
        placeholder="Name*"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Email*"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <NumberInput
        placeholder="Contact Number*"
        value={contactno}
        onChangeText={Number => setNumber(Number)}
      />
      <TextInput
        placeholder="Business Name*"
        value={bname}
        onChangeText={text => setBName(text)}
      />
      <TextInput
        placeholder="Address*"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        placeholder="Website*"
        value={website}
        onChangeText={text => setWebsite(text)}
      />
      <TextInput
        placeholder="About*"
        value={about}
        onChangeText={text => setAbout(text)}
      />
      <TextInput
        placeholder="Password*"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        placeholder="Confirm Password*"
        value={cpassword}
        onChangeText={text => setCPassword(text)}
      />
      <Button title="Create Account" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3d277b',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default FormComponent;
