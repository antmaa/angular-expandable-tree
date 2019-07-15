import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'branch',
  templateUrl: "./branch.component.html",
  styleUrls: ["./branch.component.css"]
})
export class BranchComponent  {
  @Input() unit: any;
  @Input() firstColumn: boolean;
  @Input() firstRow: boolean;
  @Input() index: number;
  @Input() opened: number;
  @Output() giveChildren: EventEmitter<any> = new EventEmitter();
  @Output() giveIndex: EventEmitter<any> = new EventEmitter();

  @Input() expanded = false;


  expand(): void{
  this.expanded = !this.expanded;
  if(this.expanded){
  this.giveChildren.emit(this.unit.children);
  this.giveIndex.emit(this.index);
  }
  else{
    this.giveChildren.emit([]);
    this.giveIndex.emit(null);
  }
  }

}