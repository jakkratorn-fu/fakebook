import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPostComponent } from './own-post.component';

describe('OwnPostComponent', () => {
  let component: OwnPostComponent;
  let fixture: ComponentFixture<OwnPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
