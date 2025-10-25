import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tecla from "./Tecla";

const abecedarioArray = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

type Props = {
  pulsarLetra: (letra: string) => void;
  letrasUsadas: string;
};

export default function Teclado({ pulsarLetra, letrasUsadas }: Props) {
  return (
    <View style={styles.contenedor}>
      {abecedarioArray.map((letra, index) => (
        <Tecla
          key={index}
          letra={letra}
          pulsarLetra={pulsarLetra}
          usada={letrasUsadas.includes(letra)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
