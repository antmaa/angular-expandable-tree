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
  masterUnits = []
  units = [];
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
    2: {id: 2, name: "2", children: []},
    3: {id: 3, name: "3", children: []},
    4: {id: 4, name: "4", children: []},
    5: {id: 5, name: "5", children: []},
    7: {id: 7, name: "7", children: []},
    8: {id: 8, name: "8", children: []},
    9: {id: 9, name: "9", children: []},
    11: {id: 11, name: "11", children: []},
    12: {id: 12, name: "12", children: []}
  }
onGiveChildrenMaster(children){
 this.masterUnits = children.map(child => this.masterMock[child]);
}
onGiveChildrenUnits(children){
 this.units = children.map(child => this.unitMock[child]);
}
onGiveIndexMaster(index){
// Littlebit unclear; to prevent unnecessary opening down the tree
this.masterIndex = index
this.unitIndex =  null;
// Every time you press the plus on the parent there is no need for anything else to be open
this.units = []
if(index == null){
  this.masterIndex =  null;
}
}
onGiveIndexUnits(index){
this.unitIndex = index
if(index == null){
  this.units = []

}
}
}
