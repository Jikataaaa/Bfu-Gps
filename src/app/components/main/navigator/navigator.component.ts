import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from '../../../models/Room';
import { AppConstants } from '../../../app.constant';
import { DrawingService } from '../../../services/drawing.service';
import { PathFindingService } from '../../../services/pathFinding.service';
import { Path } from '../../../models/Path';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})
export class NavigatorComponent implements AfterViewInit{
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  public form!: FormGroup;
  public filteredRoomsFrom: Room[] = [];
  public filteredRoomsTo: Room[] = [];
  public currentSlide: number = 0;
  public images: string[] = [];

  constructor(
    public drawingService: DrawingService, 
    public pathFindingService: PathFindingService
  ) {
    this.buildForm();
  }

  ngAfterViewInit(): void {
    this.drawingService.canvas = this.canvas.nativeElement;
    this.drawingService.width = this.canvas.nativeElement.width;
    this.drawingService.height = this.canvas.nativeElement.height;   
  }

  private buildForm(): void {
    this.form = new FormGroup({
      PointFromControl: new FormControl(undefined, Validators.required),
      PointToControl: new FormControl(undefined, Validators.required)
    });

    this.filteredRoomsFrom = AppConstants.rooms.filter(option => option.displayName != '');
    this.filteredRoomsTo = AppConstants.rooms.filter(option => option.displayName != '');

    this.form.get('PointFromControl')!.valueChanges.subscribe({
      next: (value : string) => {
        this.filteredRoomsFrom = this.filter(value);
      }
    })

    this.form.get('PointToControl')!.valueChanges.subscribe({
      next: (value : string) => {
        this.filteredRoomsTo = this.filter(value);
      }
    })
    
  }
  private filter(value: Room | string): Room[] {
    if (typeof value === 'string') {
      return AppConstants.rooms
        .filter(option => option.displayName != '')
        .filter(option => option.displayName.toLowerCase().includes(value.toLowerCase()));
    }
    return AppConstants.rooms
      .filter(option => option.displayName != '')
      .filter(option => option.displayName.toLowerCase().includes(value.displayName.toLowerCase()));
  }
  public getRoomName(room: Room): string {
    return room && room.displayName ? room.displayName : '';
  }
  public submit(): void {
    this.clear();
    let roomFrom: Room = this.form.get('PointFromControl')!.value;
    let roomTo: Room = this.form.get('PointToControl')!.value;
    let paths: Path[] = this.pathFindingService.calculateShortestPath(roomFrom, roomTo);
    this.drawingService.drawNavigation(paths).then(images => {
      this.images = images;
    }).catch(error => {
      console.error('Failed to draw navigation:', error);
    }); 
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  previous() {
    this.currentSlide = (this.currentSlide + this.images.length - 1) % this.images.length;
  }

  public clear(): void {
    this.images = [];
    this.drawingService.canvas.getContext('2d')!.clearRect(0, 0, this.drawingService.width, this.drawingService.height);
  }
}
