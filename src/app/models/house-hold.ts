import { Mapper } from './mapper';
import { InputType } from '../enums/input-type.enum';
export let HouseHold = {
    id : new Mapper ({ type:InputType.number.toString(),display:'Id', visible:false,defaultValue:0}), 
    name : new Mapper ({type:InputType.text.toString(),display:'Name', visible:true, required:true,defaultValue:""}), 
    townId : new Mapper ({type:InputType.select.toString(),display:'Town', visible:true, required:true,defaultValue:0}), 
    dateTime : new Mapper ({type:InputType.time.toString(),display:'Date Created', visible:true, required:true,defaultValue:"2021/05/05"}), 
    address : new Mapper ({type:InputType.textarea.toString(),display:'Address', visible:true, required:true,defaultValue:""}), 
  }