import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgridSimpleComponent } from './bgrid-simple.component';

describe('BgridSimpleComponent', () => {
  let component: BgridSimpleComponent;
  let fixture: ComponentFixture<BgridSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgridSimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BgridSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
