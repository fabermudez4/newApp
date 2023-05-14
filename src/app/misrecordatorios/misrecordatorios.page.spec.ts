import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisrecordatoriosPage } from './misrecordatorios.page';

describe('MisrecordatoriosPage', () => {
  let component: MisrecordatoriosPage;
  let fixture: ComponentFixture<MisrecordatoriosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisrecordatoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
