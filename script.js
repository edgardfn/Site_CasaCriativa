function onOff(){ 
    document
        .querySelector("#modal")
        .classList
        .toggle("hide") // adiciona no elemento footer a classe hide

    /* tirar a barra de rolagem nova ideia da pagina ideias.html */    
    document
        .querySelector("body")
        .classList
        .toggle("hideScroll") 

    /* colocar barra de rolage caso a tela do usuário seja menor */
    document
        .querySelector("#modal")
        .classList
        .toogle("addScroll")
}

