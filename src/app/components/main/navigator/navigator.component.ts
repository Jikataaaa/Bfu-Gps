import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from '../../../models/Room';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { AppConstants } from '../../../app.comstamt';
import { DrawingService } from '../../../services/drawing.service';
import { PathFindingService } from '../../../services/pathFinding.service';
import { Path } from '../../../models/Path';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})
export class NavigatorComponent{
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | undefined;

  public form!: FormGroup;
  public filteredRoomsFrom: Room[] = [];
  public filteredRoomsTo: Room[] = [];

  constructor(
    public drawingService: DrawingService, 
    public pathFindingService: PathFindingService
  ) {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      PointFromControl: new FormControl(undefined, Validators.required),
      PointToControl: new FormControl(undefined, Validators.required)
    });

    this.filteredRoomsFrom = AppConstants.rooms;
    this.filteredRoomsTo = AppConstants.rooms;

    this.form.get('PointFromControl')!.valueChanges.subscribe({
      next: (value) => {
        this.filteredRoomsFrom = this.filter(value);
      }
    })

    this.form.get('PointToControl')!.valueChanges.subscribe({
      next: (value) => {
        this.filteredRoomsTo = this.filter(value);
      }
    })
    
  }
  private filter(value: Room | string): Room[] {
    if (typeof value === 'string') {
      return AppConstants.rooms.filter(option => option.displayName.toLowerCase().includes(value.toLowerCase()));
    }
    return AppConstants.rooms.filter(option => option.displayName.toLowerCase().includes(value.displayName.toLowerCase()));
  }
  public getRoomName(room: Room): string {
    return room.displayName ?? '';
  }
  public submit(): void {
    console.log(this.form.value);
    let paths: Path[] = this.pathFindingService.calculateShortestPath(this.form.get('PointFromControl')!.value, this.form.get('PointToControl')!.value);
    //this.drawingService.drawPaths(paths, this.canvas);
  }
}
