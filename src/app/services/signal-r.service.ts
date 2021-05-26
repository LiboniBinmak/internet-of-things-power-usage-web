import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { BaseUrl } from '../enums/base-url.enum';
import { StorageKey } from '../enums/storage-key.enum';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection
  data:any;
  constructor() { }

  public startConection = () =>{
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl(BaseUrl.Main+'notify')
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))

  }
  public addCurrentPowerListener = () => {
    this.hubConnection.on('CurrentPower', (data) => {
      this.data = data;
      localStorage.setItem(StorageKey.CurrentPower,data);
    });
  }
  public addAppliancePatternListener = () => {
    this.hubConnection.on('AppliancePattern', (data) => {
      this.data = data;      
      localStorage.setItem(StorageKey.AppliancePattern,JSON.stringify(data));
    });
  }
  public addAppliancePowerListener = () => {
    this.hubConnection.on('AppliancePower', (data) => {
      this.data = data;
      localStorage.setItem(StorageKey.AppliancePower,JSON.stringify(data));
    });
  }
}
