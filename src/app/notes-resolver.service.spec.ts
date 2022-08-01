import { TestBed } from '@angular/core/testing';

import { NotesResolverService } from './notes-resolver.service';

describe('NotesResolverService', () => {
  let service: NotesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
