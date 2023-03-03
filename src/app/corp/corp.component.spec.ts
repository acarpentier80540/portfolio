import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpComponent } from './corp.component';

describe('CorpComponent', () => {
  let component: CorpComponent;
  let fixture: ComponentFixture<CorpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
