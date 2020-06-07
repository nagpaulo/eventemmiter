# Criando Um EventEmitter

Implementação de um EventEmitter responsável por emitir e escutar eventos.

Ao cadastrar um novo usuário, emite um evento para que seja mostrado uma mensagem de sucesso.

const cadastrarNovoUsuario = () => {
    const novoUsuario = new Usuario(/* pegar informações de um formulário */)
    mandarParaAPI(novoUsuario) // simples implementação para fazer uma requisição do tipo POST
    // publicar evento
}

Estudos JavaScript;

https://blog.matheuscastiglioni.com.br/criando-um-event-emitter/
Autor: Matheus Castiglioni