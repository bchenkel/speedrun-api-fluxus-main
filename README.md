# Projeto ...

Esse projeto visa controlar a entrada e saída de alunos de uma escola.

# Rodar em modo de desenvolvedor

Para rodar a API em modo de desenvolvedor, digite o seguinte comando no terminal:

```
npm run dev
```

# Gerar o build do projeto

Para gerar o build do projeto, basta digitar o comando abaixo:

```
npm run build
```

# Rodar em modo de produção

Para rodar o projeto em modo de produção, digite o comando:

```
npm start
```

Nota: não esqueça de rodar o comando de build antes deste

# DEV

Os objetivos dos helpers são facilitar a vida do desenvolvedor. São funções .js que precisam ser acessíveis apenas para administradores. Elas vão servir majoritariamente para testes.

## Criptografar senhas (sem rodar API)

Uma das funções da pasta helper é gerar senha criptografadas, segue o comando para fazer isso

```
npm run dev:hasher
```

Nota: não esqueca de trocar o campo "HELPERS_HASH" pela senha que deseja criptografar, isso está localizado no arquivo .env

## Fazer requisições

Com a extensão REST Client do VSCode, pode-se fazer requisições através da IDE. Para isto, basta fazer a instalação da extensão e abrir a pasta chamada "Requests". Dentro dela, cada arquivo .http serve para determinadas requisições. Explore com sabedoria!

Nota: uma vez que a requisição foi escolhida, clique em "Send Request"
