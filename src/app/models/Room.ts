export class Room {
    constructor(
        public id: number, 
        public x: number, 
        public y: number, 
        public displayName: string, 
        public floor : number,
        public neighbours : Room[] = [],
        public shortestPath : Room[] = []
    ) {}

    public calculateShortestPath(destination : Room) : Room[] {
        let settledPoints : Room[] = [];
        let unsettledPoints : Room[] = this.neighbours;
        this.shortestPath.push(...[]);
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
                    unsettledPoints.push(...currentRoom.neighbours);
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