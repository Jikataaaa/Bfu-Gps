import { Injectable } from '@angular/core';
import { Point } from '../models/Point';

@Injectable({
  providedIn: 'root'
})
export class CanvasDrawingService {

  constructor() { }

  public drawLine(firstPoint: Point, secondPoint: Point, ctx: CanvasRenderingContext2D, width: number, height: number, stroke: string, strokeWidth: number) {
    ctx.beginPath();
    // draw a circle at the starting point
    this.drawPoint(firstPoint, ctx, width, height);

    // place the cursor from the point the line should be started 
    ctx.moveTo(firstPoint.getX() * width, firstPoint.getY() * height);

    // draw a line from current cursor position to the provided x,y coordinate
    ctx.lineTo(secondPoint.getX() * width, secondPoint.getY() * height);

    // draw a circle at the ending point
    this.drawPoint(secondPoint, ctx, width, height);

    // set strokecolor
    ctx.strokeStyle = stroke;

    // set lineWidht 
    ctx.lineWidth = strokeWidth;

    // add stroke to the line 
    ctx.stroke();
  }

  public drawPoint(point: Point, ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.arc(point.getX() * width, point.getY() * height, 5, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}
