import {View, Text, TouchableOpacity, Image, TextInput} from "react-native";
import KSpacer from "../components/KSpacer";
import KButton from "../components/KButton";
function Login({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#FFF969',padding:10}}>
            <Image source={{uri:"https://classroomclipart.com/image/static7/preview2/cute-santa-with-gift-cartoon-style-clip-art-59048.jpg"}}
                   style={{borderRadius:100, height:120, width:120}}/>
            <KSpacer h={40}/>
            <Text style={{fontSize:16, fontWeight:'600'}}>Ho Ho Ho! Be ready to write to Santa!✍🏻</Text>
            <KSpacer h={20}/>

            <View style={{backgroundColor:'#FF867F',width:'90%', height:'40%',padding:20,borderRadius:10,alignItems:'center'}}>
                <Text style={{fontSize:13, fontWeight:'600',color:'white'}}>Write your name to enter your account</Text>
                <KSpacer h={20}/>
                <TextInput placeholder={'First name'} style={{borderRadius:10, backgroundColor:'white',padding:10,width:'100%'}}/>
                <KSpacer h={20}/>
                <KButton title={"Log in"}  btnColor={"#FFF969"} txtColor={'#FF867F'} route={"TabNav"}/>
                <KSpacer h ={24}/>
                <View style={{flexDirection:'row', gap:6}}>
                    <Text style={{color:'white', fontWeight:'600',fontSize:14}}>Do not have an account?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                      <Text style={{color:'white', fontSize:14, fontWeight:'700', textDecorationLine:'underline'}}>Register</Text>
                  </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}
export  default Login;