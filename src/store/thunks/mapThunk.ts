import { AppDispatch } from "..";
import { set, setCurrentUserUid, setTags } from "../../features/usersList/usersListSlice"
import { getDeviceId } from "../../utils/getDeviceUid";
import { api } from "../api"

export const updateUsersList = () => {
    return async (dispatch: AppDispatch) => {
        api.getAllTags().then((tags) => {
            dispatch(setTags(tags))
        });
        api.getUsers().then((users) => {
            getDeviceId().then((uuid) => {
                dispatch(setCurrentUserUid(uuid))
            })
            dispatch(set(users))
        });
    }
}