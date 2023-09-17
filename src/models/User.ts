import { Tag } from "./Tag";

export interface User {
    nickname: string;
    uuid: string;
    bio: string;
    tags: Tag[];
    lat: number;
    long: number;
    picture: string;
}