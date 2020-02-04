import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailVehiculePage } from './detail-vehicule.page';

describe('DetailVehiculePage', () => {
  let component: DetailVehiculePage;
  let fixture: ComponentFixture<DetailVehiculePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVehiculePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailVehiculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
