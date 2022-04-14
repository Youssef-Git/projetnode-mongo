const {Schema, model} = require('mongoose')


const userSchema = new Schema({
    firstname : {
        type : String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    age : {
        type: Number
    }    
})

const articleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'userSchema'
    }
})


const UserModel = model('user', userSchema);
const ArticleModel = model('article', articleSchema);

module.exports = {
  UserModel,
  ArticleModel
}
