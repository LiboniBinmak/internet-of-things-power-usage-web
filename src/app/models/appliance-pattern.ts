import { Mapper } from './mapper';
import { InputType } from '../enums/input-type.enum';
export let AppliancePattern = {
    id : new Mapper ({ type:InputType.number.toString(),display:'Id', visible:false,defaultValue:0 }), 
    applianceId : new Mapper ({type:InputType.select.toString(),display:'Appliance', visible:false, defaultValue:0,}), 
    current : new Mapper ({type:InputType.number.toString(),display:'Current/mA', visible:true, required:true,defaultValue:0}),
    power : new Mapper ({type:InputType.number.toString(),display:'Power/W', visible:true, required:true,defaultValue:0}),
    dateCreated : new Mapper ({type:InputType.date.toString(),display:'Date Created', visible:true, required:true,defaultValue:'2020-06-05T08:42:09.626Z'}),
}