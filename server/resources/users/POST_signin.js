const keystone = require('keystone');
const utils = require('keystone-utils');

module.exports = async function({name, password}, _, {req, res}) {
    keystone.truthy({name, password});
    const nameRegex = new RegExp('^' + utils.escapeRegExp(name) + '$', 'i');
    const user = await keystone.request('User', nameRegex, {path: 'name'});
    await keystone.cbToPromise(keystone.callHook.bind(keystone), user, 'pre:signin');
    await keystone.cbToPromise(user._.password.compare, password);
    await keystone.cbToPromiseNoErr(keystone.session.signinWithUser, user, req, res);
    await keystone.cbToPromise(keystone.callHook.bind(keystone), user, 'post:signin');
    return keystone.format(user, {
        _id: undefined,
        canAccessKeystone: undefined,
        posts: user.posts.length,
        favorites: user.favorites.length
    });
};
