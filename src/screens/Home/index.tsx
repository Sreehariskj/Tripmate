import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeStatusBar from '../../components/ui/SafeStatusBar'
import {Header} from '../../components/ui/Header'

const Home = (): React.JSX.Element => {
  return (
    <SafeStatusBar>    
      <Header/>
    <View>
      <Text>Home</Text>
    </View>
    </SafeStatusBar>
  )
}

export default Home

const styles = StyleSheet.create({})