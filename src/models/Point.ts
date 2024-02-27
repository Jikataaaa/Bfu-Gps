export class Point {
    private x: number;
    private y: number;
    private id: number;

    constructor(id: number, x: number, y: number) {
        this.x = x;
        this.y = y;
        this.id = id;
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
}