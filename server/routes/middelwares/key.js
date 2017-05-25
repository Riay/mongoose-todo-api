 function api_key (req,res,next) {

    const { api_key } = req.query

    if ( api_key === 'SkyCtus' ) {
      next()
    }
    else {
      res.json('You password is not correct!!!')
    }
}

  module.exports = api_key