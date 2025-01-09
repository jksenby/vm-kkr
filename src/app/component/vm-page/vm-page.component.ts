import { Component } from '@angular/core';
import { VmListComponent } from '../vm-list/vm-list.component';

import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddServerDialogComponent } from '../add-server-dialog/add-server-dialog.component';
import { FiltersDialogComponent } from '../filters-dialog/filters-dialog.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-vm-page',
  imports: [VmListComponent, TabsModule, ButtonModule, ToastModule],
  templateUrl: './vm-page.component.html',
  styleUrl: './vm-page.component.scss',
  providers: [DialogService, MessageService],
})
export class VmPageComponent {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}
  public openAddServerDialog(value?: any) {
    this.ref = this.dialogService.open(AddServerDialogComponent, {
      header: 'Add Server',
      focusOnShow: false,
      closeOnEscape: true,
      data: value,
      modal: true,
      width: '50vw',
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });
  }

  public openFiltersDialog() {
    this.ref = this.dialogService.open(FiltersDialogComponent, {
      header: 'Filters',
      modal: true,
      width: '30vw',
      focusOnShow: false,
      closeOnEscape: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });
  }
}
