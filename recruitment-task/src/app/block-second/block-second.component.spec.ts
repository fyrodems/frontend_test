import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSecondComponent } from './block-second.component';

describe('BlockSecondComponent', () => {
  let component: BlockSecondComponent;
  let fixture: ComponentFixture<BlockSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
