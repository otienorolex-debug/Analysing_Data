const { combineUsers } = require('../index');

describe('combineUsers', () => {
  test('merges usernames from multiple arrays in order', () => {
    expect(
      combineUsers(['tedy@123', 'mwende_jirani'], ['peter@masai254']).users
    ).toEqual(['tedy@123', 'mwende_jirani', 'peter@masai254']);
  });

  test('returns an empty users array when given no arrays', () => {
    expect(combineUsers().users).toEqual([]);
  });

  test('includes today’s date in M/d/yyyy format', () => {
    const result = combineUsers([]);

    expect(result.merge_date).toBe(Date.today().toString('M/d/yyyy'));
  });

  test('returns an object with users and merge_date', () => {
    expect(combineUsers([])).toEqual({
      users: [],
      merge_date: Date.today().toString('M/d/yyyy'),
    });
  });
});
