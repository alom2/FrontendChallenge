import { Team } from './Team';

describe('Team test', () => {
  it('should have all properties', () => {
    const team = new Team('A', 'SKT T1');
    expect(team.id).toBe('A');
    expect(team.name).toBe('SKT T1');
    expect(team.isActive).toBe(true);
  })
  it('should change team name', () => {
    const team = new Team('A', 'SKT T1');
    team.setName('Cloud9')
    expect(team.name).toBe('Cloud9');
  })
})