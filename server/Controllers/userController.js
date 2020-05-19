const users = require('../../users.json')


module.exports ={

    getUsers: (req, res) =>{
        res.status(200).send(users);
    },
    getUser: (req, res) =>{
    const {user_id} = req.params;
    // const user = users.filter(e=> e.id === +user_id);

    if(!+user_id){
        return res.status(404).send('Resource not found.')
    }

    const user = users.find(user => user.id === +user_id)

    if(!user){
        return res.status(404).send('User not found.')
    }

    res.status(200).send(user)
    }
}