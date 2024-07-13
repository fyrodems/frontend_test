import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockThirdComponent } from './block-third.component';

describe('BlockThirdComponent', () => {
  let component: BlockThirdComponent;
  let fixture: ComponentFixture<BlockThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockThirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
