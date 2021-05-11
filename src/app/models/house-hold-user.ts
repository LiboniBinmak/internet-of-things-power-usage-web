import { Mapper } from './mapper';
import { InputType } from '../enums/input-type.enum';
export let HouseHoldUser = {
    id : new Mapper ({ type:InputType.number.toString(),display:'Id', visible:false,defaultValue:0}), 
    houseHoldId : new Mapper ({type:InputType.select.toString(),display:'House', visible:true, required:true,defaultValue:0}), 
    userId : new Mapper ({type:InputType.select.toString(),display:'User', visible:true, required:true,defaultValue:"",sourceId:"user_id"}), 
 }