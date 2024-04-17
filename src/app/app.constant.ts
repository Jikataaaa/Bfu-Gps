import { Room } from "./models/Room";

export class AppConstants {
    private static populateRooms() : Room[]{
        let rooms: Room[] = AppConstants.populateSecondFloor();
        rooms = rooms.concat(AppConstants.populateThirdFloor());
        return rooms;
    }
    public static rooms: Room[] = this.populateRooms();
 
    private static populateSecondFloor() {
        let point1: Room = new Room(0.143, 0.772, '203', 2);
        let point2: Room = new Room(0.119, 0.802, '202', 2);
        let point3: Room = new Room(0.108, 0.838, '201', 2);
        let point4: Room = new Room(0.168, 0.820, '', 2);
        let point5: Room = new Room(0.216, 0.859, '224', 2);
        let point6: Room = new Room(0.244, 0.825, '', 2);
        let point7: Room = new Room(0.276, 0.858, '223', 2);
        let point8: Room = new Room(0.407, 0.824, '', 2);
        let point9: Room = new Room(0.407, 0.859, '222', 2);
        let point10: Room = new Room(0.541, 0.861, '221', 2);
        let point11: Room = new Room(0.535, 0.822, '', 2);
        let point12: Room = new Room(0.662, 0.821, '', 2);
        let point13: Room = new Room(0.662, 0.861, '220', 2);
        let point14: Room = new Room(0.797, 0.948, '219 A', 2);
        let point15: Room = new Room(0.790, 0.906, '', 2);
        let point16: Room = new Room(0.830, 0.902, '219', 2);
        let point17: Room = new Room(0.832, 0.782, '218', 2);
        let point18: Room = new Room(0.786, 0.784, '', 2);
        let point19: Room = new Room(0.792, 0.658, '', 2);
        let point20: Room = new Room(0.833, 0.658, '217', 2);
        let point21: Room = new Room(0.793, 0.529, '', 2);
        let point22: Room = new Room(0.834, 0.525, '216', 2);
        let point23: Room = new Room(0.793, 0.399, '', 2);
        let point24: Room = new Room(0.830, 0.396, '215', 2);
        let point25: Room = new Room(0.830, 0.247, '214', 2);
        let point26: Room = new Room(0.793, 0.250, '', 2);
        let point27: Room = new Room(0.804, 0.130, '213', 2);
        let point28: Room = new Room(0.690, 0.206, '212', 2);
        let point29: Room = new Room(0.719, 0.232, '', 2);
        let point30: Room = new Room(0.616, 0.287, '211', 2);
        let point31: Room = new Room(0.630, 0.328, '', 2);
        let point32: Room = new Room(0.577, 0.312, '210', 2);
        let point33: Room = new Room(0.566, 0.402, '', 2);
        let point34: Room = new Room(0.502, 0.370, '209', 2);
        let point35: Room = new Room(0.502, 0.412, '', 2);
        let point36: Room = new Room(0.417, 0.406, '', 2);
        let point37: Room = new Room(0.417, 0.367, '208', 2);
        let point38: Room = new Room(0.308, 0.497, '207', 2);
        let point39: Room = new Room(0.345, 0.485, '', 2);
        let point40: Room = new Room(0.345, 0.545, '', 2);
        let point41: Room = new Room(0.310, 0.531, '206', 2);
        let point42: Room = new Room(0.292, 0.623, '205', 2);
        let point43: Room = new Room(0.263, 0.655, '204', 2);
        let point44: Room = new Room(0.345, 0.644, '', 2);
        let point45: Room = new Room(0.313, 0.667, '', 2);
        let point46: Room = new Room(0.566, 0.642, '', 2);

        let stairs : Room = new Room(0.747,0.431,'stairs',2);
        let stairs1 : Room = new Room(0.403,0.772,'stairs',2);
        let rooms: Room[] = [];
        rooms.push(point1.addNeighbour(point4));
        rooms.push(point2.addNeighbour(point4));
        rooms.push(point3.addNeighbour(point4));
        rooms.push(point4.addNeighbour(point1).addNeighbour(point2).addNeighbour(point3).addNeighbour(point6).addNeighbour(point45));
        rooms.push(point5.addNeighbour(point6));
        rooms.push(point6.addNeighbour(point4).addNeighbour(point5).addNeighbour(point7).addNeighbour(point8));
        rooms.push(point7.addNeighbour(point6));
        rooms.push(point8.addNeighbour(point6).addNeighbour(point9).addNeighbour(point11).addNeighbour(stairs1));
        rooms.push(point9.addNeighbour(point8));
        rooms.push(point10.addNeighbour(point11));
        rooms.push(point11.addNeighbour(point8).addNeighbour(point10).addNeighbour(point12));
        rooms.push(point12.addNeighbour(point11).addNeighbour(point13).addNeighbour(point18));
        rooms.push(point13.addNeighbour(point12));
        rooms.push(point14.addNeighbour(point15));
        rooms.push(point15.addNeighbour(point14).addNeighbour(point16).addNeighbour(point18));
        rooms.push(point16.addNeighbour(point15));
        rooms.push(point17.addNeighbour(point18));
        rooms.push(point18.addNeighbour(point12).addNeighbour(point15).addNeighbour(point17).addNeighbour(point19));
        rooms.push(point19.addNeighbour(point18).addNeighbour(point20).addNeighbour(point21));
        rooms.push(point20.addNeighbour(point19));
        rooms.push(point21.addNeighbour(point19).addNeighbour(point22).addNeighbour(point23));
        rooms.push(point22.addNeighbour(point21));
        rooms.push(point23.addNeighbour(point21).addNeighbour(point22).addNeighbour(point24).addNeighbour(point33).addNeighbour(stairs));
        rooms.push(point24.addNeighbour(point23));
        rooms.push(point25.addNeighbour(point26));
        rooms.push(point26.addNeighbour(point25).addNeighbour(point27).addNeighbour(point29).addNeighbour(point23));
        rooms.push(point27.addNeighbour(point26).addNeighbour(point29));
        rooms.push(point28.addNeighbour(point29));
        rooms.push(point29.addNeighbour(point26).addNeighbour(point27).addNeighbour(point28).addNeighbour(point31));
        rooms.push(point30.addNeighbour(point31));
        rooms.push(point31.addNeighbour(point29).addNeighbour(point30).addNeighbour(point33).addNeighbour(point32));
        rooms.push(point32.addNeighbour(point31));
        rooms.push(point33.addNeighbour(point23).addNeighbour(point31).addNeighbour(point35).addNeighbour(point46));
        rooms.push(point34.addNeighbour(point35));
        rooms.push(point35.addNeighbour(point33).addNeighbour(point34).addNeighbour(point36).addNeighbour(stairs));
        rooms.push(point36.addNeighbour(point35).addNeighbour(point37).addNeighbour(point39));
        rooms.push(point37.addNeighbour(point36));
        rooms.push(point38.addNeighbour(point39));
        rooms.push(point39.addNeighbour(point36).addNeighbour(point38).addNeighbour(point40));
        rooms.push(point40.addNeighbour(point39).addNeighbour(point41).addNeighbour(point44));
        rooms.push(point41.addNeighbour(point40));
        rooms.push(point42.addNeighbour(point44));
        rooms.push(point43.addNeighbour(point45));
        rooms.push(point44.addNeighbour(point40).addNeighbour(point42).addNeighbour(point45).addNeighbour(point46));
        rooms.push(point45.addNeighbour(point4).addNeighbour(point44).addNeighbour(point44).addNeighbour(stairs1));
        rooms.push(point46.addNeighbour(point33).addNeighbour(point44));

        rooms.push(stairs.addNeighbour(point23).addNeighbour(point33));
        rooms.push(stairs1.addNeighbour(point8).addNeighbour(point45));
        return rooms;
    }

