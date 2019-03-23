import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMiembrosComponent } from './list-miembros.component';

describe('ListMiembrosComponent', () => {
  let component: ListMiembrosComponent;
  let fixture: ComponentFixture<ListMiembrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMiembrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
