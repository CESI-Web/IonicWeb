import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionParcPage } from './gestion-parc.page';

describe('GestionParcPage', () => {
  let component: GestionParcPage;
  let fixture: ComponentFixture<GestionParcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionParcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionParcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