    private static populateThirdFloor() {
        let point1: Room = new Room(0.143, 0.772, '303', 3);
        let point2: Room = new Room(0.119, 0.802, '302', 3);
        let point3: Room = new Room(0.108, 0.838, '301', 3);
        let point4: Room = new Room(0.168, 0.820, '', 3);
        let point5: Room = new Room(0.216, 0.859, '325', 3);
        let point6: Room = new Room(0.244, 0.825, '', 3);
        let point7: Room = new Room(0.276, 0.858, '324', 3);
        let point8: Room = new Room(0.407, 0.824, '', 3);
        let point9: Room = new Room(0.407, 0.859, '323', 3);
        let point10: Room = new Room(0.541, 0.861, '322', 3);
        let point11: Room = new Room(0.535, 0.822, '', 3);
        let point12: Room = new Room(0.662, 0.821, '', 3);
        let point13: Room = new Room(0.662, 0.861, '321', 3);
        let point14: Room = new Room(0.797, 0.948, '320 A', 3);
        let point15: Room = new Room(0.790, 0.906, '', 3);
        let point16: Room = new Room(0.830, 0.902, '320', 3);
        let point17: Room = new Room(0.832, 0.782, '319', 3);
        let point18: Room = new Room(0.786, 0.784, '', 3);
        let point19: Room = new Room(0.792, 0.658, '', 3);
        let point20: Room = new Room(0.833, 0.658, '318', 3);
        let point21: Room = new Room(0.793, 0.529, '', 3);
        let point22: Room = new Room(0.834, 0.525, '317', 3);
        let point23: Room = new Room(0.793, 0.399, '', 3);
        let point24: Room = new Room(0.830, 0.396, '316', 3);
        let point25: Room = new Room(0.830, 0.247, '315', 3);
        let point26: Room = new Room(0.793, 0.250, '', 3);
        let point27: Room = new Room(0.804, 0.130, '314', 3);
        let point28: Room = new Room(0.690, 0.206, '312', 3);
        let point29: Room = new Room(0.719, 0.232, '', 3);
        let point30: Room = new Room(0.616, 0.287, '311', 3);
        let point31: Room = new Room(0.630, 0.328, '', 3);
        let point33: Room = new Room(0.566, 0.402, '', 3);
        let point35: Room = new Room(0.502, 0.412, '', 3);
        let point36: Room = new Room(0.417, 0.406, '', 3);
        let point39: Room = new Room(0.345, 0.485, '', 3);
        let point40: Room = new Room(0.345, 0.545, '', 3);
        let point41: Room = new Room(0.310, 0.531, '305', 3);
        let point43: Room = new Room(0.263, 0.655, '304', 3);
        let point44: Room = new Room(0.345, 0.644, '', 3);
        let point45: Room = new Room(0.313, 0.667, '', 3);
        let point46: Room = new Room(0.566, 0.642, '', 3);
        
        let stairs : Room = new Room(0.747,0.431,'stairs',3);
        let stairs1 : Room = new Room(0.403,0.772,'stairs',3);
        let rooms: Room[] = [];
        rooms.push(point1.addNeighbour(point4));
        rooms.push(point2.addNeighbour(point4));
        rooms.push(point3.addNeighbour(point4));
        rooms.push(point4.addNeighbour(point1).addNeighbour(point2).addNeighbour(point3).addNeighbour(point6).addNeighbour(point45));
        rooms.push(point5.addNeighbour(point6));
        rooms.push(point6.addNeighbour(point4).addNeighbour(point5).addNeighbour(point7).addNeighbour(point8));
        rooms.push(point7.addNeighbour(point6));
        rooms.push(point8.addNeighbour(point6).addNeighbour(point9).addNeighbour(point11).addNeighbour(stairs1));
        rooms.push(point9.addNeighbour(point8));
        rooms.push(point10.addNeighbour(point11));
        rooms.push(point11.addNeighbour(point8).addNeighbour(point10).addNeighbour(point12));
        rooms.push(point12.addNeighbour(point11).addNeighbour(point13).addNeighbour(point18));
        rooms.push(point13.addNeighbour(point12));
        rooms.push(point14.addNeighbour(point15));
        rooms.push(point15.addNeighbour(point14).addNeighbour(point16).addNeighbour(point18));
        rooms.push(point16.addNeighbour(point15));
        rooms.push(point17.addNeighbour(point18));
        rooms.push(point18.addNeighbour(point12).addNeighbour(point15).addNeighbour(point17).addNeighbour(point19));
        rooms.push(point19.addNeighbour(point18).addNeighbour(point20).addNeighbour(point21));
        rooms.push(point20.addNeighbour(point19));
        rooms.push(point21.addNeighbour(point19).addNeighbour(point22).addNeighbour(point23));
        rooms.push(point22.addNeighbour(point21));
        rooms.push(point23.addNeighbour(point21).addNeighbour(point22).addNeighbour(point24).addNeighbour(point33).addNeighbour(stairs));
        rooms.push(point24.addNeighbour(point23));
        rooms.push(point25.addNeighbour(point26));
        rooms.push(point26.addNeighbour(point25).addNeighbour(point27).addNeighbour(point29).addNeighbour(point23));
        rooms.push(point27.addNeighbour(point26).addNeighbour(point29));
        rooms.push(point28.addNeighbour(point29));
        rooms.push(point29.addNeighbour(point26).addNeighbour(point27).addNeighbour(point28).addNeighbour(point31));
        rooms.push(point30.addNeighbour(point31));
        rooms.push(point31.addNeighbour(point29).addNeighbour(point30).addNeighbour(point33));
        rooms.push(point33.addNeighbour(point23).addNeighbour(point31).addNeighbour(point35).addNeighbour(point46).addNeighbour(stairs));
        rooms.push(point35.addNeighbour(point33).addNeighbour(point36));
        rooms.push(point36.addNeighbour(point35).addNeighbour(point39));
        rooms.push(point39.addNeighbour(point36).addNeighbour(point40));
        rooms.push(point40.addNeighbour(point39).addNeighbour(point41).addNeighbour(point44));
        rooms.push(point41.addNeighbour(point40));
        rooms.push(point43.addNeighbour(point45));
        rooms.push(point44.addNeighbour(point40).addNeighbour(point45).addNeighbour(point46));
        rooms.push(point45.addNeighbour(point4).addNeighbour(point44).addNeighbour(point44).addNeighbour(stairs1));
        rooms.push(point46.addNeighbour(point33).addNeighbour(point44));
        

        rooms.push(stairs.addNeighbour(point23).addNeighbour(point33));
        rooms.push(stairs1.addNeighbour(point8).addNeighbour(point45));
        return rooms;
    }
}