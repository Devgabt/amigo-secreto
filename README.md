# Amigo Secreto

O **Amigo Secreto** é uma aplicação web para organizar e realizar sorteios de amigo secreto. A aplicação permite adicionar nomes de participantes, sortear quem vai presentear quem e reiniciar a lista quando necessário.

## Descrição

A aplicação possui as seguintes funcionalidades:
- Adicionar nomes de amigos à lista.
- Sortear quem presenteará quem.
- Visualizar a lista de amigos e o resultado do sorteio.
- Reiniciar a lista para um novo sorteio.

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:
- **`index.html`**: Arquivo HTML principal.
- **`style.css`**: Arquivo CSS para estilização da página.
- **`js/app.js`**: Arquivo JavaScript para lógica de adição de amigos, sorteio e reinicialização.

## Funcionamento

1. **Adicionar Amigos**: Insira o nome de um amigo no campo de texto e clique em "Adicionar". O nome será adicionado à lista de amigos, se não estiver vazio e não for duplicado.
2. **Sortear**: Clique em "Sortear" para gerar o sorteio baseado na lista de amigos. É necessário ter pelo menos 4 amigos para realizar o sorteio.
3. **Reiniciar**: Clique em "Reiniciar" para limpar a lista de amigos e o resultado do sorteio.

### Funções JavaScript

- **`adicionar()`**: Adiciona o nome do amigo à lista e atualiza a visualização.
- **`sortear()`**: Realiza o sorteio dos amigos e exibe quem presenteará quem.
- **`embaralhar(lista)`**: Embaralha a lista de amigos usando o algoritmo Fisher-Yates.
- **`reiniciar()`**: Limpa a lista de amigos e o resultado do sorteio.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Como Executar

1. Clone este repositório:
    ```bash
    git clone https://github.com/Devgabt/amigo-secreto.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd <DIRETORIO_DO_PROJETO>
    ```
3. Abra o arquivo `index.html` em um navegador web para visualizar a aplicação.
