import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionAgentPage } from './gestion-agent.page';

describe('GestionAgentPage', () => {
  let component: GestionAgentPage;
  let fixture: ComponentFixture<GestionAgentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAgentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
