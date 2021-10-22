import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersViewComponent } from './members-view.component';

describe('MembersViewComponent', () => {
  let component: MembersViewComponent;
  let fixture: ComponentFixture<MembersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
