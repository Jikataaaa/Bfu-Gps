import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Point } from '../../../models/Point';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})


export class NavigationComponent implements AfterViewInit{
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  public height:number = 500;
  public width:number = 500;
  private stroke: string = 'black';
  private strokeWidth: number = 2;
  private points: Point[] = [
    new Point(1, 0.1, 0.1),
    new Point(2, 0.2, 0.2),
    new Point(3, 0.3, 0.3),
    new Point(4, 0.4, 0.4),
    new Point(5, 0.5, 0.5),
    new Point(6, 0.6, 0.6),
    new Point(7, 0.7, 0.7),
    new Point(8, 0.8, 0.8),
    new Point(9, 0.9, 0.9),
  ];

  ngAfterViewInit(): void {
    this.points[0].addNeighbour(this.points[1]);
    this.points[0].addNeighbour(this.points[2]);

    this.points[1].addNeighbour(this.points[0]);
    this.points[1].addNeighbour(this.points[3]);

    
    this.points[2].addNeighbour(this.points[0]);
    this.points[2].addNeighbour(this.points[4]);

    
    this.points[3].addNeighbour(this.points[1]);
    this.points[3].addNeighbour(this.points[5]);

    
    this.points[4].addNeighbour(this.points[2]);
    this.points[4].addNeighbour(this.points[6]);

    
    this.points[5].addNeighbour(this.points[3]);
    this.points[5].addNeighbour(this.points[7]);
    
    this.points[6].addNeighbour(this.points[4]);
    this.points[6].addNeighbour(this.points[8]);

    console.log(this.points[0].calculateShortestPath(this.points[8]));
    
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d')!;
    
    for (let i = 0; i < this.points.length - 1; i++) {
      const firstPoint = this.points[i];
      const secondPoint = this.points[i + 1];
      this.drawLine(firstPoint, secondPoint, ctx);
    }
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
