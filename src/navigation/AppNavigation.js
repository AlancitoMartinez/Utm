import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { HomeScreens } from "../screens/HomeScreen";
import { AboutScreens } from "../screens/AboutScreen";
import { ContactScreens } from "../screens/ContactScreen";
import { ServicesScreens } from "../screens/ServicesScreen";
import { GalleryScreens } from "../screens/GalleryScreen";
import { screen } from "../utils/index";


const Tab = createBottomTabNavigator();


export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={( {route} )=>({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon:({color,size})=>screenOptions(route,color,size),
      })}
    >
        <Tab.Screen name={screen.home.tab} component={HomeScreens} />
        <Tab.Screen name={screen.gallery.tab} component={GalleryScreens} />
        <Tab.Screen name={screen.contact.tab} component={ContactScreens} />
        <Tab.Screen name={screen.services.tab} component={ServicesScreens} />
        <Tab.Screen name={screen.about.tab} component={AboutScreens} />
    </Tab.Navigator>
  );
}


function screenOptions(route, color, size){
  //console.log(route)
  let iconName;
  if(route.name=== screen.home.tab){
    iconName = "home-outline"
  }  
  if(route.name===screen.gallery.tab){
    iconName= "image-outline"
  }
  if(route.name===screen.contact.tab){
    iconName= "phone-outline"
  }
  if(route.name===screen.services.tab){
    iconName= "check-outline"
  }
  if(route.name===screen.about.tab){
    iconName= "information-outline"
  }
  
  if (!iconName){
    iconName = "default-icon";
  }
  return(
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );


}
