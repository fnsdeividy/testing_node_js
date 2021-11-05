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
  updateProfile(req,res) {
    const user = users.find((user) => user.id === req.params.id);
    
    user.name = req.body.name;
    user.age = req.body.age;
    user.favorite_artist = req.body.favorite_artist,
    user.favorite_work = req.body.favorite_work

    return res.json(user)
  },
}
