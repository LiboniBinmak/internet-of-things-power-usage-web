import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NzMessageService } from 'ng-zorro-antd';
import { ActionType } from 'src/app/enums/action-type.enum';
import { Pages } from 'src/app/enums/pages.enum';
import { PreffixUrl } from 'src/app/enums/preffix-url.enum';
import { StorageKey } from 'src/app/enums/storage-key.enum';
import { Actions } from 'src/app/interfaces/actions';
import { HouseHoldUser } from 'src/app/models/house-hold-user';
import { ActionProvider } from 'src/app/providers/action-provider';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-house-hold-user',
  templateUrl: './house-hold-user.component.html',
  styleUrls: ['./house-hold-user.component.less']
})
export class HouseHoldUserComponent implements  OnChanges {
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
  create:boolean=true;
  constructor(public auth: AuthService,private message: NzMessageService, private request: RequestHandlerService) { 
    this.actions = ActionProvider.pageActions(Pages.user)  
    this.isSpinning = true;
    this.preffixUrl = PreffixUrl.HouseUser;
    var tempPreffixUrl;
    if(localStorage.getItem(StorageKey.Role) === "Administrator")
    tempPreffixUrl = PreffixUrl.HouseUser;
    else 
    tempPreffixUrl = PreffixUrl.HouseUserByUserId
    this.request.getAll(tempPreffixUrl).subscribe(result => {
      this.request.getAll(PreffixUrl.House).subscribe(houses => {        
        if(localStorage.getItem(StorageKey.Role) === "Administrator")
        this.request.getAuth("https://libs.auth0.com/api/v2/users").subscribe(users => {
          if(result.length>0)
          this.create = false;
          this.dataTable = result;
          this.isSpinning=false;
          this.map.userId.source = users;
          this.map.houseHoldId.source = houses;          
        }, error => {
          this.dataTable = [];
          this.message.error(error.error);
          this.isSpinning=false;
        });
        else
        this.request.getAuth("https://libs.auth0.com/api/v2/users/"+localStorage.getItem(StorageKey.UserId)).subscribe(user => {         
          if(result.length>0)
          this.create = false;
          this.dataTable = result;
          this.isSpinning=false;
          console.log(user);
          
          var users = [];
          users.push(user);
          this.map.userId.source = users;
          this.map.houseHoldId.source = houses;          
        }, error => {
          this.dataTable = [];
          this.message.error(error.error);
          this.isSpinning=false;
        });
 
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

