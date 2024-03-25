export class Room {
    constructor(
        public x: number, 
        public y: number, 
        public displayName: string, 
        public floor : number,
        public neighbours : Room[] = [],
        public shortestPath : Room[] = []
    ) {}

    public addNeighbour(room : Room) : Room {
        this.neighbours.push(room);
        return this;
    }
    public findClosestStairs() : Room {
        let settledPoints : Room[] = [];
        let unsettledPoints : Room[] = this.neighbours;
        let currentRoom : Room = this;
        let path : Room[] = [];

        while(unsettledPoints.length != 0){
            currentRoom = unsettledPoints.pop()!;

            if(currentRoom.displayName == 'stairs') {
                break;
            }
            else if(settledPoints.includes(currentRoom)){
                continue;
            }
            else{
                unsettledPoints.push(...currentRoom.neighbours);
            }
        }
        return currentRoom;
    }
    public calculateShortestPath(destination : Room) : Room[] {

        let settledPoints : Room[] = [];
        settledPoints.push(this);
        let unsettledPoints : Room[] = this.neighbours;
        let lastPoint : Room = this;
        let path : Room[] = [];
        while(unsettledPoints.length != 0){
            let currentRoom : Room = unsettledPoints.pop()!;

            if(currentRoom == destination) {
                path = this.evaluateShortestPath(lastPoint);
                break;
            }
            else{

                if(currentRoom && settledPoints.includes(currentRoom)) {
                    continue;

                }else if(currentRoom && !settledPoints.includes(currentRoom)){
                    settledPoints.push(currentRoom);
                    let neighbours : Room[] = currentRoom.neighbours;
                    for (const neighbour of neighbours) {
                        if(!settledPoints.includes(neighbour)) unsettledPoints.push(neighbour);
                    }
                    currentRoom.shortestPath = this.evaluateShortestPath(lastPoint);
                }
            }
            lastPoint = currentRoom;
        }
        return path;
    }
    private evaluateShortestPath(room : Room) : Room[] {
        let path : Room[] = [];
        path = room.shortestPath;
        path.push(room);
        return path;
    }
}