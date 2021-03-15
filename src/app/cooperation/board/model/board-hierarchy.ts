export class BoardHierarchy {
    createdDt: Date;
    createdBy: string;
    modifiedDt: Date;
    modifiedBy: string;
    pkBoard: string;
    ppkBoard: string;
    boardName: string;
    boardDescription: string;
    fromDate: Date;
    toDate: Date;
    articleCount: number;
    sequence: number;
    selected: boolean;
    expanded: boolean;
    isLeaf: boolean;
    active: boolean;
    children: BoardHierarchy[];
    title: string;
    key: string;
}
