const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const User = mongoose.model('User', {name: String});

async function run(){
    let u = new User({name:"Bheem"});
    await u.save();

    let data = await User.find();
    console.log(data);
}

run();
