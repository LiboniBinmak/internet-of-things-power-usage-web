import { BaseUrl } from './base-url.enum';
import { StorageKey } from './storage-key.enum';

export let PreffixUrl = {
    Status: { variable: 'api/Status', key: BaseUrl.Main } ,  
    Town: { variable: 'api/Town', key: BaseUrl.Main } ,  
    House: { variable: 'api/HouseHold', key: BaseUrl.Main } ,  
    HouseUser: { variable: 'api/HouseHoldUser', key: BaseUrl.Main } ,  
    HouseUserByUserId: { variable: 'api/HouseHoldUser/user/'+localStorage.getItem(StorageKey.UserId), key: BaseUrl.Main } ,  
    Appliance: { variable: 'api/Appliance', key: BaseUrl.Main } ,  
    ApplianceActivateisBeingConfigured: { variable: 'api/Appliance/ActivateisBeingConfigured', key: BaseUrl.Main } ,  
    ApplianceHouseId: { variable: 'api/Appliance/household/'+localStorage.getItem(StorageKey.HouseHoldId), key: BaseUrl.Main } ,  
    AppliancePattern: { variable: 'api/AppliancePattern', key: BaseUrl.Main } ,  
    AppliancePatternApplianceId: { variable: 'api/AppliancePattern/Appliance', key: BaseUrl.Main } ,  
    AppliancePatternHouseId: { variable: 'api/AppliancePattern/household/'+localStorage.getItem(StorageKey.HouseHoldId), key: BaseUrl.Main } ,  
    ApplianceSensorReading: { variable: 'api/ApplianceSensorReading', key: BaseUrl.Main } ,  
    ApplianceSensorReadingHouseId: { variable: 'api/ApplianceSensorReading/household/'+localStorage.getItem(StorageKey.HouseHoldId), key: BaseUrl.Main } ,  
    SensorReading: { variable: 'api/SensorReading', key: BaseUrl.Main },
    SensorReadingPower: { variable: 'api/SensorReading/power', key: BaseUrl.Main },
    Roles: { variable: 'users', key: BaseUrl.Auth },
};