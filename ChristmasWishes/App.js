import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Map from "./screens/Map";
import Letter from"./screens/Letter";
import {Ionicons} from "@expo/vector-icons";



const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabNav = () => {
  return(
      <Tab.Navigator screenOptions={{
          headerShown:false,
      tabBarStyle:{
              height:'8%',
          backgroundColor:'#FF867F'
      },
          headerStyle:{
          backgroundColor:'#FFF969',
          }
      }}>
      <Tab.Screen name={"Letter"} component={Letter} options={{tabBarIcon: ({focused}) =>
              <Ionicons name={"pencil"} size={28} color={ focused ? "yellow" : 'gray'}/>,
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'yellow'

      }}
      />
        <Tab.Screen name={"Map"} component={Map} options={{tabBarIcon: ({focused}) =>
        <Ionicons name={"map"} size={28} color={focused ? "yellow" : "gray"}/>,
            tabBarInactiveTintColor:'gray',
            tabBarActiveTintColor:'yellow'
        }}/>
        <Tab.Screen name={"Profile"} component={Profile} options={{tabBarIcon:({focused}) =>
        <Ionicons name={"person"} size={28} color={focused ? "yellow" : "gray"}/>,
            tabBarInactiveTintColor:'gray',
            tabBarActiveTintColor:'yellow'
        }}/>
      </Tab.Navigator>
  )
}
const StackNav = () => {
  return(
     <Stack.Navigator>
       <Stack.Screen name={"Login"} component={Login} options={{headerShown:false}}/>
       <Stack.Screen name={"Register"} component={Register} options={{headerShown:false}}/>
       <Stack.Screen name={"TabNav"} component={TabNav} options={{headerShown:false}}/>
     </Stack.Navigator>
  )
}

export default function App() {
  return (
<NavigationContainer>
  <StackNav/>
</NavigationContainer>
  );
}


