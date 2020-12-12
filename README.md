# Curso Fullcycle da Code Education

Exercícios do módulo Docker

## Desafio Go

Para buildar a imagem do desafio, rode o comando:

```bash
$ docker build -t lucasvscn/codeeducation ./hello-go
```

Para testar o resultado, use o comando:

```bash
$ docker run --rm lucasvscn/codeeducation
```

**Referências:**
[Shrink your Go binaries with this one weird trick](https://blog.filippo.io/shrink-your-go-binaries-with-this-one-weird-trick/)

## Desafio Node + Nginx

Para subir o ambiente, rode o comando:

```bash
$ cd node-nginx-mysql ; docker-compose up -d
```

Vá até o endereço [http://localhost:3000](http://localhost:3000) para acessar a aplicação.
