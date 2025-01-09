import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DataView, DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-vm-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule],
  templateUrl: './vm-list.component.html',
  styleUrl: './vm-list.component.scss',
})
export class VmListComponent implements OnInit {
  @Output() public openEditDialog: EventEmitter<any> = new EventEmitter<any>();
  selectedProducts: any[] = [];

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];

  constructor() {}

  ngOnInit() {
    // this.productService.getProducts().then(data => this.products = data);

    this.sourceCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' },
    ];

    this.targetCities = [];

    this.orderCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' },
    ];

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
  }

  onEmitOpenEditDialog(value: any) {
    this.openEditDialog.emit(value);
  }

  virtualMachines: any[] = [
    {
      id: 0,
      name: 'happy.test.apps',
      status: 2,
      publicIp: '95.217.8.219',
      privateIp: '10.1.0.4',
      location: 'Helsinki',
      createdDate: new Date(),
    },
    {
      id: 1,
      name: 'happy.test.db0',
      status: 2,
      publicIp: '95.217.8.219',
      privateIp: '10.1.0.4',
      location: 'Helsinki',
      createdDate: new Date(),
    },
    {
      id: 2,
      name: 'happy.test.debezium',
      status: 2,
      publicIp: '95.217.8.219',
      privateIp: '10.1.0.4',
      location: 'Helsinki',
      createdDate: new Date(),
    },
    {
      id: 3,
      name: 'happy.test.keycloack',
      status: 2,
      publicIp: '95.217.8.219',
      privateIp: '10.1.0.4',
      location: 'Helsinki',
      createdDate: new Date(),
    },
  ];
}
