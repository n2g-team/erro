import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BigNumberComponent } from './big-number.component';

describe('BigNumberComponent', () => {
    let component: BigNumberComponent;
    let fixture: ComponentFixture<BigNumberComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BigNumberComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BigNumberComponent);
        component = fixture.componentInstance;
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    })

    it('should display toDo title', () => {
        // P
        /** Buscamos o element no template através da classe única dele */
        const element = fixture.debugElement.query(By.css('c-big-number_title')).nativeElement;

        // A
        /** Esse é um caso de teste "passivo". Não teremos uma ação aqui. */

        // V
        /** Validamos se o valor interno é o esperado */
        expect(element.textContent).toBe(component.title);
    });

    it('should display toDo message', () => {
        // P
        /** Buscamos o element no template através da classe única dele */
        const element = ngMocks.find('.c-todo-card__message');

        // A
        /** Esse é um caso de teste "passivo". Não teremos uma ação aqui. */

        // V
        /** Validamos se o valor interno é o esperado */
        expect(element.textContent).toBe(component.description);
    });
});
