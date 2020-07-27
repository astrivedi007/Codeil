module.exports.profile = function(req,res){
    
    return res.render('user_profile',{
        title: "profile"
    });
}

module.exports.profilePicture = function(req,res){
    res.end('<h1>User profile picture</h1>');
}