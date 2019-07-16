import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  masterIndex =  null;
  unitIndex = null;
  subUnitIndex = null;
  masterUnits = [];
  units = [];
  subUnits = [];
  areaMock = [
   { name: "TVI testing", children: [1, 6]},
   { name: "Electricity room", children: [10]}
  ]
  masterMock = {
    1: {id: 1, name: "1", children: [2,3,4,5]},
    6: {id: 6, name: "6", children: [7,8,9]},
    10: {id: 10, name: "10", children: [11,12]}
  }

  unitMock = {
    2: {id: 2, name: "2", children: [13,14,15]},
    3: {id: 3, name: "3", children: [16,17,18]},
    4: {id: 4, name: "4", children: []},
    5: {id: 5, name: "5", children: [19,20]},
    7: {id: 7, name: "7", children: []},
    8: {id: 8, name: "8", children: [21,22,23]},
    9: {id: 9, name: "9", children: []},
    11: {id: 11, name: "11", children: []},
    12: {id: 12, name: "12", children: []}
  }
  subMock = {
    13: {id: 13, name: "13", children: []},
    14: {id: 14, name: "14", children: []},
    15: {id: 15, name: "15", children: []},
    16: {id: 16, name: "16", children: []},
    17: {id: 17, name: "17", children: []},
    18: {id: 18, name: "18", children: []},
    19: {id: 19, name: "19", children: []},
    20: {id: 20, name: "20", children: []},
    21: {id: 21, name: "21", children: []},
    22: {id: 22, name: "22", children: []},
    23: {id: 23, name: "23", children: []}
  }
onGiveChildrenMaster(children){
 this.masterUnits = children.map(child => this.masterMock[child]);
}
onGiveChildrenUnits(children){
 this.units = children.map(child => this.unitMock[child]);
}
onGiveChildrenSubUnits(children){
 this.subUnits = children.map(child => this.subMock[child]);
}
//from area to master units
onGiveIndexMaster(index){
// Littlebit unclear; to prevent unnecessary branches opening down the tree
this.masterIndex = index
this.unitIndex =  null;
this.subUnitIndex = null;
// Every time you press the plus on the parent there is no need for anything else to be open
this.units = []
this.subUnits = []
if(index == null){
  this.masterIndex =  null;
}
}
onGiveIndexUnits(index){
this.unitIndex = index
this.subUnitIndex = null;
this.subUnits =[]
if(index == null){
  this.unitIndex =  null;
}
}
onGiveIndexSubUnits(index){
this.subUnitIndex = index;
if(index == null){
  this.subUnitIndex = null;
}
}
}
