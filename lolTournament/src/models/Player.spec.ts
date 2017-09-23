import { Player } from './Player';

describe('Player test', () => {
  it('should have all properties', () => {
    const player = new Player(1, 'Darius');
    expect(player.name).toBe('Darius');
    expect(player.id).toBe(1);
  });
});