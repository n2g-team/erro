import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemAngularModule } from '@picpay/design-system-angular';
import { BigNumberComponent } from './big-number.component';

@NgModule({
    declarations: [BigNumberComponent],
    imports: [CommonModule, DesignSystemAngularModule],
    exports: [BigNumberComponent],
})
export class BigNumberModule {}
