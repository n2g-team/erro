import { Component, Input } from '@angular/core';

@Component({
    selector: 'sirius-big-number',
    templateUrl: './big-number.component.html',
})
export class BigNumberComponent {
    @Input() title: string;
    @Input() description: string;
}
