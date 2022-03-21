import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  adj = ['great', 'big' ];
  noun = ["jogger", "racoon"];
  (function(x, y, z){
  let domainName = [];
  for (var i = 0, l = x.length; i < l; i++){
  for (var j = 0, k = 0; j < y.length; j++){
  domainName.push([pronoun[i], adj[j], noun[k]]+'.com');
  if (j == y.length - 1 && k < z.length - 1){
  k++;
  j = -1;
  }
  }
  }
  console.log(domainName.join('\n').replaceAll(',',''));
  })
  (pronoun, adj, noun)
};