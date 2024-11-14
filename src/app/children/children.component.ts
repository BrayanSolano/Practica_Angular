import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
  @Input() title?: String;

  @Output() titleChange = new EventEmitter<String>();

  emitTitleChange(){
    this.titleChange.emit(this.title)
  }
}
