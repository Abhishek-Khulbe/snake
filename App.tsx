import Game from "./src/components/Game";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";

const App = (): JSX.Element => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <StatusBar hidden />
    <Game />
  </GestureHandlerRootView>
);

export default App;
