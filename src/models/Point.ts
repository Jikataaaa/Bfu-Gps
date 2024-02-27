export class Point {
    private x: number;
    private y: number;
    private id: number;
    private floor: number | undefined; // TODO should be only number
    private neighbours : Point[];
    private shortestPath : Point[];

    constructor(id: number, x: number, y: number, floor? : number) { // TODO
        this.x = x;
        this.y = y;
        this.id = id;
        this.floor = floor;
        this.neighbours = [];
        this.shortestPath = [];
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
    public getFloor() : number | undefined{ // TODO
        return this.floor;
    }
    public getNeighbours() : Point[]{
        return this.neighbours;
    }
    public addNeighbour(point : Point) : void {
        this.neighbours.push(point);
    }
    public setShortestPath(path : Point[]) : void{
        this.shortestPath = path;
    }
    public getShortestPath() : Point[] {
        return this.shortestPath;
    }
    public calculateShortestPath(destination : Point) : Point[] {
        let settledPoints : Point[] = [];
        let unsettledPoints : Point[] = this.neighbours;
        this.shortestPath.push(...[]);
        let lastPoint : Point = this;
        let path : Point[] = [];

        while(unsettledPoints.length != 0){
            let currentPoint : Point = unsettledPoints.pop()!;
            
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
    private evaluateShortestPath(point : Point) : Point[] {
        let path : Point[] = [];
        path = point.getShortestPath();
        path.push(point);
        return path;
    }
}