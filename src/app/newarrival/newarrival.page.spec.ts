import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewarrivalPage } from './newarrival.page';

describe('NewarrivalPage', () => {
  let component: NewarrivalPage;
  let fixture: ComponentFixture<NewarrivalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewarrivalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewarrivalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
