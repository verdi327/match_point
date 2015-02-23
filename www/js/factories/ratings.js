var app = angular.module("app");

app.factory("Ratings", function(){
  var ratings = {}

  var ntrp = {}
  ntrp["1"] = "This player is just starting to play tennis."
  ntrp["1.5"] = "This player has limited playing experience and is still working primarily on getting the ball into play."
  ntrp["2"] = "This player needs on-court experience. This player has obvious stroke weaknesses but is familiar with basic positions for singles and doubles play."
  ntrp["2.5"] = "This player is learning to judge where the ball is going although court coverage is weak. This player can sustain a slow rally with other players of same ability."
  ntrp["3"] = "This player is consistent when hitting medium pace shots, but is not comfortable with all strokes and lacks control when trying for directional intent, depth, or power."
  ntrp["3.5"] = "This player has achieved improved stroke dependability and direction on moderate pace shots, but still lacks depth and variety. This player exhibits more aggressive net play, has improved court coverage and is developing teamwork in doubles."
  ntrp["4"] = "This player has dependable strokes, including directional intent, on both forehand and backhand sides on moderate shots, plus the ability to use lobs, overheads, approach shots and volleys with some success. This player occasionally forces errors when serving and teamwork in doubles is evident."
  ntrp["4.5"] = "This player has begun to master the use of power and spins and is beginning to handle pace, has sound footwork, can control depth of shots, and is beginning to vary tactics according to opponents. This player can hit first serves with power and accuracy and place the second serve and is able to rush the net successfully."
  ntrp["5"] = "This player has good shot anticipation and frequently has an outstanding shot or attribute around which a game may be structured. This player can regularly hit winners or force errors off of short balls, can put away volleys, can successfully execute lobs, drop shots, half volleys and overhead smashes, and has good depth and spin on most second serves."
  ntrp["5.5"] = "This player has developed power and/or consistency as a major weapon. This player can vary strategies and styles of play in a competitive situation and hits dependable shots in a stress situation."
  ntrp["6"] = "These players will generally not need NRTP rankings. Rankings or past rankings will speak for themselves. The 6.0 player typically has had intensive training for national tournament competition at the junior level and collegiate levels and has obtained a sectional or national ranking."
  ntrp["6.5"] = "The 6.5 player has a reasonable chance of succeeding at the 7.0 level and has extensive satellite tournament experience"
  ntrp["7"] = "The 7.0 is a world class player who is committed to tournament competition on the international level and whose major source of income is tournament prize winnings."

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
  },

  ratings.getNTRP = function(rating){
    return ntrp[rating]
  }

  return ratings
})