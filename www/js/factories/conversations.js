var app = angular.module("app");

app.factory("Conversations", function(){
  var conversations = {}

  conversations.all = function() {
    return [
      {user: {name: "Rafael Nadal", photo: "http://placehold.it/50x50"}, lastMessage: "1288323623006", id: 1},
      {user: {name: "Roger Federer", photo: "http://placehold.it/50x50"}, lastMessage: "1288323623006", id: 2},
      {user: {name: "Maria Sharapova", photo: "http://placehold.it/50x50"}, lastMessage: "1288323623006", id: 3},
      {user: {name: "Joe Flacco", photo: "http://placehold.it/50x50"}, lastMessage: "1288323623006", id: 4}
    ]
  },

  conversations.get = function(id){
    return _.select(conversations.all(), function(convo) {return convo.id === parseInt(id)})[0]
  }

  return conversations
})