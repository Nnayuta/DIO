const { PostModel } = require('../models/postModel');

const postRoute = (app) => {
    app.route('/posts/:id?')
        .get(async (req, res) => {
            const { id } = req.params;
            const query = {};

            if (id) {
                query._id = id;
            }

            try {

                const posts = await PostModel.find(query);
                res.send({ posts });
            }
            catch (err) {
                res.status(500).send({ error: err.message });
            }
        })
        .post(async (req, res) => {
            try {
                const post = new PostModel(req.body);
                await post.save();

                res.status(201).send('Post created');
            } catch (err) {
                res.status(500).send({ error: err.message });
            }
        })
        .put(async (req, res) => {
            const { id } = req.params;

            if (!id) {
                res.status(500).send({ error: 'Post id is required' });
            }

            try {
                const updatedPost = await PostModel.findByIdAndUpdate(
                    { _id: id },
                    req.body, {
                    new: true
                });

                if (updatedPost) {
                    return res.status(200).send('Post updated');
                }

                res.status(400).send({ error: 'Could not update the post' });

            } catch (err) {
                res.status(500).send({ error: err.message });
            }
        })
        .delete(async (req, res) => {
            const { id } = req.params;

            if (!id) {
                res.status(500).send({ error: 'Post id is required' });
            }

            try {
                const deletedPost = await PostModel.findByIdAndDelete(id);

                if (deletedPost) {
                    return res.status(200).send('Post deleted');
                }

                res.status(400).send({ error: 'Could not delete the post' });

            } catch (err) {
                res.status(500).send({ error: err.message });
            }
        });
}

module.exports = postRoute;