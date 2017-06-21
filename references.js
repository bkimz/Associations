var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
//Post - title, content
var User = require("./models/user");


//Find user
//find all posts for that user

// User.findOne({email:"joe@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

Post.create({
    title: "How to cook the best burger pt. 4",
    content: "FSFWFWEAFEWFSAFASFW"
}, function(err, post){
    if(err){
        console.log(err);
    }else{
    User.findOne({email:"joe@gmail.com"}, function (err, foundUser){
        if(err){
            console.log(err);
        }else{
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            });
        }
    });
}});


// User.create({
//     email: "joe@gmail.com",
//     name: "Joe Jameson"
// });

//post - title, content


// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: "Just kidding. Go to potions class to learn it!"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(user);
//     }
// })

// var newPost = new Post({
//     title: "Demo Post",
//     content: "Hello this is a demo post"
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// })

// User.findOne({name: "Hermione Granger"}, function(err, user){
//     if(err){
//         // console.log(err);
//     }else{
//         user.posts.push({
//             title: "3 Things I really hate",
//             content: "Voldemort. Voldemort. Voldemort."
//         })
//         user.save(function(err, user){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(user);
//             }
//         })
//     }
// });

