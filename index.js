require('datejs');

function combineUsers(...args) {
  const combinedObject = { users: [] };

  for (const users of args) {
    combinedObject.users = [...combinedObject.users, ...users];
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');
  return combinedObject;
}

module.exports = { combineUsers };