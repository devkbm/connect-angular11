import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ResponseList } from '../../../common/model/response-list';
import { DeptHierarchy } from '../../model/dept-hierarchy';

import { DeptService } from '../../service/dept.service';

import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-dept-tree',
  templateUrl: './dept-tree.component.html',
  styles: ['']
})
export class DeptTreeComponent implements OnInit {

  @ViewChild('treeComponent', {static: false}) treeComponent: any;

  nodeItems: DeptHierarchy[] = [];

  @Input()
  searchValue = '';

  @Output()
  itemSelected = new EventEmitter();

  constructor(private deptService: DeptService) { }

  ngOnInit(): void {
    console.log('DeptTreeComponent init');
  }

  public getDeptHierarchy(): void {
    this.deptService
        .getDeptHierarchyList()
        .subscribe(
            (model: ResponseList<DeptHierarchy>) => {
                if ( model.total > 0 ) {
                this.nodeItems = model.data;
                } else {
                this.nodeItems = [];
                }
            },
            (err) => {
            console.log(err);
            },
            () => {
            console.log('완료');
            }
        );
  }

  nzClick(event: NzFormatEmitEvent): void {
    const node = event.node?.origin;
    this.itemSelected.emit(node);
  }

}
