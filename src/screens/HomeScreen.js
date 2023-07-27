import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Image} from 'react-native-elements'

export default function HomeScreens() {
  const BASE_URI='https://unsplash.com/es/fotos/mGZX2MOPR-s'; 
  return (
    <View>
      <Image source={require('../assets/img/imagen1.jpg')} styles={styles.image} />
      <Image source={{ uri: BASE_URI }} styles={styles.image} />
    </View>
  )
}
//rnf para la escructuta
const styles = StyleSheet.create({
  image:{
    resizeMode:'contain',
    width:'100%',
    height:200,
    marginTop:20,
  }
})