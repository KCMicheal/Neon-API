import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 24
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send('Hello');
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(`User with the name ${user.firstName} added to the DB`);
});



export default router;