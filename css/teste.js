function contadorDeLetra()
{
    let frase = prompt('Escreva uma frase: ');
    let letra = prompt('Escreva a letra o qual sera verificada na frase previamente informada: ');

    alert((frase.split(`${letra}`).length - 1));
}

