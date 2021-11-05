const { uuid } = require('uuidv4')

let users = [];

module.exports = {
    createProfile(req, res) {
        const Id = uuid()
        const { name, age, favorite_artist, favorite_work } = req.body;
        const user = {
        id: Id,
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
}
