var app = angular.module("app");

app.factory("Users", function(){
  var users = {}

  users.all = function() {
    return [
      {name: "Rafael Nadal", photo: "http://placehold.it/50x50", id: 1, availability: "Anytime! I love playing tennis", phoneNumber: "123-456-3434", rating: "7.0", record: "20-10", favorited: true},
      {name: "Roger Federer", photo: "http://placehold.it/50x50", id: 2, availability: "Anytime! I love playing tennis", phoneNumber: "123-456-3434", rating: "7.0", record: "34-2", favorited: true},
      {name: "Maria Sharapova", photo: "http://placehold.it/50x50", id: 3, availability: "Anytime! I love playing tennis", phoneNumber: "123-456-3434", rating: "5.5", record: "100-19", favorited: true},
      {name: "Joe Flacco", photo: "http://placehold.it/50x50", id: 4, availability: "Anytime! I love playing tennis", phoneNumber: "123-456-3434", rating: "5.0", record: "212-45", favorited: true},
      {name: "Guy Superlonglastname", photo: "http://placehold.it/50x50", id: 5, availability: "Anytime! I love playing tennis", phoneNumber: "123-456-3434", rating: "5.0", record: "20-1", favorited: true},
      {name: "Michael Verdi", photo: "http://placehold.it/50x50", id: 10, availability: "Weekdays after 5pm, anytime on weekends", phoneNumber: "443-797-3663", rating: "Starting 4.5", record: "6-12", favorited: false }
    ]
  },

  users.get = function(id){
    return _.select(users.all(), function(user) {return user.id === parseInt(id)})[0]
  }

  return users
})