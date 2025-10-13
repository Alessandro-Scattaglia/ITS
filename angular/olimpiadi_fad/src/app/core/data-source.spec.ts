import { TestBed } from '@angular/core/testing';
import { DataSource } from './data-source';

describe('DataSource', () => {
  let service: DataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of athletes', () => {
    const atleti = service.getAtleti();
    expect(atleti.length).toBeGreaterThan(0);
  });

  it('should be able to add a new athlete', () => {
    const before = service.getAtleti().length;
    // @ts-ignore
    service.addAtleta({ id: 0, nome: 'Test', cognome: 'User', specialita: '100m', nazione: 'Italia' });
    const after = service.getAtleti().length;
    expect(after).toBe(before + 1);
  });
});
