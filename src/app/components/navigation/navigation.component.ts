import { Component } from '@angular/core';
import { first } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {

  private canvas!: HTMLCanvasElement;
  private height:number = 500;
  private width:number = 500;
  private stroke: string = 'black';
  private strokeWidth: number = 2;

  ngOnInit() {
    this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  private drawLine(firstPoint: Point, secondPoint: Point, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    // draw a circle at the starting point
    this.drawPoint(firstPoint, ctx);

    // place the cursor from the point the line should be started 
    ctx.moveTo(firstPoint.getX() * this.width, firstPoint.getY() * this.height);

    // draw a line from current cursor position to the provided x,y coordinate
    ctx.lineTo(secondPoint.getX() * this.width, secondPoint.getY() * this.height);

    // draw a circle at the ending point
    this.drawPoint(secondPoint, ctx);

    // set strokecolor
    ctx.strokeStyle = this.stroke;

    // set lineWidht 
    ctx.lineWidth = this.strokeWidth;

    // add stroke to the line 
    ctx.stroke();
  }

  private drawPoint(point: Point, ctx: CanvasRenderingContext2D) {
    ctx.arc(point.getX() * this.width, point.getY() * this.height, 5, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}
