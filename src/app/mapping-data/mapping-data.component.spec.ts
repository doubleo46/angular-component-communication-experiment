import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingDataComponent } from './mapping-data.component';

describe('MappingDataComponent', () => {
  let component: MappingDataComponent;
  let fixture: ComponentFixture<MappingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
