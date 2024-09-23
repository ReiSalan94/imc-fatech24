function calcularIMC() {
    // Captura os valores de peso e altura
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Determina a categoria do IMC
    let categoria = '';
    if (imc < 18.5) {
        categoria = "Abaixo do peso  - Acesse sua dieta aqui: <a href='https://chatgpt.com/share/66f196a4-7ed0-800d-8ba1-0c1468455cdf' target='_blank'>clique para acessar:</a> ou leia o qr code <br><img src='img/abaixo.png'>";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal   - Acesse sua dieta aqui: <a href='https://chatgpt.com/share/66f15864-d68c-800d-9033-90e788482a51' target='_blank'>clique para acessar:</a> ou leia o qr code <br><img src='img/normal.png'>";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso   - Acesse sua dieta aqui: <a href='https://chatgpt.com/share/66f1582d-995c-800d-9774-94dee38d793a' target='_blank'>clique para acessar:</a> ou leia o qr code <br><img src='img/sobrepeso.png'>";
    } else if (imc >= 30 && imc < 34.9) {
        categoria = "Obesidade grau 1 - Acesse sua dieta aqui: <a href='https://chatgpt.com/share/66f1569b-2f20-800d-8e3e-de3f4b93f71a' target='_blank'>clique para acessar:</a> ou leia o qr code <br><img src='img/obesidade-1.png'>";
    } else if (imc >= 35 && imc < 39.9) {
        categoria = "Obesidade grau 2 - Acesse sua dieta aqui: <a href='https://chatgpt.com/share/66f1572a-1060-800d-a7f3-329552c352a1' target='_blank'>clique para acessar:</a> ou leia o qr code <br><img src='img/obesidade-2.png'>";
    } else {
        categoria = "Obesidade grau 3  - Acesse sua dieta aqui: <a href='https://chatgpt.com/share/66f157e7-9654-800d-85bf-5d66b656ed44' target='_blank'>clique para acessar:</a> ou leia o qr code <br><img src='img/obesidade-3.png'>";
    }
    resposta  = '<div class="resultado"> ' + categoria + '</div>';
    
    // Exibe o resultado
    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} (${document.body.innerHTML += resposta})`;
}
