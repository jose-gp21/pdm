import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Back(){
  return (
    <View>
        <TouchableOpacity>
            <Icon />
            <Text>Back</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})