import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ActionType } from 'src/app/enums/action-type.enum';
import { Actions } from 'src/app/interfaces/actions';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.less']
})
export class SharedTableComponent implements OnChanges {
  @Input() change : boolean;
  headings: any[] = [];
  @Output() result = new EventEmitter<any>();
  @Input() input: any;
  @Input() mapper: any;
  @Input() actions: Actions;
  @Input() url: any;
  selectedRow: number = -1;
  constructor(private message: NzMessageService, private router: Router, private request: RequestHandlerService) {

  }

  ngOnChanges() {    
    for (const key in this.input) {
      if (!this.input.hasOwnProperty(key)) { continue; }
      this.headings = [];
      for (const prop in this.mapper) {
        if (!this.mapper.hasOwnProperty(prop)) { continue; }
        let sourceName = 'name';
        let sourceId = 'id';
        let extraAction = false;
        let nested = false;
        let nestedName = 'name';
        let nestedObjectName = 'name';
        if (this.mapper[prop].sourceName) {
          sourceName = this.mapper[prop].sourceName;
        }
        if (this.mapper[prop].extraAction) {
          extraAction = this.mapper[prop].extraAction;
        }
        if (this.mapper[prop].sourceId) {
          sourceId = this.mapper[prop].sourceId;
        }
        if (this.mapper[prop].nested) {
          nested = true;
        }
        if (this.mapper[prop].nestedName) {
          nestedName = this.mapper[prop].nestedName;
        }
        if (this.mapper[prop].nestedObjectName) {
          nestedObjectName = this.mapper[prop].nestedObjectName;
        }
        this.headings.push({
          value: this.mapper[prop].display,
          key: prop,
          visible: this.mapper[prop].visible,
          type: this.mapper[prop].type,
          source: this.mapper[prop].source,
          sourceName,
          sourceId,
          extraAction,
          nested,
          nestedObjectName,
          nestedName
        });
      }
      break;
    }
  }
  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  deleteRow(id, selectedRow) {
    this.selectedRow = selectedRow;
    this.request.delete(id, this.url).subscribe(result => {
      this.input = this.input.filter(d => d.id !== id);
      this.result.emit({ Info: this.input, ActionType: ActionType.delete });
      this.message.create('success', `Deleted successfully`);
      this.ngOnChanges()
    }, error => {
      this.message.error(error.error);
    });
  }
  
  editRow(data, selectedRow) {
    this.selectedRow = selectedRow;
    this.result.emit({ Info: data, ActionType: ActionType.edit,Visible:false });
  }

  viewRow(data, selectedRow){
    this.selectedRow = selectedRow;
    this.result.emit({ Info: data, ActionType: ActionType.info, Visible:true });
  }
}
