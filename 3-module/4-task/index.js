function showSalary(users, age) {
  let allUsers = [];
  users.forEach(function (user) {
    if (user.age <= age) {
      allUsers.push(`${user.name}, ${user.balance}`);
    }
  });
  return allUsers.join("\n");
}
