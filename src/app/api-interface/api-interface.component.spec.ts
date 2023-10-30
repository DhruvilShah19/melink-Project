import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIInterfaceComponent } from './api-interface.component';

describe('APIInterfaceComponent', () => {
  let component: APIInterfaceComponent;
  let fixture: ComponentFixture<APIInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIInterfaceComponent]
    });
    fixture = TestBed.createComponent(APIInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
