import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        backgroundColor:'red'
    }
})