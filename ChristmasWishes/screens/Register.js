import {View, TouchableOpacity, Text, Button, Image, TextInput} from "react-native";
import KSpacer from "../components/KSpacer";
import KButton from "../components/KButton";

function Register({navigation}){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF969',padding:10}}>
            <Image source={{uri:"https://classroomclipart.com/image/static7/preview2/cute-santa-with-gift-cartoon-style-clip-art-59048.jpg"}}
                   style={{borderRadius:100, height:120, width:120}}/>
            <KSpacer h={40}/>
            <Text style={{fontSize:16, fontWeight:'600'}}>Ho Ho Ho! Welcome to Santa's post!📩</Text>
            <KSpacer h={20}/>
            <View style={{backgroundColor:'#FF867F',width:'90%', height:'50%',padding:20,borderRadius:10,alignItems:'center'}}>
                <Text style={{fontSize:13, fontWeight:'600',color:'white'}}>To help Santa get to you complete next</Text>
                <KSpacer h={20}/>
                <TextInput placeholder={"First name"} style={{borderRadius:10, backgroundColor:'white',padding:10,width:'100%'}}/>
                <KSpacer h={20}/>
                <TextInput placeholder={"Last name"} style={{borderRadius:10, backgroundColor:'white',padding:10,width:'100%'}}/>
                <KSpacer h={20}/>
            <KButton title={"Register"} txtColor={"#FF867F"} btnColor={"#FFF969"} route={"TabNav"}/>
            <KSpacer h={24}/>
            <View style={{flexDirection:'row', gap:6}}>
                <Text style={{color:'white', fontWeight:'600',fontSize:14}}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{color:'white', fontSize:14, fontWeight:'700', textDecorationLine:'underline'}}>Log in</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
export default Register;