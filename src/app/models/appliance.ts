import { Mapper } from './mapper';
import { InputType } from '../enums/input-type.enum';
export let Appliance = {
    id : new Mapper ({ type:InputType.number.toString(),display:'Id', visible:false,defaultValue:0 }), 
    image : new Mapper ({type:InputType.image.toString(),display:'Image', visible:true, required:true,defaultValue:""}),
    name : new Mapper ({type:InputType.text.toString(),display:'Name', visible:true, required:true,defaultValue:""}),
    houseHoldId : new Mapper ({type:InputType.select.toString(),display:'House', visible:true, required:true,defaultValue:""}),
    description : new Mapper ({type:InputType.text.toString(),display:'Description', visible:true, required:true,defaultValue:"",}),
    powerRating : new Mapper ({type:InputType.number.toString(),display:'Power Rating', visible:true, required:true,defaultValue:0}),
    isBeingConfigured : new Mapper ({type:InputType.checkbox.toString(),display:'Is Being Configured', visible:true, required:true,defaultValue:false}),
    dateCreated : new Mapper ({type:InputType.date.toString(),display:'Date Created', visible:false, required:true,defaultValue:'2020-06-05T08:42:09.626Z'}),
    dateModified : new Mapper ({type:InputType.date.toString(),display:'Date Modified', visible:false, required:true,defaultValue:'2020-06-05T08:42:09.626Z'}),
}