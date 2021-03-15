export class MenuHierarchy {
    createdDt: Date;
    createdBy: string;
    modifiedDt: Date;
    modifiedBy: string;
    key: string;
    title: string;
    menuGroupCode: string;
    menuCode: string;
    menuName: string;
    parentMenuCode: string;
    menuType: string;
    sequence: number;
    level: number;
    url: string;
    selected: boolean;
    expanded: boolean;
    children: MenuHierarchy[];
}
