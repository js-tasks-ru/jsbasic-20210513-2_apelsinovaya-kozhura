function showSalary(users, age) {
  // ваш код...
    result = "";
    users.forEach(function(user) {
      if(user.age <= age) {
        if (result == "") {
          result += `${user.name}, ${user.balance}`;
        } else {
         result += `\n${user.name}, ${user.balance}`;
        };
      }
    });
    return result;

}
