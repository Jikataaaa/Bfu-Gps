import { RoomData } from "./RoomData";

export class Room {
    constructor(
        public x: number,
        public y: number,
        public displayName: string,
        public floor: number,
        public neighbours: Room[] = [],
        public shortestPath: RoomData[] = []
    ) { }

    public addNeighbour(room: Room): Room {
        this.neighbours.push(room);
        return this;
    }
    public onlyData() : RoomData{
        return new RoomData(this.x, this.y, this.displayName)
    }
   
}