import { Component, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ActionType } from 'src/app/enums/action-type.enum';
import { Pages } from 'src/app/enums/pages.enum';
import { PreffixUrl } from 'src/app/enums/preffix-url.enum';
import { Actions } from 'src/app/interfaces/actions';
import { ActionProvider } from 'src/app/providers/action-provider';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.less']
})
export class StatusComponent implements OnChanges {
  isSpinning = false;
  dataTable: any;  
  data: any;  
  map = Status;
  preffixUrl: any;
  input = Status;
  visible = false;
  title:string;
  actionType:ActionType;
  actions: Actions 
  visiblePreview = false;
  detail:any;
  constructor(private message: NzMessageService, private request: RequestHandlerService) { 
    this.actions = ActionProvider.pageActions(Pages.status)  
    this.isSpinning = true;
    this.preffixUrl = PreffixUrl.Status;
    this.request.getAll(this.preffixUrl).subscribe(result => {
      this.dataTable = result;
      this.isSpinning=false;
    }, error => {
      this.dataTable = [];
      this.message.error(error.error);
      this.isSpinning=false;
    });
  }

  ngOnChanges (): void {
  }

  tableResult(data){
    if(data.ActionType===ActionType.delete){
      this.dataTable = data.Info;
      this.actionType= ActionType.delete;
    }
    if(data.ActionType===ActionType.edit){
      this.title='Update';
      this.input = data.Info;
      this.actionType=data.ActionType;
      this.visible = true;
    } 
     if (data.ActionType === ActionType.info) {
      this.title='View'; 
      this.detail = data.Info;             
      this.visiblePreview = data.Visible;
      this.actionType= data.ActionType;
      //this.visible = true;
    }  
  }

  open(){
    this.title='Add';
    this.actionType= ActionType.add;
    this.visible = true;
  }

  result(data){
    this.visible = data.success;
    this.dataTable = data.data;     
  }
}
