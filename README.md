# Estudos JavaScript;

# Criando Um EventEmitter

Implementação de um EventEmitter responsável por emitir e escutar eventos.

> Ao cadastrar um novo usuário, emite um evento para que seja mostrado uma mensagem de sucesso.
```sh
const cadastrarNovoUsuario = () => {
    const novoUsuario = new Usuario('NewUser',20)
    // simples implementação para fazer uma requisição do tipo POST
    mandarParaAPI(novoUsuario).start()
    EventEmitter.emit('USUARIO_SALVO', novoUsuario)
    mandarParaAPI(novoUsuario).stop()
}

cadastrarNovoUsuario();
```

> https://blog.matheuscastiglioni.com.br/criando-um-event-emitter
> Autor: Matheus Castiglioni
