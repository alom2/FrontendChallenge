import { Team } from './Team';

describe('Team test', () => {
  it('should have all properties', () => {
    const brtt = {
      id: 5,
      name: 'BRTT',
    };
    const players = [brtt];
    const team = new Team(1, 'SKT T1');
    expect(team.id).toBe(1);
    expect(team.name).toBe('SKT T1');
    expect(team.isActive).toBe(true);
  })
})