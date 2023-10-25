//Variaveis usadas durante o desafio
let nomeDesafiante = "JãoPédeFeijao"
let xp= 500
let i =501
const Hero = "O heroi de nome "
const Hero1= " está no nivel de experiencia igual a "

// usando uma laço de repetição para dobrar a experiencia do heroi
for (i=501; i<=3000; i++){
    xp +=2

}
// usando o de decisão para saber o nivel do heroi baseado no aumento a cima
if (xp<=1000){
console.log ("O heroi de nome " +nomeDesafiante + Hero1 +"ferro")

}else if (xp<= 1001 ||  xp<=2000){
        console.log (Hero +nomeDesafiante + Hero1 +" Bronze")

}else if(xp<= 2001 ||  xp<=5000){
    console.log (Hero +nomeDesafiante +  Hero1 +"Prata")

}else if(xp<= 6001   ||  xp<=7001) {
   
    console.log (Hero +nomeDesafiante + Hero1 +"Ouro")

}else if(xp<= 7001  ||   xp<=8000){
    console.log (Hero +nomeDesafiante + Hero1 +"platina")

}else if(xp<= 8.001  ||   xp<=9000){
    console.log (Hero +nomeDesafiante + Hero1 +"Ascendente")
}else if(xp<= 9001   ||   xp<=10000){

    console.log (Hero + nomeDesafiante + Hero1+"Imortal")
} else {
    xp>=10001
    console.log (Hero +nomeDesafiante + Hero1 +"Radiante");
}
    





