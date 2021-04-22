import { Pages } from '../enums/pages.enum';
import { Actions } from '../interfaces/actions';

export class ActionProvider {
    static pageActions(pages: Pages):Actions {
        switch (pages) {
            case Pages.action:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: false
                };
            case Pages.controller:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: false
                };
            case Pages.truckCondition:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: false
                };
            case Pages.operator:
                return {
                    action: true,
                    add: true,
                    delete: false,
                    edit: true,
                    view: true
                };
            case Pages.permission:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: false
                };
            case Pages.role:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: false
                };
            case Pages.stockpile:
                return {
                    action: true,
                    add: true,
                    delete: false,
                    edit: false,
                    view: true
                };
            case Pages.stockpileLocation:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: true
                };
            case Pages.stockpileMaterial:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: false
                };
            case Pages.truck:
                return {
                    action: true,
                    add: true,
                    delete: true,
                    edit: true,
                    view: false
                };
            case Pages.truckOre:
                return {
                    action: true,
                    add: true,
                    delete: false,
                    edit: false,
                    view: true
                };
            case Pages.truckShift:
                return {
                    action: true,
                    add: true,
                    delete: false,
                    edit: true,
                    view: true
                };
            case Pages.truckShiftType:
                return {
                    action: true,
                    add: false,
                    delete: false,
                    edit: false,
                    view: false
                };
            case Pages.TruckShiftStatus:
                return {
                    action: true,
                    add: true,
                    delete: false,
                    edit: false,
                    view: false
                };
            case Pages.user:
                return {
                    action: true,
                    add: true,
                    delete: false,
                    edit: true,
                    view: false
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
