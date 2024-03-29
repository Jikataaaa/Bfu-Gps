import { Injectable } from '@angular/core';
import { Room } from '../models/Room';
import { Path } from '../models/Path';

@Injectable({
    providedIn: 'root'
})
export class PathFindingService 
{
    public calculateShortestPath(startRoom: Room, endRoom : Room) : Path[]{
        let startFloor : number = startRoom.floor;
        let endFloor : number = endRoom.floor;
        let result : Path[] = [];
if(startFloor > endFloor){
            while(startFloor < endFloor){
            let stairs = startRoom.findClosestStairs();
            let path : Path = {
                floor : startFloor,
                rooms : startRoom.calculateShortestPath(stairs)
                }
                result.push(path)
                startFloor--;
            }
        } else if(startFloor < endFloor){
            while(startFloor > endFloor){
                let stairs = startRoom.findClosestStairs();
            let path : Path = {
                floor : startFloor,
                rooms : startRoom.calculateShortestPath(stairs)
                }
            result.push(path)
            startFloor++;
            }
        }else{
            let path: Path = {
                floor: startFloor,
                rooms: startRoom.calculateShortestPath(endRoom),
            };
            result.push(path);
        }
        
        return result;
    }
}
