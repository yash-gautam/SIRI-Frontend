import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverPageNewComponent } from './cover-page-new.component';

describe('CoverPageNewComponent', () => {
  let component: CoverPageNewComponent;
  let fixture: ComponentFixture<CoverPageNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverPageNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
