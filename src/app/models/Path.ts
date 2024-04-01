import { RoomData } from "./RoomData";

export class Path {
    constructor(
        public floor: number,
        public rooms: RoomData[]
    ) {}
}