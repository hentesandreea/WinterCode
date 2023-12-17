import {Image, StyleSheet, Text, View} from "react-native";
import MapView, { Marker } from "react-native-maps";
import {FontAwesome} from "@expo/vector-icons";

const INITIAL_REGION: {| latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number |} = {
    latitude: 45.760696,
    longitude: 21.226788,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
};

function Map() {

    return(
        <View style={mapStyles.container}>
            <MapView style={mapStyles.map} provider={"google"}
                     region={{
                         latitude: INITIAL_REGION.latitude,
                         longitude: INITIAL_REGION.longitude,
                         latitudeDelta: INITIAL_REGION.latitudeDelta,
                         longitudeDelta: INITIAL_REGION.longitudeDelta,
                     }}
            >
                <Marker  coordinate={{ latitude: INITIAL_REGION.latitude, longitude: INITIAL_REGION.longitude, latitudeDelta: INITIAL_REGION.latitudeDelta, longitudeDelta: INITIAL_REGION.longitudeDelta }}>
                    <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png"}} style={{height: 24, width: 24}}/>
                </Marker>
            </MapView>
        </View>
    )
}

const mapStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    }
});
export default Map;