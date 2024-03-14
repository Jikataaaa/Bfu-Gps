
export class Room {
    private x: number;
    private y: number;
    private id: number;
    private floor: number;
    private neighbours : Room[];
    private shortestPath : Room[];
    private displayName: string;

    constructor(id: number, x: number, y: number, displayName: string, floor : number) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.floor = floor;
        this.neighbours = [];
        this.shortestPath = [];
        this.displayName = displayName;
    }

    public getDisplayName() : string {
        return this.displayName;
    }

    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public getId(): number {
        return this.id;
    }
    public setFloor(floor : number) : void {
        this.floor = floor;
    }
    public getFloor() : number{ 
        return this.floor;
    }
    public getNeighbours() : Room[]{
        return this.neighbours;
    }
    public addNeighbour(point : Room) : void {
        this.neighbours.push(point);
    }
    public setShortestPath(path : Room[]) : void{
        this.shortestPath = path;
    }
    public getShortestPath() : Room[] {
        return this.shortestPath;
    }
    public calculateShortestPath(destination : Room) : Room[] {
        let settledPoints : Room[] = [];
        let unsettledPoints : Room[] = this.neighbours;
        this.shortestPath.push(...[]);
        let lastPoint : Room = this;
        let path : Room[] = [];

        while(unsettledPoints.length != 0){
            let currentPoint : Room = unsettledPoints.pop()!;

            if(currentPoint == destination) {
                path = this.evaluateShortestPath(lastPoint);
                break;
            }
            else{

                if(currentPoint && settledPoints.includes(currentPoint)) {
                    continue;

                }else if(currentPoint && !settledPoints.includes(currentPoint)){
                    settledPoints.push(currentPoint);
                    unsettledPoints.push(...currentPoint.getNeighbours());
                    currentPoint.setShortestPath(this.evaluateShortestPath(lastPoint));
                }
            }
            lastPoint = currentPoint;
        }
        return path;
    }
    private evaluateShortestPath(point : Room) : Room[] {
        let path : Room[] = [];
        path = point.getShortestPath();
        path.push(point);
        return path;
    }
}