import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Teclado from "./components/Teclado";
import { useState } from "react";
import Marcador from "./components/Marcador";

export default function App() {

  const [letrasUsadas, setLetrasUsadas] = useState("");

  const manejarPulsarLetra = (letra: string) => {
    if (!letrasUsadas.includes(letra)) {
      setLetrasUsadas(letrasUsadas + letra)
    }
  };

  return (
    <View style={styles.container}>
      <Marcador victorias={1} derrotas={3} />
        <Teclado pulsarLetra={manejarPulsarLetra} letrasUsadas={letrasUsadas} />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
