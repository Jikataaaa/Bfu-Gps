import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from '../../../models/Room';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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

  constructor(
    public drawingService: DrawingService, 
    public pathFindingService: PathFindingService
  ) {
    this.buildForm();
  }

  ngAfterViewInit(): void {
    this.drawingService.ctx = this.canvas.nativeElement.getContext('2d')!;
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
    return room.displayName ?? '';
  }
  public submit(): void {
    debugger;
    this.clear();
    let roomFrom: Room = this.form.get('PointFromControl')!.value;
    let roomTo: Room = this.form.get('PointToControl')!.value;
    let paths: Path[] = this.pathFindingService.calculateShortestPath(roomFrom, roomTo);  
    this.drawingService.drawNavigation(paths, 'assets/floor-2.svg');    
  }

  public clear(): void {
    this.drawingService.ctx.clearRect(0, 0, this.drawingService.width, this.drawingService.height);
  }
}
