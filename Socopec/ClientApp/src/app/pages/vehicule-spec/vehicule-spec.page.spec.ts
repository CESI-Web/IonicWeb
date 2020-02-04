import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiculeSpecPage } from './vehicule-spec.page';

describe('VehiculeSpecPage', () => {
  let component: VehiculeSpecPage;
  let fixture: ComponentFixture<VehiculeSpecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeSpecPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculeSpecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
