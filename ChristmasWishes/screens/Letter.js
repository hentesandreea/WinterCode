import {View, Text, TextInput, TouchableOpacity, Image, Button} from "react-native";
import KSpacer from "../components/KSpacer";
import * as Speech from 'expo-speech';
import {useContext, useEffect, useState} from "react";
import {FontAwesome} from "@expo/vector-icons";
import Profile from "./Profile";
import {verde} from '../colors/Colors';
import {MyContext} from "../MyContext";
function Letter() {
    const [date, setDate] = useState(new Date())
    const {locationsList, setLocationsList} = useContext(MyContext);
    const {letterMessage, setLetterMessage} = useContext(MyContext);


    useEffect(() => {
            const intervalDate = setInterval(() => {
                setDate(new Date())
            }, 1000 * 60 * 60 * 24)
        }
    )

    useEffect(() => {
        Speech.getAvailableVoicesAsync().then((response) => {
                console.log(response)
            }
        )
    }, []);


        const [inputText, setInputText] = useState('');

        return (
            <View style={{flex: 1, backgroundColor: '#FFF969', padding: 20, alignItems: 'center'}}>
                <KSpacer h={20}/>
                <View style={{flexDirection: 'row', gap: 4}}>
                    <Text style={{fontWeight: '500', fontSize: 16}}>Today is:</Text>
                    <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>{date.toDateString()}</Text>
                </View>
                <KSpacer h={20}/>
                <View style={{
                    width: '100%',
                    height: "8%",
                    backgroundColor: 'white',
                    alignItems: 'center',
                    padding: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    gap: 6
                }}>
                    <FontAwesome name={"home"} size={18} color={"gray"}/>
                    <TextInput placeholder={"Adress"} multiline={false} style={{fontSize: 15}}>
                    </TextInput>
                </View>
                <KSpacer h={24}/>
                <View style={{width:'100%', height:'60%', backgroundColor:'white',padding:10, borderRadius:10}}>
            <TextInput placeholder={"Start writing your wishes to Santa..."} style={{

                    backgroundColor: 'white',

                    padding: 10
                }} multiline={true} value={inputText} onChangeText={setInputText}/>
            </View>
                <KSpacer h={24}/>
                <TouchableOpacity onPress={() => {
                    Speech.speak("Ho Ho Ho I have received your letter!", {
                        language: "en-US",
                        name: 'Grandpa',
                        voice: "com.apple.eloquence.en-US.Grandpa",
                        rate: 0.6
                    })
                }}
                                  style={{
                                      backgroundColor: '#67FF7F',
                                      borderRadius: 10,
                                      padding: 16,
                                      width: '70%',
                                      flexDirection: 'row',
                                      gap: 12,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      shadowOpacity: 0.1
                                  }}>
                    {/*<Text style={{fontSize:18, fontWeight:'600'}}>Send letter</Text>*/}
                    {/*<KButton title={"Send letter"} btnColor={verde} route={Profile} txtColor={"black"}/>*/}
                    <TouchableOpacity onPress={() => {
                        setLetterMessage(oldLatter =>  [...oldLatter, inputText]);
                        // console.log(inputText)
                        setInputText('')
                    }}
                                      style={{
                                          backgroundColor: verde,
                                          borderRadius: 10,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          padding: 10,
                                          width: "80%"
                                      }}>
                        <Text style={{color: "black", fontSize: 16, fontWeight: 'bold'}}>Send letter</Text>
                    </TouchableOpacity>
                    <FontAwesome name={'envelope'} size={20} color={'#FFF969'}/>
                </TouchableOpacity>
            </View>
        )
}
export default Letter;