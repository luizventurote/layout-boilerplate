# Layout Boilerplate

![image](https://github.com/luizventurote/layout-boilerplate/blob/master/img/logo-layout-boilerplate.png?raw=true)

Layout Boilerplate é um framework simples e prático para iniciar novos projetos web.

Ele utiliza o GruntJS, Jquery, Bootstrap, Font Awesome e o SASS.

#### [build/](https://github.com/luizventurote/layout-boilerplate/tree/master/build)
Aqui estão os arquivos SCSS, CSS e JS que serão editados.

#### [build/elements/](https://github.com/luizventurote/layout-boilerplate/tree/master/build/scss/elements)
Nesta pasta estarão localizados os arquivos scss para cada elemento. Cada elemento terá um arquivo e todos esses arquivos serão concatenados para gerar um único arquivo css.

#### [css/](https://github.com/luizventurote/layout-boilerplate/tree/master/css)
Os arquivos scss serão compilados, concatenados e minificados para essa pasta.

#### [fonts/](https://github.com/luizventurote/layout-boilerplate/tree/master/fonts)
Diretório para fontes.

#### [img/](https://github.com/luizventurote/layout-boilerplate/tree/master/img)
Diretório para imagens.

#### [js/](https://github.com/luizventurote/layout-boilerplate/tree/master/js)
Os arquivos js serão concatenados e minificados para essa pasta.

## Iniciando

1. Para iniciar é necessário ter instalados em sua máquina o [NodeJS](http://nodejs.org/download/), npm (gerenciador de pacotes do node), [Grunt-CLI](http://gruntjs.com/) e o [SASS](http://sass-lang.com/install).

2. Depois disso, faça o download do projeto.

3. Acesse a pasta do projeto pelo terminal:
```bash
cd layout-boilerplate
```

4. Instale as dependências do projeto:
```bash
npm install
```

5. Edite os arquivos e rode as tarefas com o Grunt no terminal:
```bash
grunt
```

Tutorial em vídeo da versão 1.0.1: [Iniciando projetos com o Layout Boilerplate](http://www.youtube.com/watch?v=9oHVor8D2Sw).

## Sinconize o projeto com vários dispositivos
Você pode sincronizar o seu projeto com vários dispositivos para realizar testes com [Browser Sync](https://github.com/shakyShane/grunt-browser-sync). 

Primeiro você deve alterar o valor da variável `ip_project` que está no arquivo `gruntfile.js` para o ip da sua máquina na rede e depois rodar algum tipo de watch no terminal ("wdev", "wstruct", "wsass" ou "wjs").

Depois disso, irá aparecer no terminal o endereço de ip e a porta para serem acessados no navegador/dispositivo (Ex: 198.168.22.25:3002).

## Grunt Watch
Você pode deixar o grunt rodando enquanto edita o projeto através do comando:
```bash
grunt wdev
```

**Quando o grunt observa alguma modificação nos arquivos ele automaticamente atualiza a página no navegador.**

### Existe outros comandos para o watch
**Grunt Watch Struct**: observa somente os arquivos HTML e PHP.
```bash
grunt wstruct
```

**Grunt Watch SASS**: observa somente os arquivos SCSS, HTML e PHP.
```bash
grunt wsass
```

**Grunt Watch JS**: observa somente os arquivos JS, HTML e PHP.
```bash
grunt wjs
```

## Créditos
* [Bootstrap](http://getbootstrap.com/)
* [Open Sans](http://www.fontsquirrel.com/license/pacifico)
* [Font Awesome](http://fontawesome.io/)
* [HTML5 Boilerplate](http://html5boilerplate.com/)