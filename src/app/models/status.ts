import { Mapper } from './mapper';
import { InputType } from '../enums/input-type.enum';
export let Role = {
    id : new Mapper ({ type:InputType.text.toString(),display:'Id', visible:false,defaultValue:''}), 
    name : new Mapper ({type:InputType.text.toString(),display:'Name', visible:true, required:true,defaultValue:""}), 
  }