import { Injectable } from '@angular/core';
import { Room } from '../models/Room';
import { Path } from '../models/Path';

@Injectable({
  providedIn: 'root'
})
export class PathFindingService {

    constructor(){}

    public calculateShortestPath(startRoom: Room, endRoom : Room) : Path[]{
        let startFloor : number = startRoom.getFloor();
        let endFloor : number = endRoom.getFloor();
        let result : Path[] = [];
        if(startFloor > endFloor){
            while(startFloor < endFloor){
                let stairs = new Room(1, 1, 1, "stairs", 1); //TODO get the correct stairs
                let path : Path = {
                    floor : startFloor,
                    rooms : startRoom.calculateShortestPath(stairs)
                }
                result.push(path)
                startFloor--;
            }
        } else if(startFloor < endFloor){
            while(startFloor > endFloor){
                let stairs = new Room(1, 1, 1, "stairs", 1); //TODO get the correct stairs
                let path : Path = {
                    floor : startFloor,
                    rooms : startRoom.calculateShortestPath(stairs)
                }
                result.push(path)
                startFloor++;
            }
        }else{
            let path: Path = {
                floor : startFloor,
                rooms : startRoom.calculateShortestPath(endRoom)
            }
            result.push(path);
        }
        return result;
    }

}