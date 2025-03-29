import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsmodalComponent } from './bsmodal.component';

describe('BsmodalComponent', () => {
  let component: BsmodalComponent;
  let fixture: ComponentFixture<BsmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
