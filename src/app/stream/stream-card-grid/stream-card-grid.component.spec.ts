import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCardGridComponent } from './stream-card-grid.component';

describe('StreamCardGridComponent', () => {
  let component: StreamCardGridComponent;
  let fixture: ComponentFixture<StreamCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamCardGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
