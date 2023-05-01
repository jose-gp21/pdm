import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const image = { uri: 'https://img.freepik.com/free-photo/close-up-legs-weight-machine_23-2149177672.jpg?w=740&t=st=1682978998~exp=1682979598~hmac=00b98dd13156d00dd22e934b3ab9d4721b88c99a0d6e87cca620225d53622b6b' };

export default function BMI() {
  const { peso, setPeso } = useState(' ');
  const { altura, setAltura } = useState(' ');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      alert("under weight" + imc.toFixed(2)); //toFixed(n) limita as casas após a virgula
    } else if (imc >= 18.6 && imc < 24.9) {
      alert("ideal weight" + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert("over weight" + imc.toFixed(2));
    }
  }

  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculate your BMI</Text>
        <TextInput
          style={styles.input}
          value={peso}
          //onChangeText={(peso) => setPeso(peso)}
          placeholder='enter your weight (kg)'
          keyboardType='numeric'
          placeholderTextColor={'white'}
        />

        <TextInput
          style={styles.input}
          value={altura}
         // onChangeText={(altura) => setAltura(altura)}
          placeholder='enter your height (cm)'
          keyboardType='numeric'
          placeholderTextColor={'white'}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}> Calculate </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  titulo: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
    color: 'white'
  },
  input: {
    width: 230,
    backgroundColor: 'transparent',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#FFF',
    fontSize: 23,
    textAlign: 'center',
    borderWidth: 0.75,
    borderColor: 'white'
  },
  button: {
    width: 150,
    textAlign: 'center',
    margin: 15,
    backgroundColor: '#9c9c9c',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white'
  }
});