import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCComponent } from './container-c.component';

describe('ContainerCComponent', () => {
  let component: ContainerCComponent;
  let fixture: ComponentFixture<ContainerCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
