import { WebResource } from './web-resource';

export class Menu {
    createdDt: Date;
    createdBy: string;
    modifiedDt: Date;
    modifiedBy: string;
    menuGroupCode: string;
    menuCode: string;
    menuName: string;
    menuType: string;
    parentMenuCode: string;
    sequence: number;
    level: number;
    resource: WebResource;
}
