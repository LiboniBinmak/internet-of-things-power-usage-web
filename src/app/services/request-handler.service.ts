import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {
  constructor(public http: HttpClient, public configService: ConfigService) { }

  post(formData, preffix): any {    
    return this.http.post(preffix.key + preffix.variable, formData, this.configService.GetOptions());
  }
  postResponseFile(formData, preffix): any {    
    return this.http.post(preffix.key + preffix.variable, formData,  {observe: 'response', responseType: 'blob'});
  }
  postFile(formData, preffix): any {
    return this.http.post(preffix.key + preffix.variable, formData);
  }

  put(id, formData, preffix): any {
    return this.http.put(preffix.key + preffix.variable + '/' + id, formData, this.configService.GetOptions());
  }

  delete(id, preffix): any {
    return this.http.delete(preffix.key + preffix.variable + '/' + id, this.configService.GetOptions());
  }

  get(id, preffix): any {
    return this.http.get(preffix.key + preffix.variable + '/' + id, this.configService.GetOptions());
  }

  getNested(id, preffix): any {
    return this.http.get(preffix.key + preffix.variable + '/' + id + '/nested',
    this.configService.GetOptions());
  }

  getAll(preffix): any {
    return this.http.get(preffix.key + preffix.variable, this.configService.GetOptions());
  }
  getAuth(preffix): any {
    return this.http.get(preffix, this.configService.GetAuthOptions());
  }
}
