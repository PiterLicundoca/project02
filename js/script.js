/* Windows chama todos os documento do site */

window.mostrar = ScrollReveal({reset:true})

/* Todo site */

mostrar.reveal('.efeitoScroll, .h1',{
    /*  duration= duraçao para o efeito ser concluido */
    duration: 2000,

    /*  distance= Distancia de cima para baixo*/
    distance: '5rem',

    /* Tempo que leva para o efeito começar */
    delay:200


    /* ultima propriedade nao pode ter virgula */
})

mostrar.reveal('.efeitoScroll1', {

    duration:2000,
    distance: '5rem',
    delay:400
})

mostrar.reveal('.efeitoScroll2', {

    duration:2000,
    distance: '5rem',
    delay:600,
      origin:'top'
})


/* Mudança do efeito da esquerda para direita e cima baixo */
mostrar.reveal('.h4', {

    duration:2000,
    distance: '3rem',
    delay:700,
    origin:'left',
    opacity: 0.3,
   
}) 

/* Origem da  animacao 
 origin: 'top'
'right'
'bottom'
'left'
Usage */

/*   rotate: {
        x: 20,
        z: 20
    } */
mostrar.reveal('h4', {

    duration:2000,
    distance: '3rem',
    delay:100,
    origin:'left',
    rotate: {
        x: 20,
        z: 70
    }, 
   
    scale: 0.8 ,

 
  
})


