import { User } from "../models";
import { getDeviceId } from "../utils/getDeviceUid";
import mime from "mime";

export const api = {
    baseUrl: 'http://158.160.114.193:8000/api',

    getUsers: async (): Promise<User[]> => {
        const response = await fetch(`${api.baseUrl}/get-map/`);
        const data = await response.json();
        return data;
    },

    updateUser: async (user: Partial<User>) => {
        const response = await fetch(`${api.baseUrl}/update-user/`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch((e) => {
            console.log(e);
        });
    },

    loadAllAvatars: async () => {
        const response = await fetch(`${api.baseUrl}/get-avatars/`);
        const data = await response.json();
        return data;
    },

    

    async updateCurrentUserLocation (lat: number, long: number) {
    
        let androidId = await getDeviceId();

        const user = {
            lat,
            long,
            uuid: androidId
        }
        api.updateUser(user);
    },

    getAllTags: async () => {
        const response = await fetch(`${api.baseUrl}/all-tags/`);
        const data = await response.json();
        return data;
    },
    
    updateUserImage: async (userId: string, imageUri: string) => {
        const newImageUri =  "file:///" + imageUri.split("file:/").join("");
        const formData = new FormData();
        formData.append('picture', {
         uri : newImageUri,
         type: mime.getType(newImageUri),
         name: newImageUri.split("/").pop()
        });
        
        formData.append('uuid', userId);

        const response = await fetch(`${api.baseUrl}/update-user/`, {
            method: 'POST',
            body: formData,
        }).catch((e) => {
            console.log(e);
            
        });

        console.log(response)
    },

    updateUserAvatar: async (userId:string, avatar: number) => {
        const response = await fetch(`${api.baseUrl}/update-user/`, {
            method: 'POST',
            body: JSON.stringify({
                uuid: userId,
                avatar
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch((e) => {
            console.log(e);
        });
    },
}