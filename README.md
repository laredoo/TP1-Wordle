## TP1 Engenharia de Software II ~ React Wordle

### Membros do Grupo:

- Alan Augusto Martins Campos, 2021040121, [@alan-augusto](https://github.com/alan-augusto);
- Davi Esondem Menezes Brito, 2021039808, [@daviembrito](https://github.com/daviembrito);
- Lucas Rocha Laredo, 2021040121, [@laredoo](https://github.com/laredoo);
- Marcos Lott de Araújo, 2021039786; [@MarcosLottDito](https://github.com/MarcosLottDito);

### Sistema:

O sistema que desenvolvemos é uma versão feita em React.JS do famoso jogo de navegador Wordle. A lógica do jogo é constiduída na escolha de uma palavra aleatória pelo sistema e o usuário deve adivinhar essa palavra aleatória de acordo com as dicas que são dadas.

Para o funcionamento do sistema, dividimos o projeto em 5 sub-componentes:

- Board: O board é o componente responsável por renderizar as palavras digitadas pelo usuário como uma matriz.
- GameOver: O GameOver é o componente responsável por lidar com o final do jogo. Caso o usuário não acerte a palavra ele disponibiliza a palavra correta e caso o usuário acerte, ele conta quantas tentivas foram necessárias.
- Key: É o componente das teclas do teclado. Ele é usado para construir o componente Keyboard.
- Keyboard: É o componente macro do teclado. Ele pode ser usado tanto clickando nas teclas, quanto usando o teclado.
- Letter: É o componente da letra do jogo, responsável por indicar ao usuário se essa letra pertence a palavra ou não e se ela está no local correto da palvra.

### Tecnologias utilizadas:

Para fazer esse sistema usamos o Create React App (CRA) para inicializar o sistema e os arquivos para rodar o framework `React` e usamos `yarn` como nosso gerenciador de pacotes.

Utilizamos o framwork do React para que possamos utilizar 5 hooks desse framework:

- useState: Esse hook foi utlizado para gerenciar estados locais, dentro de cada componente.
- useCallback: Esse hook foi utilizado para fazer memoização de funções locais, dentro de cada componente.
- useEffect: Esse hook foi utilizado para causar re-renderização de alguns componentes de acordo com as regras de negócio.
- contextApi: Essa funcionalidade contempla 2 hooks, createContext e useContext, e são usados para gerenciar estados de forma global.
- useMemo: Esse hook foi utilizado para fazer memoização de constantes e componentes locais, dentro de cada componente.

### Iniciar o sistema:

Para iniciar o sistema, é necessário que o usuário possua o `NodeJS` e o `yarn` instalado em sua máquina para fazer o gerenciamento dos pacotes.
Após isso, o usuário deve instalar os pacotes pelo comando `yarn install`. Assim, o projeto estará pronto para ser iniciado.
Para iniciar o programa, basta usar o comando `yarn start`.
