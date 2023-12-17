import {Text, View, StyleSheet, Button} from "react-native";
import {useContext} from "react";
import {MyContext} from "../MyContext";
import KSpacer from "../components/KSpacer";


// const DisplayScreen = ({ route }) => {
//     const { inputText } = route.params;}

function ProfileComponent({text}) {
    return (
        <>
            <View style={{
                width: "90%",
                height: 100,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{fontSize: 16}}>{text}</Text>
            </View>

            <KSpacer/>
        </>
    );
}

function Profile() {
    const {letterMessage, setLetterMessage} = useContext(MyContext);

    const renderDynamicStock = () => {
        return letterMessage.map((item) => {
            return (
                <ProfileComponent
                    key={item.id}
                    data={item}

                    text={item}
                />
            );
        });
    };

    return (
        <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF969'}}>
            <Text style={profileStyles.textProfile}>Your letters</Text>
            <KSpacer h={50}/>
            {/*<Text>Profile Screen</Text>*/}
            {/*<Text>Input Text: {inputText}</Text>*/}
            {renderDynamicStock()}
        </View>
        </>
    );
}

const profileStyles = StyleSheet.create({
    textProfile: {
        fontSize: 22,
    }
});

export default Profile;