'use strict';

app.controller('PostsController', function($scope, Post) {
  $scope.posts = Post.get();
  $scope.post = {title: '', content:'', category:''};

  $scope.submitPost = function() {
    var newPost = new Post($scope.post);
    newPost.$save();
  };

  // $scope.deletePost = function(postId) {
  //   Post.delete({id: postId}, function () {
  //     delete $scope.posts[postId];
  //   });
  // };
});


