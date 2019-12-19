  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  const userSchema = new Schema({
    userid: String,
    displayname: String,
    authsource: String,
    teamid: String,
    email: String,
    phone: String,
    profile: Object,
    provider: String,

  })

  const userModel = mongoose.model('user', userSchema, 'user');
  exports.user = userModel;

  /**
    * profile : {
        
        user: {
            name
            image_24
            image_32
            image_48
            ...
        },
        team : {
            id
            name
            domain
        }
    } 
   */