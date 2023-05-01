import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

export default function Home() {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.barrasuperior}>
        <Text style={{fontSize: 24, fontWeigh: 'bold'}}>Áreas</Text>
      </View>

      <ScrollView>
        <View style={styles.areas}>
         <TouchableOpacity style={styles.botaoarea} 
          onPress={() => {navigation.navigate('')}}>
            <Text style={styles.texto}>App 01 - BMI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoarea}
          onPress={navigation.navigate('')}>
            <Text style={styles.texto}>App 02 - Tasks</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoarea}
          onPress={()=>{navigation.navigate('')}}>
            <Text style={styles.texto}>App 03 - Form</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoarea}
          onPress={()=>{navigation.navigate('')}}>
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F3FD',
    marginTop: 17
  },
  barrasuperior: {
    width: '100%',
    height: 70,
    backgroundColor: '#7ACCFB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10
  },
  areas:{
    justifyContent: 'space-around',
  },
  botaoarea: {
    height: 70,
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    justifyContent: 'center',
    borderRadius: 15
  },
  texto: {
    fontSize: 18,
  }
});
