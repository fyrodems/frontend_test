import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFirstComponent } from './block-first.component';

describe('BlockFirstComponent', () => {
  let component: BlockFirstComponent;
  let fixture: ComponentFixture<BlockFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
