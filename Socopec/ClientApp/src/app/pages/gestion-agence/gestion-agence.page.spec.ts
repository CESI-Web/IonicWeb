import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionAgencePage } from './gestion-agence.page';

describe('GestionAgencePage', () => {
  let component: GestionAgencePage;
  let fixture: ComponentFixture<GestionAgencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAgencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionAgencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
