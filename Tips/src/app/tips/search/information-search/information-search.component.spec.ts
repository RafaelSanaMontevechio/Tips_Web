import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSearchComponent } from './information-search.component';

describe('InformationSearchComponent', () => {
  let component: InformationSearchComponent;
  let fixture: ComponentFixture<InformationSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
