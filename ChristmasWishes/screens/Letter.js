import {View, Text, TextInput, TouchableOpacity} from "react-native";
import KSpacer from "../components/KSpacer";

function Letter(){
    return(
        <View style={{flex:1, backgroundColor:'#FFF969',padding:20,alignItems:'center'}}>
            <KSpacer h ={50}/>
            <TextInput placeholder={"📍Adress"} style={{width:'100%',padding:10, backgroundColor:'white',borderRadius:10}} multiline={false}/>
            <KSpacer h={24}/>
            <TextInput placeholder={"Start writing your wishes to Santa..."} style={{width:"100%", height:"60%", backgroundColor:'white', borderRadius:10,padding:10}}  multiline={true}/>
        <KSpacer h={24}/>
         <TouchableOpacity onPress={() => alert("Your letter was received by Santa Claus ✅")} style={{backgroundColor:'#67FF7F', borderRadius:10, padding:16, alignItems:'center',width:'70%',shadowOpacity:0.1}}>
             <Text style={{fontSize:16, fontWeight:'600'}}>Send letter ➤</Text>
         </TouchableOpacity>

        </View>
    )
}
export default Letter;