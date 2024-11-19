const validSession = (req, res, next) => {
  if (req.session.user) {
    next();
  }
  else {
    res.send("session not found")
  }
}

export default validSession
