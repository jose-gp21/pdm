import AppNavigator from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App(){
  return(
    <NavigationContainer>
     <AppNavigator/>
    </NavigationContainer>
  )
}