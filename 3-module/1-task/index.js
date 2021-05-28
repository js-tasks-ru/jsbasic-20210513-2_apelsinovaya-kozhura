function namify(users) {
  // ваш код...
  let names = [];
  for(let user of users){
    names.push(user.name)
  }
  return names
}
