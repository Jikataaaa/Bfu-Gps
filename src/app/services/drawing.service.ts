import { Injectable } from '@angular/core';
import { Room } from '../models/Room';
import { Path } from '../models/Path';
import { RoomData } from '../models/RoomData';

@Injectable({
  providedIn: 'root'
})
export class DrawingService 
{
  public width: number = 0;
  public height: number = 0;
  public canvas!: HTMLCanvasElement;
  public stroke: string = 'black';
  public strokeWidth: number = 2;

  public async drawNavigation(path: Path[]): Promise<string[]> {
    let images: string[] = [];
  
    for (let i = 0; i < path.length; i++) {
      let imagePath: string = `assets/floor-${path[i].floor}.svg`;
      if (i == 1) {
        imagePath = `assets/floor-${path[i].floor + 1}.svg`;
      }
      await this.loadAndDrawImage(path[i], imagePath);
      images.push(this.canvas.toDataURL('image/png'));
      this.canvas.getContext('2d')!.clearRect(0, 0, this.width, this.height);
    }
  
    return images;
  }

  public drawPaths(path: Path[])
  {
    path.forEach((path) => {
      this.drawPath(path.rooms);
    });
  }

  public loadAndDrawImage(path: Path, imagePath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      let image: HTMLImageElement = new Image();
      image.onload = () => {
        this.canvas.getContext('2d')!.drawImage(image, 0, 0, this.width, this.height);
        this.drawPaths([path]);
        resolve();
      };
      image.onerror = reject;
      image.src = imagePath;
    });
  }
  private drawPath(path: RoomData[]) 
  {
    if (path.length < 2) {
      this.drawPoint(path[0]);
      return;
    }

    for (let i = 0; i < path.length - 1; i++) {
      this.drawLine(path[i], path[i + 1]);
    }
  }

  private drawLine(firstPoint: RoomData, secondPoint: RoomData) {
    this.canvas.getContext('2d')!.beginPath();
    // draw a circle at the starting point
    this.drawPoint(firstPoint);

    // place the cursor from the point the line should be started 
    this.canvas.getContext('2d')!.moveTo(firstPoint.x * this.width, firstPoint.y * this.height);

    // draw a line from current cursor position to the provided x,y coordinate
    this.canvas.getContext('2d')!.lineTo(secondPoint.x * this.width, secondPoint.y * this.height);

    // draw a circle at the ending point
    this.drawPoint(secondPoint);

    // set strokecolor
    this.canvas.getContext('2d')!.strokeStyle = this.stroke;

    // set lineWidht 
    this.canvas.getContext('2d')!.lineWidth = this.strokeWidth;

    // add stroke to the line 
    this.canvas.getContext('2d')!.stroke();
  }

  private drawPoint(point: RoomData) {
    this.canvas.getContext('2d')!.arc(point.x * this.width, point.y * this.height, this.strokeWidth, 0, 2 * Math.PI, false);
    this.canvas.getContext('2d')!.fill();
  }
}