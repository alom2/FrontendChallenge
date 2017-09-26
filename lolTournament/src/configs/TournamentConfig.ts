// Winner step
const winner = {
  id: 0,
  keys: [{
    id: 0,
    nextKey: -1,
    lastTeamId: '',
  }],
};
// Final Step
const final = {
  id: 1,
  keys: [{
    id: 1,
    nextKey: 0,
    lastTeamId: '',
  }],
};

// SemiFinal step
const semiFinal = {
  id: 2,
  keys: [
    {
      id: 2,
      nextKey: 1,
      lastTeamId: '',
    },
    {
      id: 3,
      nextKey: 1,
      lastTeamId: '',
    },
  ],
};

/**
 * Controls the numbers of fases from tournament,
 * the number of keys and the id from each one.
 * 
 * It represents the inital structure from the tournament without teams
 * 
 * Tournament: {
 *  steps: [{
 *      keys: [{
 *          teams?: Team
 *      }],
 *  }],
 * }
 * 
 */
export const steps = [
  winner,
  final,
  semiFinal,
]
export const teamMock = {
  id: '',
  name: '',
  isActive: false,
}
// Teams separated by key (each key can have at maximum 2 teams)
export const teams =[
  {
    id: 'A',
    name: '',
    stepId: 2,
    keyId: 2,
    isActive: true,
  },
  {
    id: 'B',
    name: '',
    stepId: 2,
    keyId: 2,
    isActive: true,
  },
  {
    id: 'C',
    name: '',
    stepId: 2,
    keyId: 3,
    isActive: true,
  },
  {
    id: 'D',
    name: '',
    stepId: 2,
    keyId: 3,
    isActive: true,
  },
]