import * as TaskManager from 'expo-task-manager';
import { USER_LOCATION_TASK_NAME } from '../consts/tasks';
import * as Location from 'expo-location';
import { api } from '../../store/api';

export class UserLocation {

    latitude: number | null = null;
    longitude: number | null = null;

    constructor () {
        this.defineTask();
    }

    defineTask () {
        TaskManager.defineTask(USER_LOCATION_TASK_NAME, ({ data, error }) => {
            if (error) {
              console.log(error)
              return;
            }
            if (data) {
              const { locations } = (data as any);

              this.latitude = locations[0].coords.latitude;
              this.longitude = locations[0].coords.longitude;

              if (this.latitude && this.longitude) {
                api.updateCurrentUserLocation(this.latitude, this.longitude);
              }
            }
          });
    }

    startUpdating () {
        Location.startLocationUpdatesAsync(USER_LOCATION_TASK_NAME, {
            accuracy: Location.Accuracy.Highest,
        });
    }

    stopUpdating () {
        Location.stopLocationUpdatesAsync(USER_LOCATION_TASK_NAME);
    }

    async isAvaliable () {
        const isAvailable = await Location.isBackgroundLocationAvailableAsync() && await Location.hasServicesEnabledAsync();
        return isAvailable;
    }

    static async requestPermissions () {
        const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
        if (foregroundStatus === 'granted') {
          const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
          if (backgroundStatus === 'granted') {
            return true;
          }
        }
        return false;
    }
}


export const userLocation = new UserLocation();