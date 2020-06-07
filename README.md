# Estudos JavaScript;

# Criando Um EventEmitter

Implementação de um EventEmitter responsável por emitir e escutar eventos.

Entendendo o EventEmitter

>Basicamente o que nosso EventEmitter precisa fazer é receber vários listeners e salvá-los >em algum lugar de forma agrupada (categorizada), depois, quando algum evento for emitido, >precisamos verificar se existe algum listener para ele e realizar as chamadas para os >mesmos. Então podemos definir nossos passos:
>
>    - Criar um EventEmitter.
>    - Criar uma função para definir um listener.
>    - Salvar o listener.
>    - Agrupar os listeners por tópicos (categoria).
>    - Criar uma função para emitir um evento.
>    - Buscar todos os listeners desse evento.
>    - Chamar todos os listener.

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
