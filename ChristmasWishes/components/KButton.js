import { Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const KButton = ({title, btnColor, route, txtColor}) => {
    const navigator = useNavigation()
    return(
        <TouchableOpacity onPress={() => navigator.navigate(route)}
                          style ={{backgroundColor:btnColor,borderRadius:10, alignItems:'center',justifyContent:'center',padding:10,width:"80%"}}>
            <Text style={{color:txtColor, fontSize:16,fontWeight:'bold'}}>{title}</Text>
        </TouchableOpacity>
    )
}
export default KButton;