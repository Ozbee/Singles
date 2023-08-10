function Reset(n1,n2){
var a="images/dice"+n1+".png";
var b="images/dice"+n2+".png";
  document.querySelectorAll("img")[0].setAttribute("src",a);
  document.querySelectorAll("img")[1].setAttribute("src",b);

}

function Test( n1, n2){
  if(n1>n2){
  document.querySelector("h1").innerText="Player1 wins";}
  else
   if(n1<n2){
  document.querySelector("h1").innerText="Player2 wins";}
  else
  document.querySelector("h1").innerText="Draw";
}

var randomNumber1=Math.floor((Math.random()*6)+1);
console.log(randomNumber1);

var randomNumber2=Math.floor((Math.random()*6)+1);
console.log(randomNumber2);

Test(randomNumber1,randomNumber2);
//console.log(document.querySelector("h1").innerText);
Reset(randomNumber1,randomNumber2);

function replay(){
  var n=Math.floor((Math.random()*6)+1);
  var n0=Math.floor((Math.random()*6)+1);

  Test(n,n0);
  Reset(n,n0);
}