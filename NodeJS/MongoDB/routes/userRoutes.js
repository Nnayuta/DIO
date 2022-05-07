const { UsersModel } = require('../models/userModel');

const userRoute = (app) => {
    app.route('/users/:id?')
        .get(async (req, res) => {
            const { id } = req.params;
            const query = {};

            if (id) {
                query._id = id;
            }

            try {

                const users = await UsersModel.find(query);
                res.send({ users });
            }
            catch (err) {
                res.status(500).send({ error: err.message });
            }
        })
        .post(async (req, res) => {
            try {
                const user = new UsersModel(req.body);
                await user.save();

                res.status(201).send('User created');
            } catch (err) {
                if (err.code === 11000) {
                    res.status(500).send({ error: 'User already exists' });
                }
                else {
                    res.status(500).send({ error: err.message });
                }
            }
        })
        .put(async (req, res) => {
            const { id } = req.params;

            if (!id) {
                res.status(500).send({ error: 'User id is required' });
            }

            try {
                const updatedUser = await UsersModel.findByIdAndUpdate(
                    { _id: id },
                    req.body, {
                    new: true
                });

                console.log(updatedUser);

                if (updatedUser) {
                    return res.status(200).send('User updated');
                }

                res.status(400).send({ error: 'Could not update the user' });
            }
            catch (err) {
                res.status(500).send({ error: err.message });
            }
        })
        .delete(async (req, res) => {
            const { id } = req.params;

            if (!id) {
                res.status(500).send({ error: 'User id is required' });
            }


            try {
                const deletedUser = await UsersModel.findByIdAndDelete({ _id: id });

                if (deletedUser) {
                    return res.status(200).send('User deleted');
                }

                res.status(400).send({ error: 'Could not delete the user' });
            }
            catch (err) {
                res.status(500).send({ error: err.message });
            }
        });
}

module.exports = userRoute;