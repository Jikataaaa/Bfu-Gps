import { Room } from "./Room";

export class Path {
    constructor(
        public floor: number,
        public rooms: Room[]
    ) {}
}