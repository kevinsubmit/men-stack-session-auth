const validSession = (req, res, next) => {
  if (req.session.user) {
    next();
  }
  else {
    // res.send("session not found");
    res.redirect("/");
  }
}

export default validSession
