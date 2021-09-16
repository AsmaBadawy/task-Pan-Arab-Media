import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofarticlesComponent } from './listofarticles.component';

describe('ListofarticlesComponent', () => {
  let component: ListofarticlesComponent;
  let fixture: ComponentFixture<ListofarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofarticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
