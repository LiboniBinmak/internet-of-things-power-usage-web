import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { PreffixUrl } from './enums/preffix-url.enum';
import { StorageKey } from './enums/storage-key.enum';
import { RequestHandlerService } from './services/request-handler.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  role:boolean =false;
  name:string="";
  constructor(@Inject(DOCUMENT) public document: Document,
    public auth: AuthService, private request: RequestHandlerService
  ) {
    this.auth.user$.subscribe(user => {      
      this.name = user.name;
      localStorage.setItem(StorageKey.Email,user.email);
      localStorage.setItem(StorageKey.Name,user.name);
      localStorage.setItem(StorageKey.UserId,user.sub);
      this.request.getAll(PreffixUrl.HouseUserByUserId).subscribe(house => {
        localStorage.setItem(StorageKey.HouseHoldId,house[0]?.houseHoldId)
      })
      var url = 'https://libs.auth0.com/api/v2/users/'+user.sub+'/roles'
      this.request.getAuth(url).subscribe(data => {
        this.role = data[0].name==="Administrator";
        localStorage.setItem(StorageKey.Role,data[0].name)
      })
    }, error => {

    });

   
  }
  
}
