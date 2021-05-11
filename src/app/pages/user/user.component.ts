import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NzMessageService } from 'ng-zorro-antd';
import { ActionType } from 'src/app/enums/action-type.enum';
import { Pages } from 'src/app/enums/pages.enum';
import { PreffixUrl } from 'src/app/enums/preffix-url.enum';
import { Actions } from 'src/app/interfaces/actions';
import { HouseHoldUser } from 'src/app/models/house-hold-user';
import { ActionProvider } from 'src/app/providers/action-provider';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements  OnChanges {
  isSpinning = false;
  dataTable: any;  
  data: any;  
  map = HouseHoldUser;
  preffixUrl: any;
  input = HouseHoldUser;
  visible = false;
  title:string;
  actionType:ActionType;
  actions: Actions 
  visiblePreview = false;
  detail:any;
  constructor(public auth: AuthService,private message: NzMessageService, private request: RequestHandlerService) { 
    this.actions = ActionProvider.pageActions(Pages.user)  
    this.isSpinning = true;
    this.preffixUrl = PreffixUrl.HouseUser;
      this.request.getAll(this.preffixUrl).subscribe(result => {
        this.request.getAll(PreffixUrl.House).subscribe(houses => {
          this.dataTable = result;
          this.isSpinning=false;
          this.map.userId.source = this.auth.user$;
          this.map.houseHoldId.source = houses;
          console.log(this.map.userId.source);
          
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
