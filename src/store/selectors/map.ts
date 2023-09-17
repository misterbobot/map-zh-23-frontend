import { RootState } from "..";

export const userSelector = (uuid: string) => (state: RootState) => {
    return state.usersList.list?.find(user => user.uuid === uuid)
};