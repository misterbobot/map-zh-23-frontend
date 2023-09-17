import React from "react";
import { UserLocation } from "../src/utils/location/Location";
import MapView from "react-native-maps";
import { StyleSheet, View } from 'react-native';
import { mapStyle } from "../src/utils/consts/mapStyle";

const MapPage: React.FC = () => {
    React.useEffect(() => {
        UserLocation.requestPermissions();
    }, []);

    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 47.41197046051491, 
                    longitude: 8.538934162444248,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.0421,
                }}
                showsMyLocationButton={true}
                showsUserLocation={true}
                showsCompass={true}
                minZoomLevel={18}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });

export default MapPage;