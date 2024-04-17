import { Injectable } from '@angular/core';
import { Room } from '../models/Room';
import { Path } from '../models/Path';
import { RoomData } from '../models/RoomData';
import { AppConstants } from '../app.constant';

@Injectable({
    providedIn: 'root'
})
export class PathFindingService {
    public calculateShortestPath(startRoom: Room, endRoom: Room): Path[] {
        let result: Path[] = [];
        if(startRoom.displayName === endRoom.displayName){
            let rooms: RoomData[] = [];
            rooms.push(startRoom.onlyData());
            let path: Path = {
                floor: startRoom.floor,
                rooms: rooms
            }
            result.push(path);
            return result;
        }
        let startFloor: number = startRoom.floor;
        let endFloor: number = endRoom.floor;
        let floorDifference = endFloor - startFloor;
        while (startFloor != endFloor) {
            if (startFloor > endFloor) {
                let stairs = this.findClosestStairs(startRoom);
                let path: Path = {
                    floor: startFloor,
                    rooms: this.findShortestPath(startRoom, stairs)
                }
                result.push(path)
                startFloor -= floorDifference  * -1;
                startRoom = this.getUpperStairs(stairs, floorDifference);

            } else if (startFloor < endFloor) {
                    let stairs = this.findClosestStairs(startRoom);
                    
                    let path: Path = {
                        floor: startFloor,
                        rooms: this.findShortestPath(startRoom, stairs)
                    }
                    result.push(path)
                    
                    startFloor += floorDifference;
                    startRoom = this.getUpperStairs(stairs, floorDifference);
                
            } 
        }
        let path: Path = {
            floor: startFloor,
            rooms: this.findShortestPath(startRoom, endRoom),
        };
        
        result.push(path);
        return result;
    }
    private getUpperStairs(stairs : Room, floorDifference: number) : Room{
        let nextStairs = AppConstants.rooms.find(room => room.floor == stairs.floor + floorDifference && room.x == stairs.x && room.y == stairs.y)!
        
        return nextStairs;
        
    }

    private findClosestStairs(start: Room): Room {
        let settledPoints: Room[] = [];
        settledPoints.push(start)
        let unsettledPoints: Room[] =[];
        unsettledPoints.push(...start.neighbours);
        let currentRoom: Room = start;

        while (unsettledPoints.length != 0) {
            currentRoom = unsettledPoints.shift()!;

            if (currentRoom.displayName == 'stairs') {
                break;
            }
            else if (settledPoints.includes(currentRoom)) {
                continue;
            }
            else {
                settledPoints.push(currentRoom);
                let neighbours: Room[] = currentRoom.neighbours;
                for (const neighbour of neighbours) {
                    if (!settledPoints.includes(neighbour)) {
                        unsettledPoints.push(neighbour);
                    }
                }
            }
        }
        return currentRoom;
    }

    private findShortestPath(start: Room, destination: Room): RoomData[] {
        let settledPoints: Room[] = [];
        settledPoints.push(start);
        let unsettledPoints: Room[] =[];
        unsettledPoints.push(...start.neighbours);
        let lastPoint: Room = start;
        let path: RoomData[] = [];
        path.push(start.onlyData());
        start.shortestPath = path;

        while (unsettledPoints.length != 0) {
            let currentRoom: Room = unsettledPoints.shift()!;
            let potentialLastPoint = this.findLastRoom(currentRoom, settledPoints);
            lastPoint = !potentialLastPoint ? lastPoint : potentialLastPoint;
            path = [];

            if (currentRoom == destination) {
                path.push(...lastPoint.shortestPath);
                path.push(currentRoom.onlyData())
                break;
            } else if (currentRoom.displayName == 'stairs') {
                continue;
            }
            else {
                settledPoints.push(currentRoom);
                let neighbours: Room[] = currentRoom.neighbours;
                for (const neighbour of neighbours) {
                    if (!settledPoints.includes(neighbour)) {
                        unsettledPoints.push(neighbour);
                    }
                }
                path.push(...lastPoint.shortestPath);
                path.push(currentRoom.onlyData());
                currentRoom.shortestPath = path;

            }
        }
        return path;
    }

    private findLastRoom(room: Room, settledRooms: Room[]): Room | void {
        let rooms: Room[] = room.neighbours;
        for (const room of rooms) {
            if (settledRooms.includes(room)) {
                return room;
            }
        }
    }
}
