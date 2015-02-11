var app = angular.module("app");

app.factory("Ratings", function(){
  var ratings = {}

  ratings.all = function() {
    return [
      "Starting 2.5", "Advanced 2.5",
      "Starting 3.0", "Advanced 3.0",
      "Starting 3.5", "Advanced 3.5",
      "Starting 4.0", "Advanced 4.0",
      "Starting 4.5", "Advanced 4.5",
      "Starting 5.0", "Advanced 5.0",
      "Starting 5.5", "Advanced 5.5",
      "Starting 6.0", "Advanced 6.0"
    ]
  },

  ratings.limit = function(rating){
    var all = ratings.all();
    var total = all.length
    var start = _.indexOf(all, rating)
    return all.splice(start, total)
  }

  return ratings
})