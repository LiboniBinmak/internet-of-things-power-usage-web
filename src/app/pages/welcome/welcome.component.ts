import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { PreffixUrl } from 'src/app/enums/preffix-url.enum';
import { StorageKey } from 'src/app/enums/storage-key.enum';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import { SignalRService } from 'src/app/services/signal-r.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  isSpinning = false;
  dataTable: any;  
  houses: any;  
  powerTotal: number = 0;
  preffixUrl: any;
  visible = false;
  title:string;
  visiblePreview = false;
  constructor(public signalRService: SignalRService, private request: RequestHandlerService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.signalRService.startConection();
    this.signalRService.addAppliancePatternListener();   
    this.signalRService.addAppliancePowerListener();   
    this.signalRService.addCurrentPowerListener();  
    this.preffixUrl = PreffixUrl.Appliance;
    var tempPreffixUrl;
    if(localStorage.getItem(StorageKey.Role) === "Administrator")
    tempPreffixUrl = PreffixUrl.Appliance;
    else 
    tempPreffixUrl = PreffixUrl.ApplianceHouseId
    this.request.getAll(tempPreffixUrl).subscribe(result => {
      this.request.getAll(PreffixUrl.House).subscribe(houses => {
        this.request.getAll(PreffixUrl.SensorReading).subscribe(houses => {
          this.dataTable = result;
          this.houses = houses;
          this.isSpinning=false;
        }, error => {
          this.dataTable = [];
          this.message.error(error.error);
          this.isSpinning=false;
        });      });
    }); 
    setInterval(function () {
      this.powerTotal = localStorage.getItem(StorageKey.CurrentPower);
      }, 2000);
  }

}
