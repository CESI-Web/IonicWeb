import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionLocationPage } from './gestion-location.page';

describe('GestionLocationPage', () => {
  let component: GestionLocationPage;
  let fixture: ComponentFixture<GestionLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
