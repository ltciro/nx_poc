import { async, TestBed } from '@angular/core/testing';
import { KeypadlibModule } from './keypadlib.module';

describe('KeypadlibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [KeypadlibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(KeypadlibModule).toBeDefined();
  });
});
