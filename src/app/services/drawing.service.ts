import { Injectable } from '@angular/core';
import { Room } from '../models/Room';
import { Path } from '../models/Path';

@Injectable({
  providedIn: 'root'
})
export class DrawingService 
{
  constructor() { }
  public width: number = 0;
  public height: number = 0;
  public ctx!: CanvasRenderingContext2D;
  public stroke: string = 'black';
  public strokeWidth: number = 2;

  public drawNavigation(path: Path[], imagePath: string)
  {
    this.drawImage(path, imagePath);
  }

  public drawPaths(path: Path[])
  {
    path.forEach((path) => {
      this.drawPath(path.rooms);
    });
  }

  public drawImage(path: Path[], imagePath: string)
  {
    let image: CanvasImageSource = new Image();
    image.onload = () =>
    {
      console.log('image loaded');
      this.ctx.drawImage(image, 0, 0, this.width, this.height);
      this.drawPaths(path);
    }
    image.src = imagePath;
  }
  private drawPath(path: Room[]) 
  {
    if (path.length < 2) {
      this.drawPoint(path[0]);
      return;
    }

    for (let i = 0; i < path.length - 1; i++) {
      this.drawLine(path[i], path[i + 1]);
    }
  }

  private drawLine(firstPoint: Room, secondPoint: Room) {
    this.ctx.beginPath();
    // draw a circle at the starting point
    this.drawPoint(firstPoint);

    // place the cursor from the point the line should be started 
    this.ctx.moveTo(firstPoint.x * this.width, firstPoint.y * this.height);

    // draw a line from current cursor position to the provided x,y coordinate
    this.ctx.lineTo(secondPoint.x * this.width, secondPoint.y * this.height);

    // draw a circle at the ending point
    this.drawPoint(secondPoint);

    // set strokecolor
    this.ctx.strokeStyle = this.stroke;

    // set lineWidht 
    this.ctx.lineWidth = this.strokeWidth;

    // add stroke to the line 
    this.ctx.stroke();
  }

  private drawPoint(point: Room) {
    this.ctx.arc(point.x * this.width, point.y * this.height, this.strokeWidth, 0, 2 * Math.PI, false);
    this.ctx.fill();
  }
}