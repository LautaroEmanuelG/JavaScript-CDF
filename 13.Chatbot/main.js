const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const contenedor = document.querySelector('.contenedor');

const enviarMensaje = (mensaje) => {
    input.value = '';
    mensaje.trim();
    if (mensaje !== '') {
        const div = document.createElement('div');
        const p = document.createElement('p');
        div.classList.add('usuario__contenedor');
        p.classList.add('usuario__msg');
        p.textContent = mensaje;
        div.appendChild(p);
        contenedor.appendChild(div);
        respuestaBot(mensaje);
    }
}

const respuestaBot = (mensaje) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    mensaje = mensaje.toLowerCase();


    if(mensaje === 'hola'){
        p.textContent = 'Hola, ¿cómo estás?';
    }else if(mensaje === 'bien'){
        p.textContent = 'Me alegro';
    }else if(mensaje === 'mal'){
        p.textContent = '¿Por qué?';
    }else if(mensaje === '!help'){
        p.textContent = 'Que desea hacer? 1.Transferencia 2.Deposito 3.Retiro 4.Saldo 5.Comunicarse con un asesor';
    }else if(mensaje === '1'){
        p.textContent = 'Ingrese el numero de cuenta a transferir';
    }else if(mensaje === '2'){
        p.textContent = 'Ingrese el numero de cuenta a depositar';
    }else if(mensaje === '3'){
        p.textContent = 'Ingrese el numero de cuenta a retirar';
    }else if(mensaje === '4'){
        p.textContent = 'Su saldo es de 1000 soles';
    }else if(mensaje === '5'){
        p.textContent = 'A la brevedad nos comunicaremos con usted';
    }else(p.textContent = 'No entiendo, escribe "!help" para ver las opciones');

    
    div.classList.add('chatbot__contenedor');
    p.classList.add('chatbot__msg');
    div.appendChild(p);
    contenedor.appendChild(div);
}

btn.addEventListener('click', () => {
    enviarMensaje(input.value);
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        enviarMensaje(input.value);
    }
})