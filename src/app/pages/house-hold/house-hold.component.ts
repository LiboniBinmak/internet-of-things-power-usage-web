import { Component, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ActionType } from 'src/app/enums/action-type.enum';
import { Pages } from 'src/app/enums/pages.enum';
import { PreffixUrl } from 'src/app/enums/preffix-url.enum';
import { Actions } from 'src/app/interfaces/actions';
import { HouseHold } from 'src/app/models/house-hold';
import { ActionProvider } from 'src/app/providers/action-provider';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-house-hold',
  templateUrl: './house-hold.component.html',
  styleUrls: ['./house-hold.component.less']
})
export class HouseHoldComponent implements OnChanges {
  isSpinning = false;
  dataTable: any;  
  data: any;  
  map = HouseHold;
  preffixUrl: any;
  input = HouseHold;
  visible = false;
  title:string;
  actionType:ActionType;
  actions: Actions 
  visiblePreview = false;
  detail:any;
  constructor(private message: NzMessageService, private request: RequestHandlerService) { 
    this.actions = ActionProvider.pageActions(Pages.house)  
    this.isSpinning = true;
    this.preffixUrl = PreffixUrl.House;
    this.request.getAll(this.preffixUrl).subscribe(result => {
      this.request.getAll(PreffixUrl.Town).subscribe(towns => {
        this.dataTable = result;
        this.map.townId.source = towns
        this.isSpinning=false;
      }, error => {
        this.dataTable = [];
        this.message.error(error.error);
        this.isSpinning=false;
      });
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
