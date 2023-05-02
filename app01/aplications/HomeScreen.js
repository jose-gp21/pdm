import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

const image = {uri:'https://i.pinimg.com/564x/ff/65/8f/ff658f2d2a8d1b791e9158d4541d54a0.jpg'};

export default function Home() {

  const navigation = useNavigation();

  return (
    <ImageBackground source={image} style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.barrasuperior}>
          <Text style={{ fontSize: 24, fontWeigh: 'bold' }}>Aplications</Text>
        </View>
        
          <ScrollView>
        
              <TouchableOpacity style={styles.botaoarea}
                onPress={() => { navigation.navigate('BMI')}}>
                <Text style={styles.texto}>App 01 - BMI</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoarea}
                onPress={() => { navigation.navigate('Tasks') }}>
                <Text style={styles.texto}>App 02 - Tasks</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoarea}
                onPress={() => { navigation.navigate('Forms') }}>
                <Text style={styles.texto}>App 03 - Form</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoarea}
                onPress={() => { navigation.navigate('Maps') }}>
                <Text style={styles.texto}>App 04 - Maps</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoarea}>
                <Text style={styles.texto}>App 05 - MaskText</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoarea}>
                <Text style={styles.texto}>App 06</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoarea}>
                <Text style={styles.texto}>App 07</Text>
              </TouchableOpacity>
            
          </ScrollView>
        

        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginTop: -10,
  },
  barrasuperior: {
    width: '100%',
    height: 70,
    backgroundColor: 'grey',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  areas: {
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  botaoarea: {
    height: 70,
    borderWidth: 0.75,
    borderColor: 'white',
    backgroundColor: 'transparent',
    margin: 10,
    padding: 15,
    justifyContent: 'center',
    borderRadius: 15
  },
  texto: {
    textAlign:'center',
    fontSize: 18,
    color: 'white'
  }
});
