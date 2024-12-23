import { Component } from '@angular/core';
import { VmListComponent } from '../vm-list/vm-list.component';

import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddServerDialogComponent } from '../add-server-dialog/add-server-dialog.component';
import { FiltersDialogComponent } from '../filters-dialog/filters-dialog.component';

@Component({
  selector: 'app-vm-page',
  imports: [VmListComponent, TabsModule, ButtonModule],
  templateUrl: './vm-page.component.html',
  styleUrl: './vm-page.component.scss',
  providers: [DialogService],
})
export class VmPageComponent {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}
  public openAddServerDialog() {
    this.ref = this.dialogService.open(AddServerDialogComponent, {
      header: 'Add Server',
      focusOnShow: false,
      closeOnEscape: true,
    });
  }

  public openFiltersDialog() {
    this.dialogService.open(FiltersDialogComponent, {
      header: 'Filters',
      focusOnShow: false,
      closeOnEscape: true,
    });
  }
}
