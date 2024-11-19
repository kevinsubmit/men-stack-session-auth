const validSession = (req, res, next) => {
  if (req.session.user) {
    next();
  }
  else {
    res.send("User not authenticated")
  }
}

export default validSession
