import { Room } from "./models/Room";

export class AppConstants {
    public static rooms: Room[] = [
        new Room(1, 0.1, 0.1, 'asdasd', 0),
        new Room(2, 0.2, 0.2, 'qweqwe', 0),
        new Room(3, 0.3, 0.3, 'asdqwe', 0),
        new Room(4, 0.4, 0.4, 'ertert', 0),
        new Room(5, 0.5, 0.5, 'ert', 0),
        new Room(6, 0.6, 0.6, 'dfgdfg', 0),
        new Room(7, 0.7, 0.7, 'ertdfgert', 0),
        new Room(8, 0.8, 0.8, 'asddfgert', 0),
        new Room(9, 0.9, 0.9, 'ertdfgasdwer', 0),
    ];
}