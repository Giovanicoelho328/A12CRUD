import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrrrComponent } from './rrrr.component';

describe('RrrrComponent', () => {
  let component: RrrrComponent;
  let fixture: ComponentFixture<RrrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RrrrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
