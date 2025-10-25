import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  victorias: number;
  derrotas: number;
};

export default function Marcador({ victorias, derrotas }: Props) {
  return (
<View style={styles.contenedor}>
  <Text>
    Victorias: {victorias} (
    {victorias + derrotas === 0
      ? '-'
      : Math.floor((victorias * 100) / (victorias + derrotas))}
    %)
  </Text>

  <Text>
    Derrotas: {derrotas} (
    {victorias + derrotas === 0
      ? '-'
      : Math.floor((derrotas * 100) / (victorias + derrotas))}
    %)
  </Text>
</View>

  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
});
