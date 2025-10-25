import { StyleSheet, Text, View } from "react-native";
import { generarDisplayInicial, generarPalabraAleatoria } from "./helpers/Funciones";

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}></Text>
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
  texto: {
    fontSize: 20,
  }
});