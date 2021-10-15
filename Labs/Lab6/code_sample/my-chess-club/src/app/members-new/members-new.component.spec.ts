import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersNewComponent } from './members-new.component';

describe('MembersNewComponent', () => {
  let component: MembersNewComponent;
  let fixture: ComponentFixture<MembersNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
