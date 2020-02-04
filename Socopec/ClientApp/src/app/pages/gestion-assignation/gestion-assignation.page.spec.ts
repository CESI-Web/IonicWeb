import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionAssignationPage } from './gestion-assignation.page';

describe('GestionAssignationPage', () => {
  let component: GestionAssignationPage;
  let fixture: ComponentFixture<GestionAssignationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAssignationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionAssignationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
