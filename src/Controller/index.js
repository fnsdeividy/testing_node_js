const { uuid } = require('uuidv4')

let users = [];

module.exports = {
    createProfile(req, res) {
        
        const { name, age, favorite_artist, favorite_work } = req.body;
        const user = {
        id: uuid(),
        name,
        age,
        favorite_artist,
        favorite_work,
        };
    

    users.push({
      ...user
      
    });

    

    return res.json(user);
  },
  showProfile(req, res) {
    const user = users.find((user) => user.id === req.params.id);

    return res.json(user);
  },
}
