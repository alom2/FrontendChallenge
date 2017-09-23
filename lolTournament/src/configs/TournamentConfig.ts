// Teams separated by key (each key can have at maximum 2 teams)
const teams = [
  [
    {
      id: 'A',
      name: '',
    },
    {
      id: 'B',
      name: '',
    },
  ],
  [
    {
      id: 'C',
      name: '',
    },
    {
      id: 'D',
      name: '',
    },
  ]
]
// Winner step
const winner = {
  id: 0,
  keys: [{
    id: 0,
    teams: [],
  }],
};
// Final Step
const final = {
  id: 1,
  keys: [{
    id: 1,
    teams: [],
  }],
};

// SemiFinal step
const semiFinal = {
  id: 2,
  keys: [
    {
      id: 2,
      teams: teams[0],
    },
    {
      id: 3,
      teams: teams[1],
    }
  ],
};

/**
 * Controls the numbers of fases from tournament,
 * the number of keys and the id from each one.
 * 
 * It represents the inital structure from the tournament withou teams
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
