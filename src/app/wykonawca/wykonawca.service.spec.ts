import { TestBed } from '@angular/core/testing';

import { WykonawcaService } from './wykonawca.service';

describe('WykonawcaService', () => {
  let service: WykonawcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WykonawcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
