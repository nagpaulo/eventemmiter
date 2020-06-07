const EventEmitter = {
    events: new Map(),
    listen: (topic, cb) => {
        const oldEvents = EventEmitter.events.get(topic)
        if (EventEmitter.events.has(topic)) {
            return EventEmitter.events.set(topic, [ ...oldEvents, cb ])
        }
        return EventEmitter.events.set(topic, [ cb ])
    },
    emit: (topic, data) => {
        const myListeners = EventEmitter.events.get(topic)
        if (Array.isArray(myListeners) && myListeners.length) {
            myListeners.forEach(event => event(data))
        }
    }
}

EventEmitter.listen('USUARIO_SALVO', data => console.log(`Salvando um novo usuário: ${JSON.stringify(data)}`));
EventEmitter.emit('USUARIO_SALVO', 'Usuario EventEmiiter');

class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

mandarParaAPI = (user) => {
    start = () => { console.log(user)}
    stop = () => { console.log("Terminando"); }
    return {
        start,
        stop
    }
}

const cadastrarNovoUsuario = () => {
    const novoUsuario = new Usuario('Paulo',20)
    mandarParaAPI(novoUsuario).start() // simples implementação para fazer uma requisição do tipo POST
    EventEmitter.emit('USUARIO_SALVO', novoUsuario)
    mandarParaAPI(novoUsuario).stop()
}

cadastrarNovoUsuario();