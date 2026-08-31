function FizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz'; // Apenas retorna o texto
    } else if (numero % 3 === 0) {
        return 'Fizz';
    } else if (numero % 5 === 0) {
        return 'Buzz';
    } else {
        return numero; // Retorna o próprio número se não for divisível
    }
}

// O loop agora recebe o texto/número e imprime corretamente
for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i));
}