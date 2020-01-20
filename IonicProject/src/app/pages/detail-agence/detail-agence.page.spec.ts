import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailAgencePage } from './detail-agence.page';

describe('DetailAgencePage', () => {
  let component: DetailAgencePage;
  let fixture: ComponentFixture<DetailAgencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAgencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailAgencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
