import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingChallengeComponent } from './typing-challenge.component';

describe('TypingChallengeComponent', () => {
  let component: TypingChallengeComponent;
  let fixture: ComponentFixture<TypingChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingChallengeComponent]
    });
    fixture = TestBed.createComponent(TypingChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
