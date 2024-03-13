import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Point } from '../../models/Point';
import { CanvasDrawingService } from '../../services/canvas-drawing-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})


export class NavigationComponent implements AfterViewInit{
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | undefined;
  public form!: FormGroup;
  public filteredPointsFrom: Point[] = [];
  public filteredPointsTo: Point[] = [];
  private canvasDrawingServiceService: CanvasDrawingService;

  private stroke: string = 'black';
  private strokeWidth: number = 2;

  private points: Point[] = [
    new Point(1, 0.1, 0.1, 'asdasd'),
    new Point(2, 0.2, 0.2, 'qweqwe'),
    new Point(3, 0.3, 0.3, 'asdqwe'),
    new Point(4, 0.4, 0.4, 'ertert'),
    new Point(5, 0.5, 0.5, 'ert'),
    new Point(6, 0.6, 0.6, 'dfgdfg'),
    new Point(7, 0.7, 0.7, 'ertdfgert'),
    new Point(8, 0.8, 0.8, 'asddfgert'),
    new Point(9, 0.9, 0.9, 'ertdfgasdwer'),
  ];

  constructor(canvasDrawingServiceService: CanvasDrawingService) {
    this.canvasDrawingServiceService = canvasDrawingServiceService;
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      PointFromControl: new FormControl(undefined, Validators.required),
      PointToControl: new FormControl(undefined, Validators.required)
    });

    this.filteredPointsFrom = this.points;
    this.filteredPointsTo = this.points;

    this.form.get('PointFromControl')!.valueChanges.subscribe({
      next: (value) => {
        this.filteredPointsFrom = this.filter(value);
      }
    })

    this.form.get('PointToControl')!.valueChanges.subscribe({
      next: (value) => {
        this.filteredPointsTo = this.filter(value);
      }
    })
  }
  
  private filter(value: Point): Point[] {
    const filterValue = value.getDisplayName().toLowerCase();
    return this.points.filter(option => option.getDisplayName().toLowerCase().includes(filterValue));
  }

  public displayPointName(point: Point): string {
    return point && point.getDisplayName() ? point.getDisplayName() : '';
  }

  public selectionChange(event: MatAutocompleteSelectedEvent): void {
    console.log(event.option.value);
  }

  ngAfterViewInit(): void {
    // this.points[0].addNeighbour(this.points[1]);
    // this.points[0].addNeighbour(this.points[2]);

    // this.points[1].addNeighbour(this.points[0]);
    // this.points[1].addNeighbour(this.points[3]);

    
    // this.points[2].addNeighbour(this.points[0]);
    // this.points[2].addNeighbour(this.points[4]);

    
    // this.points[3].addNeighbour(this.points[1]);
    // this.points[3].addNeighbour(this.points[5]);

    
    // this.points[4].addNeighbour(this.points[2]);
    // this.points[4].addNeighbour(this.points[6]);

    
    // this.points[5].addNeighbour(this.points[3]);
    // this.points[5].addNeighbour(this.points[7]);
    
    // this.points[6].addNeighbour(this.points[4]);
    // this.points[6].addNeighbour(this.points[8]);

    // console.log(this.points[0].calculateShortestPath(this.points[8]));
    
    // const canvas = this.canvas.nativeElement;
    // const ctx = canvas.getContext('2d')!;
    
    // for (let i = 0; i < this.points.length - 1; i++) {
    //   const firstPoint = this.points[i];
    //   const secondPoint = this.points[i + 1];
    //   this.canvasDrawingServiceService.drawLine(
    //     firstPoint, 
    //     secondPoint, 
    //     ctx, 
    //     this.canvas.nativeElement.width, 
    //     this.canvas.nativeElement.height, 
    //     this.stroke, 
    //     this.strokeWidth
    //   );
    // }
  }
}
