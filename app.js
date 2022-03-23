const pronoun = ['de','our'];
const adj = ['great', 'big' ];
const noun = ["jogger", "racoon"];


var domainGenerator = (pronoun, adj, noun) => {
for (var i = 0; i < pronoun.length; i++ ) {
  for (var j = 0; j < adj.length; j++) {
      for (var r = 0; r < noun.length; r++) {
      console.log( pronoun[i] + adj[j] + noun[r] + ".com");
      }
  }
}

};
domainGenerator(pronoun, adj, noun);
