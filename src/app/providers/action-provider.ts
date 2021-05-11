import { Pages } from '../enums/pages.enum';
import { Actions } from '../interfaces/actions';

export class ActionProvider {
    static pageActions(pages: Pages):Actions {
        switch (pages) {
            case Pages.status:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: true
                };
            case Pages.monitor:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: true
                };
            case Pages.welcome:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: true
                };
            case Pages.appliance:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: true
                };
            case Pages.workPlace:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: true
                };    
                case Pages.house:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: true
                };    
                case Pages.user:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: true
                };    
                case Pages.town:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: true
                };            
            default:
                return {
                    action: false,
                    add: false,
                    delete: false,
                    edit: false,
                    view: false
                };
        }
    }
}
