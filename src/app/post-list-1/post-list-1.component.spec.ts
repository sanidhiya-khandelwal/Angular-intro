import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostList1Component } from './post-list-1.component';

describe('PostList1Component', () => {
  let component: PostList1Component;
  let fixture: ComponentFixture<PostList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostList1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
