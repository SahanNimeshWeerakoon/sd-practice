import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoxesComponent } from './flex-boxes.component';

describe('FlexBoxesComponent', () => {
  let component: FlexBoxesComponent;
  let fixture: ComponentFixture<FlexBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
