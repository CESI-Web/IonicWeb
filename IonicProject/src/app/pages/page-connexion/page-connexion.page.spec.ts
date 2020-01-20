import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageConnexionPage } from './page-connexion.page';

describe('PageConnexionPage', () => {
  let component: PageConnexionPage;
  let fixture: ComponentFixture<PageConnexionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConnexionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageConnexionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
