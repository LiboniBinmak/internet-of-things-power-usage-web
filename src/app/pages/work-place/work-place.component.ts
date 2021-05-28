import { Component, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ActionType } from 'src/app/enums/action-type.enum';
import { Pages } from 'src/app/enums/pages.enum';
import { PreffixUrl } from 'src/app/enums/preffix-url.enum';
import { StorageKey } from 'src/app/enums/storage-key.enum';
import { Actions } from 'src/app/interfaces/actions';
import { AppliancePattern } from 'src/app/models/appliance-pattern';
import { ActionProvider } from 'src/app/providers/action-provider';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-work-place',
  templateUrl: './work-place.component.html',
  styleUrls: ['./work-place.component.less']
})
export class WorkPlaceComponent implements OnChanges {
  isSpinning = false;
  appliances: any[];
  isVisible = false;

  dataTable: any;  
  data: any;  
  map = AppliancePattern;
  preffixUrl: any;
  input = AppliancePattern;
  visible = false;
  title:string;
  actionType:ActionType;
  actions: Actions 
  visiblePreview = false;
  detail:any;
  constructor(private message: NzMessageService, private request: RequestHandlerService) {
    this.isSpinning = true;
    var tempPreffixUrl;
    if (localStorage.getItem(StorageKey.Role) === "Administrator")
      tempPreffixUrl = PreffixUrl.Appliance;
    else
      tempPreffixUrl = PreffixUrl.ApplianceHouseId;
    this.request.getAll(tempPreffixUrl).subscribe(result => {
        this.appliances = result;
        this.isSpinning = false;
      }, error => {
        this.appliances = [];
        this.message.error(error.error);
        this.isSpinning = false;
    });
  }

  ngOnChanges(): void {
  }

  configure(data){
    console.log(data);
    
    this.request.get(data.id,PreffixUrl.ApplianceActivateisBeingConfigured).subscribe(appliance => {
      const updateItem = this.appliances.find(a=> a.id === data.id);
      const index = this.appliances.indexOf(updateItem);
      this.appliances[index] = appliance;
      this.isSpinning = false;
    }, error => {
      this.appliances = [];
      this.message.error(error.error);
      this.isSpinning = false;
    });
  }

  showPattern(data){
    this.actions = ActionProvider.pageActions(Pages.appliancePattern)  
    this.isSpinning = true;
    this.preffixUrl = PreffixUrl.AppliancePatternApplianceId;
    this.request.get(data.id,PreffixUrl.AppliancePatternApplianceId).subscribe(appliancePattern => {
      this.dataTable = appliancePattern;
      this.isSpinning = false;
      this.isVisible = true;
    }, error => {
      this.appliances = [];
      this.message.error(error.error);
      this.isSpinning = false;
    });
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}