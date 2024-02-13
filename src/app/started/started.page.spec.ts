import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartedPage } from './started.page';

describe('StartedPage', () => {
  let component: StartedPage;
  let fixture: ComponentFixture<StartedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
