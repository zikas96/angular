import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  { id: 1, name: 'Brahim' },
  { id: 2, name: 'Zakaria' },
  { id: 3, name: 'NAJI' },
  { id: 4, name: 'Omar' },
  { id: 5, name: 'Hamzaa' },
  { id: 6, name: 'Haytam' }
    ];
    return {heroes};
  }
}