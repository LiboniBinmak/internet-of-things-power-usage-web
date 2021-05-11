import { Component, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ActionType } from 'src/app/enums/action-type.enum';
import { Pages } from 'src/app/enums/pages.enum';
import { PreffixUrl } from 'src/app/enums/preffix-url.enum';
import { StorageKey } from 'src/app/enums/storage-key.enum';
import { Actions } from 'src/app/interfaces/actions';
import { Appliance } from 'src/app/models/appliance';
import { ActionProvider } from 'src/app/providers/action-provider';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.less']
})
export class ApplianceComponent implements OnChanges {
  isSpinning = false;
  dataTable: any;  
  data: any;  
  map = Appliance;
  preffixUrl: any;
  input = Appliance;
  visible = false;
  title:string;
  actionType:ActionType;
  actions: Actions 
  visiblePreview = false;
  detail:any;
  constructor(private message: NzMessageService, private request: RequestHandlerService) { 
    this.actions = ActionProvider.pageActions(Pages.appliance)  
    this.isSpinning = true;
    this.preffixUrl = PreffixUrl.Appliance;
    var tempPreffixUrl;
    if(localStorage.getItem(StorageKey.Role) === "Administrator")
    tempPreffixUrl = PreffixUrl.Appliance;
    else 
    tempPreffixUrl = PreffixUrl.ApplianceHouseId
    this.request.getAll(tempPreffixUrl).subscribe(result => {
      this.request.getAll(PreffixUrl.House).subscribe(houses => {
        this.dataTable = result;
        this.map.houseHoldId.source = houses;
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
      this.input = data.Info;
      this.actionType= data.ActionType;
      this.visible = true;
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
