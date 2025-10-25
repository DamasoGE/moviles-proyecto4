import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

type Props = {
  letra: string;
  pulsarLetra: (letra: string) => void;
  usada: boolean;
};

export default function Tecla({ letra, pulsarLetra, usada }: Props) {
  return (
    <Pressable
      onPress={() => !usada && pulsarLetra(letra)}
      style={usada ? styles.contenedorDeshabilitado : styles.contenedor}
    >
      <Text style={styles.textoLetra}>{letra}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: 40,
    height: 40,
    borderWidth: 1,
    padding: 5,
    borderRadius: 6,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contenedorDeshabilitado: {
    width: 40,
    height: 40,
    borderWidth: 1,
    padding: 5,
    borderRadius: 6,
    borderColor: "#999",
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },
  textoLetra: {
    fontSize: 22,
    color: "#333",
    fontWeight: 600,
  },
});
