import { TestBed } from '@angular/core/testing';

import { PokeApiService } from '../app/pages/services/poke-api.service'

describe('PokeApiService', () => {
  let service: PokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
