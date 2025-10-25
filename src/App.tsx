import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import {
  generarDisplayInicial,
  generarPalabraAleatoria,
  realizarIntento,
} from "./helpers/Funciones";
import Horca from "./components/Horca";
import Teclado from "./components/Teclado";
import Marcador from "./components/Marcador";

export default function App() {
  const [vidas, setVidas] = useState<number>(0);
  const [display, setDisplay] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [palabra, setPalabra] = useState<string>("");
  const [letrasUsadas, setLetrasUsadas] = useState<string>("");
  const [victorias, setVictorias] = useState<number>(0);
  const [derrotas, setDerrotas] = useState<number>(0);

  const inicializarPartida = () => {
    const { categoria, palabra } = generarPalabraAleatoria();
    setCategoria(categoria);
    setPalabra(palabra);
    setVidas(6);
    setDisplay(generarDisplayInicial(palabra));
    setLetrasUsadas("");
  };

  useEffect(() => {
    inicializarPartida();
  }, []);

  const victoria = () => {
    setVictorias((victorias) => victorias + 1);
    Alert.alert(
      "¡¡¡Victoria!!!",
      "Has adivinado la palabra correctamente.",
      [
        {
          text: "Nueva Partida",
          onPress: inicializarPartida,
        },
      ],
      { cancelable: false }
    );
  };

  const derrota = () => {
    setDerrotas((derrotas) => derrotas + 1);
    Alert.alert(
      "Derrota...",
      `La palabra era: ${palabra}`,
      [
        {
          text: "Nueva Partida",
          onPress: inicializarPartida,
        },
      ],
      { cancelable: false }
    );
  };

  const pulsarLetra = (letra: string) => {
    const { actualizado, displayIntento } = realizarIntento(
      palabra,
      display,
      letra
    );

    if (actualizado) {
      setLetrasUsadas((letrasUsadas) => letrasUsadas + letra);
      setDisplay(displayIntento);
      if (!displayIntento.includes("-")) {
        victoria();
      }
    } else {
      setLetrasUsadas((letrasUsadas) => letrasUsadas + letra);
      setVidas((vidas) => vidas - 1);
      if (vidas == 0) {
        derrota();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoCategoria}>{categoria}</Text>
      <Horca vidas={vidas} />
      <Teclado pulsarLetra={pulsarLetra} letrasUsadas={letrasUsadas} />
      <Text style={styles.textoDisplay}>{display}</Text>
      <Marcador victorias={victorias} derrotas={derrotas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    backgroundColor: "#f0f4f8",
    alignItems: "center",
    justifyContent: "center",
  },
  textoCategoria: {
    textAlign: "center",
    fontSize: 28,
    color: "#555",
    backgroundColor: "#e0e7ef",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 16,
    fontWeight: 500,
    borderColor: "#b0c4d8",
    borderWidth: 1.5,
  },
  textoDisplay: {
    textAlign: "center",
    fontSize: 42,
    color: "#1A1A1A",
    letterSpacing: 10,
    fontWeight: "bold",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#d0d7de",
  },
});
