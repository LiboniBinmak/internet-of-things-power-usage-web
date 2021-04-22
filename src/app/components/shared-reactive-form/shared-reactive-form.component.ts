import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { ActionType } from 'src/app/enums/action-type.enum';
import { InputType } from 'src/app/enums/input-type.enum';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-shared-reactive-form',
  templateUrl: './shared-reactive-form.component.html',
  styleUrls: ['./shared-reactive-form.component.less']
})
export class SharedReactiveFormComponent implements OnChanges {
  formData: any[];
  @Output() result = new EventEmitter<any>();
  @Input() mapper: any;
  @Input() input: any;
  @Input() list: any;
  @Input() url: any;
  @Input() title: string;
  @Input() actionType: ActionType; 
  @Input() visible: boolean;
  isSpinning = false;
  checked = true;
  tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 3;
  loading = false;
  avatarUrl?: string;
  constructor( private request: RequestHandlerService, private message: NzMessageService, public datepipe: DatePipe) {}

  ngOnChanges(): void {
    this.formData = [];
    let value = '';
    let disabled = false;
    for (const prop in this.input) {
      if (!this.input.hasOwnProperty(prop)) {continue; }
      if (this.input[prop] == null) {continue; }
      if (this.mapper[prop].type === null) {continue; }
      const source = this.mapper[prop].source;      
      let sourceName = 'name';
      let sourceId = 'id';
      let visible =this.mapper[prop].visible
      if (this.mapper[prop].sourceName) {
        sourceName = this.mapper[prop].sourceName; }
        if (this.mapper[prop].sourceId) {
          sourceId = this.mapper[prop].sourceId;
        }
      if (this.mapper[prop].type === InputType.image.toString()) {this.avatarUrl = this.input[prop]; }
      if (this.actionType === ActionType.edit) {
        disabled =  this.mapper[prop].disabled;
        value = this.input[prop];
        if (this.input[prop] !== '' && this.mapper[prop].type === InputType.date.toString()) {
          value = this.datepipe.transform(new Date(this.input[prop]), 'yyyy-MM-dd'); }
      } else {
        disabled = this.input[prop].hideOnAdd
        value = this.input[prop].defaultValue;
      }
      this.formData.push({
        visible,
        id: prop,
        value,
        type: this.mapper[prop].type,
        display: this.mapper[prop].display,
        source,
        sourceName,
        sourceId,
        disabled,
        pattern: this.mapper[prop].regex,
        required: this.mapper[prop].required
      });
    }

  }

  close(): void {
    this.visible = false;
    this.result.emit({
      data: this.list,
      actionType: this.actionType,
      success: this.visible
    });
  }
  getId(data){
    let id = data.id;
    if(id === undefined){
       this.formData.forEach(body=>{
         if(body.sourceId === 'id' && body.display === 'Id'){
          id= data[body.id]; 
         }
       });
    }
    return id;
  }

  onSubmit(data) {
    switch (this.actionType) {
      case ActionType.edit:
        this.update(data);
        break;

      case ActionType.add:
        this.create(data);
        break;
    }
  }


  update(data) {
    this.isSpinning = true;
    if(this.avatarUrl)
    data.value.image = this.avatarUrl;
    let id =this.getId(data.value);
    this.request.put(this.input.id, data.value, this.url).subscribe(response => {
      this.isSpinning = false;
      const updateItem = this.list.find(a=> this.getId(a) === id);
      const index = this.list.indexOf(updateItem);
      this.list[index] = response.data;
      this.result.emit({
        data: this.list,
        actionType: this.actionType,
        success: true
      });
      this.message.create('success', response.message);     
    }, error => {
      this.isSpinning = false;
      this.message.error(error.error);     
      this.result.emit({
        data: this.list,
        actionType: this.actionType,
        success: true
      });
    });
  }

  create(data) {
    this.isSpinning = true;
    if(this.avatarUrl)
    data.value.image = this.avatarUrl;
    this.request.post(data.value, this.url).subscribe(response => {
      this.isSpinning = false;
      if(this.list)
      this.list.unshift(response.data);
      else{
        this.list = [];
        this.list.add(response);
      }
      this.result.emit({
        data: this.list,
        actionType: this.actionType,
        success: true
      });
      this.message.create('success', response.message);  
    }, error => {
      this.isSpinning = false;
      this.result.emit({
        data: this.list,
        actionType: this.actionType,
        success: true
      });
      this.message.error(error.error);
    });
  }


  beforeUpload = (file: UploadFile, _fileList: UploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.message.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.message.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.message.error('Network error');
        this.loading = false;
        break;
    }
  }
}
