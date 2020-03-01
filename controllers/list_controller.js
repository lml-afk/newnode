const list_model = require('../models/list-model')
const list_views = require('../views/list-views')




//get lists?
const get_lizt = (req,res,next) => {

    const user = req.user;
    user.populate('lists')
        .execPopulate()
        .then(() => {
            console.log('user',user);
            let data = {
                user_name: user.name,
                lists: user.lists
            };
                const list_id =req.body.list_id;
                list_model.findById(list_id)
                let html = list_views.lists_view(data);
                res.send(html);
        
        }); 
};


const get_list = (req, res, next) => {
    const list_id = req.params.id;
    list_model.findOne({
        _id: list_id
    }).then((list) => {
        let data = {
            text: list.text
        };
        let html = list_views.list_view(data);
        res.send(html);
    });
};

const post_list = (req, res, next) => {
    const user = req.user;
    let new_list = list_model({
        text: req.body.list,
        number: req.body.number
    });
    new_list.save().then(() => {
        console.log('list saved');
        user.lists.push(new_list);
        user.save().then(() => {
            return res.redirect('/list/:id');
        });
    });
};



module.exports.post_list = post_list;
module.exports.get_lists = get_lizt;
module.exports.get_list = get_list;



