const Model = require('./model')
const jwt = require('jsonwebtoken')
const { user: mongo_user } = Model
const secret = process.env.JWT_SECRET

const getProfileDetails = function (resolve, reject) {
  const { slackUser } = this
  console.log(this)
  if (!slackUser) {
    throw 'user details not provided'
  }
  const { accessToken, id: userid, profile = {} } = slackUser
  const {
    user = {},
    team = {},
    provider,
    id,
    displayName: displayname
  } = profile
  const { email } = user
  const { id: teamid, name, domain } = team
  // update or create (upsert)
  const userModelObject = {
    userid,
    displayname,
    teamid,
    email,
    phone: null,
    profile: {
      id: teamid,
      name,
      domain,
      user
    }
  }
  console.log(mongo_user)
  const UserData = new mongo_user(userModelObject)
  console.log('before write')
  console.log(UserData)
  mongo_user.findOneAndUpdate(
    { userid },
    userModelObject,
    { upsert: true, new: true },
    function (err, doc) {
      if (err) {
        console.log('error while upsert')
        console.log(err)
        reject(err)
      } else {
        console.log('resolved doc')
        console.log(doc)
        delete doc['_id'];
        delete doc['__v'];
        resolve(doc)
      }
    }
  )
}

exports.encodeJWT = function (payload) {
  if (!secret) {
    throw 'no signature'
  }
  return jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      ...payload
    },
    secret
  )
}

exports.validateJWT = function (token) {
  if (!secret) {
    throw 'no signature'
  }
  // jwt.verify(token, function(err, decoded) {
  //     if(err) {
  //         return {
  //             state : false,
  //             error : err.name || ''
  //         }
  //     }
  //     else {
  //         return {
  //             state : true
  //         }
  //     }
  // })
  // Async

  try {
    jwt.verify(token, secret)
    return {
      state: true
    }
  } catch (e) {
    console.log(e)
    return {
      state: false,
      error: e.name || ''
    }
  }
}

exports.getProfile = function (slackUser) {
  return new Promise(getProfileDetails.bind({ slackUser }))
}
