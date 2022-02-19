const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'owner_id',
});

Post.belongsTo(User, {
    foreignKey: 'owner_id',
});

module.exports = { User, Post };