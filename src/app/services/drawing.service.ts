import { Injectable } from '@angular/core';
import { Room } from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class DrawingService 
{
  constructor() { }

  public drawLine(firstPoint: Room, secondPoint: Room, ctx: CanvasRenderingContext2D, width: number, height: number, stroke: string, strokeWidth: number) {
    ctx.beginPath();
    // draw a circle at the starting point
    this.drawPoint(firstPoint, ctx, width, height);

    // place the cursor from the point the line should be started 
    ctx.moveTo(firstPoint.x * width, firstPoint.y * height);

    // draw a line from current cursor position to the provided x,y coordinate
    ctx.lineTo(secondPoint.x * width, secondPoint.y * height);

    // draw a circle at the ending point
    this.drawPoint(secondPoint, ctx, width, height);

    // set strokecolor
    ctx.strokeStyle = stroke;

    // set lineWidht 
    ctx.lineWidth = strokeWidth;

    // add stroke to the line 
    ctx.stroke();
  }

  public drawPoint(point: Room, ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.arc(point.x * width, point.y * height, 5, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}