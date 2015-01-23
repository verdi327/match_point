var app = angular.module("app");

app.factory("Friends", function(){
  var friends = {}

  friends.all = function() {
    return [
      {name: "Rafael Nadal", photo: "http://placehold.it/50x50", id: 1},
      {name: "Roger Federer", photo: "http://placehold.it/50x50", id: 2},
      {name: "Maria Sharapova", photo: "http://placehold.it/50x50", id: 3},
      {name: "Joe Flacco", photo: "http://placehold.it/50x50", id: 4},
      {name: "Guy Superlonglastname", photo: "http://placehold.it/50x50", id: 5}
    ]
  },

  friends.get = function(id){
    return _.select(friends.all(), function(friend) {return friend.id === parseInt(id)})[0]
  }

  return friends
})