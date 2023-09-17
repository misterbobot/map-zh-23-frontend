import React from "react";
import { User } from "../../models"
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { CustomUserMarker } from "../customUserMarker/customUserMarker";
import { Link, router } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type TMapProps = {
    usersList?: User[];
}

export const Map: React.FC<TMapProps> = React.memo(({ usersList }) => {
    const currentUserId = useSelector((state: RootState) => state.usersList.currentUserUid);
    
    return (
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
            showsCompass={false}
        >
            {
                usersList?.map((user: User, index) => {
                    if (user.uuid === currentUserId || !user.lat || !user.long ) {
                        return null;
                    }
                    return <Marker
                        key={`marker-${index}-${user.uuid}`}
                        coordinate={{latitude: user.lat , longitude: user.long}}
                        onPress={(e) => {
                        router.push('/user/'+usersList[index].uuid)
                    }}>
                       <CustomUserMarker image={user.picture} />
                    </Marker>
                })
            }
            </MapView>
    )
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
