import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

type Props = {
  vidas: number;
}

const horcaImages = [
  require("assets/ahorcado_0.png"),
  require("assets/ahorcado_1.png"),
  require("assets/ahorcado_2.png"),
  require("assets/ahorcado_3.png"),
  require("assets/ahorcado_4.png"),
  require("assets/ahorcado_5.png"),
  require("assets/ahorcado_6.png"),
]

export default function Horca({vidas}: Props) {
  return (
    <View>
      <Image source={horcaImages[vidas]} style={styles.image} contentFit="contain"/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "70%",
    aspectRatio: 1
  }
})