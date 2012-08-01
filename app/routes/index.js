
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.stock = function(req, res){
    res.render('stock' , {});
};