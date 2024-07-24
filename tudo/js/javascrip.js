/* 1 validar numeros positivos, negativos e Zeros */
function numeropositivo() {
     
    var numero = 2/* "d" */

     if (numero==0) {
         alert("O número digitado é Zero")
     }
     else{
        if (numero<0) {
         alert("O número digitado é Negativo")
     }
     else{

        if (numero>0) {
        alert("O numero digitado é positivo")
     }

     else{
     alert("Você inseriu letra ou carate especial, e elas não podem ser inseridas neste campo.")
     }

     }
    }

     

}

/*  numeropositivo( )  */
/* Fim da validação dos números 0 maior e menor */


/* 2-VERIFICAR SE O NUMERO É PAR OU IMPAR */
function parimpar() {
     
    var numeropar =31
    if ((numeropar % 2) == 0) {
        alert("O número inserido é par")
    }

    else{
        alert("O número inseri é impar.")
    }

}





/*  parimpar()  */

/* FIM DA VALIDAÇÃO DOS VALORES PAR E IMPARES */


/* 3-ANO BISSEXTO */
 var dias = null
function anobissexto( dias) {
     
    if (dias==366 ){
        alert("O ano é bissexto porque tem "+ dias+ " dias")
    }
    else{
        if (dias==365) {
            alert("Este ano não é bissexto")
        }
        else{
            if (dias !=365 || dias != 366) {
                alert("Não existe ano com " + dias + " dias")
            }
        }
    }

}
/* anobissexto(367) */ /* FIM ANO BISSEXTO */


/* 4 COMPARAÇÃO DE NUMEROS MAIOR OU MENOR */
function positivosNegativos( ) {
     var primeiro = 5
     var segundo = 2
     if (primeiro>segundo) {
        alert("Dentre o "+ primeiro+" e o "+segundo+", o " +primeiro+ " é o maior número")
     }

            if (segundo>primeiro) {
                alert("Dentre o "+ segundo+" e o "+ primeiro+", \n o "+segundo+" é o maior")
            }
     if (primeiro==segundo) {
         alert("Os dois números são iguais.")
     }
}

/* positivosNegativos() */

/* 5 VOTAR */

function votar() {
    var nome="Piter"
    var idade=16
    if (idade<16) {
        alert("És menor de idade para votar\n Precisas ter no mínimo 16 anos de idade para votar.")
    }
    if (idade>=16) {
        alert(nome+", seja bem vindo/a as urnas para votares.")
    }
}
/* votar() */


/* 6- CALCUO DE IMC */
function imc() {
  var altura = 1.8
  var peso = 100
  var result = peso/(altura*2)
   

     if ( result<18.5) {
         alert("O teu IMC é "+result+", estás abaixo do peso ideal")
     } 
     else{
        if ( result >=18.5 && result<=25) {
            alert("O teu IMC é "+result+", estás dentrodo peso ideal")
        }
        if (result >=26) {
            alert("O teu IMC é "+result+", estás acima do peso ideal")
        }
     }
    
}
/* imc()     *//* FIM IMC */


/* 7- TRIANGULO */

function triangulos() {
     var lado1 =7
     var lado2 =9
     var lado3 =8

     if ( lado1==0 && lado2==0 && lado3==0) {
        alert("este triangulo não existe")  
        exite()  
    } 
  
        if (lado1==0 || lado2==0 || lado3==0) {
              alert("este triangulo não existe")
              exite()
        }
        else{
           
        } 
         if( lado1==lado2 && lado3==lado2 && lado3==lado1){
          alert("Estamos perante a um triângulo Equilátero")
     }
     else{
      if ( lado1==lado2 || lado1==lado3 || lado2==lado3  ) {
             alert("Estamos perante a um triangula é Isosceles")
             exite()
            
      }
      else{ 
        if(lado1!=lado2 && lado1!=lado3 && lado2!=lado3 ){
          alert("Estamos perante a um triangulo é Escaleno")
        }
      }
     }
}

/* triangulos() */ /* Fim triangulo */

/* 8- DESCONTO */

function desconto() {

    var valor=6000
    var desco = (valor*10)/100
    var resul =  valor-desco

    if (valor <=5000) {
         alert("Não tiveste o desconto de 10%")
         
    }
    else{
        alert("A sua conta é de "+ valor+" Kz.\n \n  Tiveste um desconto de "+desco+ "Kz e pagaras " + resul+ " Kz")
    }
    
}
/* desconto() */ /* FIM DESCONTO */

/* 9-Carteira de motorista */

 function motorista() {
    var idade=18

    if(idade<18){
        alert("O factor idade não lhe permite obter a carteira de motorista\n Precisas ser maior de idade")
    }
    else{
        alert("\n Parabéns! Você tem o direito de obter uma carteira de motorista")
    }
 }

 /* motorista() */ /* Fim Carteira */

 /* 10- NUMERO PRIMO */

 function primo(){
    var nu= 4

    if (nu==0) {
        alert(nu+ " não é um número primo")
        exite()
    }
    if ((nu %2 )==0) {
        alert(nu+ " Não é um numero primo")
        exite()
    }
    else{
        alert(nu+ " é um número primo")
    }
    
 }
 /* primo() */ /* FIM PRIMO */

 /* 11- MAIOR ENTRE OS TRES */

     function entre3() {
       var numero1 =20
       var numero2 =12
       var numero3 =9
       
       if (numero1>numero2 && numero1>numero3) {
        
        alert("Maior é "+ numero1)
       }
       else{
        if (numero2>numero1 && numero2>numero3) {
        
            alert("Maior é "+ numero2)
           }
           else{
            if (numero3>numero1 && numero3>numero2) {
        
                alert("Maior é "+ numero3)
               }
           }
       }
 }
/*  entre3() */ /* FIM MAIOR */

        /* 12-MULTIPLO  */
       function multiplo(params) {
        
         var mult1=12
         var mult2=2

         if (mult1 % mult2==0) {
             alert(mult1+ " é multiplo de " + mult2)
         }

         else{
            alert(mult1+ " não é multiplo de " + mult2)
         }
       }
       /*  multiplo() */  /* FIM MULTIPLO */



       function triangulo() {

          
          

        var total =7
        for(var i=1; i<=total; i++)
        {     var linha=""
                
          for (let l = 1 ; l <= i; l++) {
               linha+="*"
            } 
         console.log(linha)
    
           
        }
    }
    triangulo()

