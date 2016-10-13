


exports.home = function(req, res){
  res.render('home', { title: 'HalloweenH8', subTitle: 'Halloween Draws Nigh'})
};

exports.costumes = function(req, res){
  res.render('costumes', {title: 'HalloweenH8', subTitle: 'Costumes'});
}

exports.signup = function(req, res){
  res.render('signup', {title: 'HalloweenH8', subTitle: 'Signup'});
}

exports.myaccount = function(req, res){
  res.render('myaccount', {title: 'HalloweenH8', subTitle: 'Signup'});
}
