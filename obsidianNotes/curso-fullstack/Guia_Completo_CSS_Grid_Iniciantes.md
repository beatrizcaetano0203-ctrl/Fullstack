---
title: "Guia Completo de CSS Grid"
subtitle: "Do zero ao layout responsivo"
tags:
  - css
  - css-grid
  - frontend
  - html
  - responsividade
  - estudo
---

# CSS Grid — Guia Completo para Iniciantes

> [!INFO]
> Este guia foi organizado para quem está começando em CSS Grid e quer aprender desde os conceitos mais básicos até recursos mais avançados.
>
> O objetivo não é apenas decorar propriedades. A ideia é entender **o que o Grid está fazendo**, **por que está fazendo** e **quando usar cada recurso**.

---

# 1. O que é CSS Grid?

CSS Grid é um sistema de layout do CSS criado para organizar elementos em **linhas e colunas**.

Imagine uma folha quadriculada:

```text
┌──────────┬──────────┬──────────┐
│          │          │          │
├──────────┼──────────┼──────────┤
│          │          │          │
├──────────┼──────────┼──────────┤
│          │          │          │
└──────────┴──────────┴──────────┘
```

Com CSS Grid podemos controlar:

- quantas colunas existem;
- quantas linhas existem;
- a largura das colunas;
- a altura das linhas;
- o espaço entre os elementos;
- quais células cada elemento ocupa;
- onde cada elemento começa;
- onde cada elemento termina;
- como os elementos são alinhados;
- como o layout se adapta a telas menores.

O Grid é chamado de sistema de layout **bidimensional**, porque trabalha ao mesmo tempo com:

- eixo horizontal → colunas;
- eixo vertical → linhas.

---

# 2. Grid x Flexbox

CSS Grid e Flexbox são ferramentas diferentes, embora possam trabalhar juntas.

## Flexbox

É usado principalmente para organizar elementos em **uma dimensão por vez**.

Exemplo:

```text
ITEM  ITEM  ITEM  ITEM
```

ou:

```text
ITEM
ITEM
ITEM
ITEM
```

## Grid

É usado principalmente quando precisamos controlar **linhas e colunas ao mesmo tempo**.

```text
┌─────────┬─────────┬─────────┐
│ item 1  │ item 2  │ item 3  │
├─────────┼─────────┼─────────┤
│ item 4  │ item 5  │ item 6  │
└─────────┴─────────┴─────────┘
```

> [!TIP]
> Regra prática:
>
> - layout em uma direção → pense em **Flexbox**;
> - layout em linhas e colunas → pense em **Grid**.

---

# 3. As duas partes principais de um Grid

Todo Grid possui duas partes principais:

1. **Grid Container**
2. **Grid Items**

## Grid Container

É o elemento pai que recebe:

```css
display: grid;
```

Exemplo:

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

```css
.container {
  display: grid;
}
```

A `div.container` é o **Grid Container**.

## Grid Items

Todos os **filhos diretos** do Grid Container se tornam Grid Items.

No exemplo:

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

As três `div` internas são Grid Items.

> [!WARNING]
> Somente filhos diretos são Grid Items.
>
> Um elemento que estiver dentro de outro filho não se torna automaticamente um item daquele Grid.

---

# 4. `display: grid`

A propriedade que ativa o Grid é:

```css
display: grid;
```

Exemplo:

```css
.container {
  display: grid;
}
```

Sem essa propriedade, as propriedades de Grid aplicadas aos filhos podem não funcionar como esperado.

---

# 5. `display: inline-grid`

Também existe:

```css
display: inline-grid;
```

A diferença principal é o comportamento do próprio container.

## `grid`

```css
.container {
  display: grid;
}
```

O container se comporta como um elemento de bloco.

## `inline-grid`

```css
.container {
  display: inline-grid;
}
```

O container se comporta como um elemento inline, ocupando apenas o espaço necessário.

Para layouts de páginas, o mais comum é:

```css
display: grid;
```

---

# 6. Vocabulário essencial do Grid

Antes de continuar, precisamos entender alguns nomes.

## Grid Container

O elemento pai que possui `display: grid`.

## Grid Item

Cada filho direto do Grid Container.

## Grid Line

São as linhas que delimitam as células.

Exemplo com três colunas:

```text
linha 1      linha 2      linha 3      linha 4
   │             │             │             │
   ├─────────────┼─────────────┼─────────────┤
```

Observe:

> 3 colunas possuem 4 linhas verticais.

## Grid Track

É o espaço entre duas Grid Lines.

Pode ser:

- uma coluna;
- uma linha.

## Grid Cell

É uma célula individual.

```text
┌─────────┐
│ célula  │
└─────────┘
```

## Grid Area

É uma região formada por uma ou mais células.

```text
┌─────────────────────┐
│      uma área       │
├──────────┬──────────┤
│          │          │
└──────────┴──────────┘
```

---

# 7. Estrutura HTML usada neste guia

Vamos trabalhar com uma página simples formada por:

- `header`;
- `main`;
- `aside`;
- `footer`.

## HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Grid</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <div class="container">

    <header id="header">
      <h1>Header</h1>
    </header>

    <main id="main">
      <h2>Conteúdo principal</h2>
      <p>Esta é a área principal da página.</p>
    </main>

    <aside id="aside">
      <h2>Menu lateral</h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </aside>

    <footer id="footer">
      <p>Footer</p>
    </footer>

  </div>

</body>
</html>
```

---

# 8. CSS base do projeto

Esta é a base usada neste guia.

```css
@charset "UTF-8";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

/* body {
  height: 100vh;
} */

header,
main,
aside,
footer {
  background-color: rgb(221, 221, 221);
}

div.container {
  display: grid;

  grid-template-areas:
    "h h h"
    "m m a"
    "f f f";

  gap: 10px;

  grid-template-columns: 3fr 3fr 2fr;
  grid-template-rows: 20vh 70vh 10vh;
}

header#header {
  background-color: rgb(226, 43, 80);
  grid-area: h;

  /* grid-column-start: 1;
  grid-column-end: 4; */

  /* grid-column: 1 / 4; */

  /* grid-row: 1 / 4; */
}

header#header,
main#main,
aside#aside,
footer#footer {
  padding: 20px;
}

main#main {
  background-color: rgb(43, 134, 226);
  grid-area: m;
}

aside#aside {
  background-color: rgb(255, 255, 0);
  grid-area: a;
}

aside#aside ul li {
  list-style-type: none;
}

footer#footer {
  background-color: rgb(43, 226, 134);
  grid-area: f;
}
```

Agora vamos entender cada parte.

---

# 9. `@charset "UTF-8";`

```css
@charset "UTF-8";
```

Essa instrução informa a codificação usada pelo arquivo CSS.

UTF-8 permite trabalhar corretamente com caracteres como:

```text
á
é
í
ó
ú
ç
ã
õ
```

Quando usada, deve ficar no início do arquivo CSS.

---

# 10. Reset CSS usado na base

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
```

O seletor:

```css
*
```

seleciona todos os elementos.

## `padding: 0`

Remove os espaçamentos internos padrão.

## `margin: 0`

Remove margens padrão do navegador.

## `box-sizing: border-box`

Faz a largura e a altura declaradas considerarem:

- conteúdo;
- padding;
- borda.

Exemplo:

```css
div {
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
}
```

A largura final continuará sendo `300px`.

## `font-family`

```css
font-family: Arial, Helvetica, sans-serif;
```

Define uma sequência de fontes alternativas.

---

# 11. `height: 100vh`

Na base temos:

```css
/* body {
  height: 100vh;
} */
```

Está comentado.

A unidade:

```text
vh
```

significa **viewport height**.

```css
height: 100vh;
```

significa:

> altura igual a 100% da altura visível da janela.

Outros exemplos:

```css
height: 50vh;
```

metade da altura visível.

```css
height: 25vh;
```

um quarto da altura visível.

---

# 12. Aplicando estilo em vários elementos

```css
header,
main,
aside,
footer {
  background-color: rgb(221, 221, 221);
}
```

Aqui todos esses elementos recebem inicialmente a mesma cor.

Depois cada um recebe uma cor específica.

---

# 13. Ativando o Grid

```css
div.container {
  display: grid;
}
```

Agora `.container` se torna o Grid Container.

Seus filhos diretos:

```text
header
main
aside
footer
```

tornam-se Grid Items.

---

# 14. `grid-template-columns`

A propriedade:

```css
grid-template-columns
```

define:

- quantidade de colunas;
- largura de cada coluna.

---

# 15. Colunas com `auto`

```css
.container {
  display: grid;
  grid-template-columns: auto auto auto;
}
```

Criamos três colunas.

```text
┌───────────┬───────────┬───────────┐
│           │           │           │
└───────────┴───────────┴───────────┘
```

---

# 16. Colunas em pixels

```css
grid-template-columns: 100px 200px 300px;
```

Resultado:

```text
100px      200px             300px
┌───────┬──────────────┬──────────────────┐
│       │              │                  │
└───────┴──────────────┴──────────────────┘
```

---

# 17. Colunas em porcentagem

```css
grid-template-columns: 20% 50% 30%;
```

Temos três colunas:

- 20%;
- 50%;
- 30%.

---

# 18. Misturando unidades

É possível misturar unidades.

```css
grid-template-columns: 200px auto 25%;
```

Ou:

```css
grid-template-columns: 150px 1fr 2fr;
```

---

# 19. Unidade `fr`

`fr` significa **fração do espaço disponível**.

Exemplo:

```css
grid-template-columns: 1fr 1fr 1fr;
```

Temos três partes iguais.

```text
1fr        1fr        1fr
┌─────────┬─────────┬─────────┐
│         │         │         │
└─────────┴─────────┴─────────┘
```

---

# 20. Comparando `1fr 2fr 1fr`

```css
grid-template-columns: 1fr 2fr 1fr;
```

O espaço é dividido em quatro partes:

```text
1 + 2 + 1 = 4
```

Então:

- primeira coluna → 1 parte;
- segunda coluna → 2 partes;
- terceira coluna → 1 parte.

Visualmente:

```text
┌─────────┬───────────────────┬─────────┐
│   1fr   │        2fr        │   1fr   │
└─────────┴───────────────────┴─────────┘
```

---

# 21. Entendendo a base `3fr 3fr 2fr`

Nossa base usa:

```css
grid-template-columns: 3fr 3fr 2fr;
```

Somamos:

```text
3 + 3 + 2 = 8
```

Portanto:

- primeira coluna → 3/8;
- segunda coluna → 3/8;
- terceira coluna → 2/8.

Como o `main` ocupa as duas primeiras colunas, ele fica maior que o `aside`.

---

# 22. Função `repeat()`

Em vez de:

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

podemos escrever:

```css
grid-template-columns: repeat(4, 1fr);
```

Significa:

> repita quatro vezes `1fr`.

Outro exemplo:

```css
grid-template-columns: repeat(3, 200px);
```

equivale a:

```css
grid-template-columns: 200px 200px 200px;
```

---

# 23. Função `minmax()`

A função:

```css
minmax()
```

define um tamanho mínimo e um tamanho máximo.

Exemplo:

```css
grid-template-columns: minmax(200px, 1fr) 1fr;
```

A primeira coluna:

- nunca deverá ficar menor que `200px`;
- pode crescer até ocupar `1fr`.

Sintaxe:

```css
minmax(minimo, maximo)
```

---

# 24. `min-content`

```css
grid-template-columns: min-content 1fr;
```

`min-content` tenta usar a menor largura possível de acordo com o conteúdo.

---

# 25. `max-content`

```css
grid-template-columns: max-content 1fr;
```

`max-content` tenta manter o conteúdo em seu tamanho máximo natural, evitando quebras quando possível.

---

# 26. `fit-content()`

Exemplo:

```css
grid-template-columns: fit-content(250px) 1fr;
```

A primeira coluna se adapta ao conteúdo, mas respeita o limite informado.

Outro exemplo:

```css
grid-template-columns:
  fit-content(300px)
  fit-content(200px)
  auto;
```

---

# 27. `grid-template-rows`

Se:

```css
grid-template-columns
```

controla as colunas,

então:

```css
grid-template-rows
```

controla as linhas.

Exemplo:

```css
grid-template-rows: 100px 300px 80px;
```

Temos:

- linha 1 → `100px`;
- linha 2 → `300px`;
- linha 3 → `80px`.

---

# 28. Linhas com `fr`

```css
grid-template-rows: 1fr 2fr 1fr;
```

A segunda linha recebe o dobro do espaço das outras.

---

# 29. Linhas da nossa base

Nossa base utiliza:

```css
grid-template-rows: 20vh 70vh 10vh;
```

Somando:

```text
20vh + 70vh + 10vh = 100vh
```

Então a estrutura foi pensada para ocupar aproximadamente uma tela inteira:

```text
20vh → header
70vh → main + aside
10vh → footer
```

Visualmente:

```text
┌──────────────────────────────┐
│           HEADER             │ 20vh
├────────────────────┬─────────┤
│                    │         │
│        MAIN        │  ASIDE  │ 70vh
│                    │         │
├────────────────────┴─────────┤
│           FOOTER             │ 10vh
└──────────────────────────────┘
```

> [!IMPORTANT]
> O `gap` também ocupa espaço. Portanto, usar linhas que somam exatamente `100vh` mais os gaps pode gerar rolagem vertical.
>
> Uma alternativa mais flexível pode ser usar `min-height: 100vh` e linhas como:
>
> ```css
> grid-template-rows: auto 1fr auto;
> ```

---

# 30. Grid Tracks

As linhas e colunas formam **tracks**.

Quando escrevemos:

```css
grid-template-columns: 1fr 2fr 1fr;
```

definimos três column tracks.

Quando escrevemos:

```css
grid-template-rows: 100px 1fr 80px;
```

definimos três row tracks.

---

# 31. Grid explícito

O Grid que declaramos diretamente é chamado de **Grid explícito**.

Exemplo:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
```

Criamos explicitamente:

- 3 colunas;
- 2 linhas.

---

# 32. Grid implícito

Se colocarmos mais itens do que cabem nas linhas declaradas, o navegador pode criar novas linhas automaticamente.

Exemplo:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
}
```

Com seis itens, novas linhas precisarão ser criadas.

Essas linhas extras fazem parte do **Grid implícito**.

---

# 33. `grid-auto-rows`

Controla o tamanho das linhas criadas automaticamente.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
}
```

Toda linha implícita terá `150px`.

Também podemos usar:

```css
grid-auto-rows: auto;
```

```css
grid-auto-rows: min-content;
```

```css
grid-auto-rows: max-content;
```

```css
grid-auto-rows: minmax(100px, auto);
```

---

# 34. `grid-auto-columns`

Controla o tamanho de colunas criadas automaticamente.

```css
.container {
  display: grid;
  grid-auto-columns: 200px;
}
```

Outros valores possíveis incluem:

```css
grid-auto-columns: auto;
```

```css
grid-auto-columns: min-content;
```

```css
grid-auto-columns: max-content;
```

```css
grid-auto-columns: minmax(100px, 1fr);
```

---

# 35. `grid-auto-flow`

Controla como os itens posicionados automaticamente entram no Grid.

O comportamento padrão é:

```css
grid-auto-flow: row;
```

Os elementos vão preenchendo as linhas.

## `row`

```css
grid-auto-flow: row;
```

Fluxo:

```text
1 2 3
4 5 6
```

## `column`

```css
grid-auto-flow: column;
```

Os itens são inseridos priorizando colunas.

## `dense`

```css
grid-auto-flow: dense;
```

O navegador tenta preencher espaços vazios que tenham aparecido no layout.

Também podemos usar:

```css
grid-auto-flow: row dense;
```

ou:

```css
grid-auto-flow: column dense;
```

> [!WARNING]
> `dense` pode alterar a ordem visual dos itens para preencher buracos. Use com cuidado quando a ordem do conteúdo for importante.

---

# 36. Gaps

Gap é o espaço entre as linhas e colunas do Grid.

Podemos controlar com:

- `column-gap`;
- `row-gap`;
- `gap`.

---

# 37. `column-gap`

Define o espaço entre colunas.

```css
.container {
  display: grid;
  column-gap: 20px;
}
```

---

# 38. `row-gap`

Define o espaço entre linhas.

```css
.container {
  display: grid;
  row-gap: 30px;
}
```

---

# 39. `gap`

É um atalho.

```css
gap: 20px;
```

Aplica:

- `20px` entre linhas;
- `20px` entre colunas.

---

# 40. `gap` com dois valores

```css
gap: 20px 40px;
```

Significa:

```text
20px → espaçamento entre linhas
40px → espaçamento entre colunas
```

Equivale a:

```css
row-gap: 20px;
column-gap: 40px;
```

---

# 41. `grid-gap`

Em códigos antigos você poderá encontrar:

```css
grid-gap: 20px;
```

Hoje é comum usar:

```css
gap: 20px;
```

---

# 42. `grid-template-areas`

Uma das maneiras mais fáceis de aprender Grid é nomear regiões da página.

Nossa base utiliza:

```css
grid-template-areas:
  "h h h"
  "m m a"
  "f f f";
```

Visualmente:

```text
┌───────┬───────┬───────┐
│   h   │   h   │   h   │
├───────┼───────┼───────┤
│   m   │   m   │   a   │
├───────┼───────┼───────┤
│   f   │   f   │   f   │
└───────┴───────┴───────┘
```

Onde:

```text
h = header
m = main
a = aside
f = footer
```

---

# 43. Ligando o item a uma área

O nome usado no template precisa ser associado ao item.

```css
header#header {
  grid-area: h;
}
```

```css
main#main {
  grid-area: m;
}
```

```css
aside#aside {
  grid-area: a;
}
```

```css
footer#footer {
  grid-area: f;
}
```

---

# 44. Nomes maiores em `grid-area`

Não precisamos usar apenas letras.

Podemos escrever:

```css
header {
  grid-area: header;
}

main {
  grid-area: principal;
}

aside {
  grid-area: lateral;
}

footer {
  grid-area: footer;
}
```

E então:

```css
.container {
  display: grid;

  grid-template-areas:
    "header header header"
    "principal principal lateral"
    "footer footer footer";
}
```

Esse formato costuma ser mais fácil de ler.

---

# 45. Espaços vazios com `.`

O ponto representa uma célula sem área nomeada.

Exemplo:

```css
grid-template-areas:
  "header header header"
  "main   main   ."
  "footer footer footer";
```

A última célula da segunda linha não pertence a uma área nomeada.

---

# 46. Uma área precisa formar uma região válida

Ao trabalhar com áreas nomeadas, prefira regiões retangulares.

Exemplo válido:

```css
grid-template-areas:
  "h h h"
  "m m a"
  "f f f";
```

Evite tentar criar formas quebradas para a mesma área.

---

# 47. Linhas numéricas do Grid

Também podemos posicionar elementos usando as linhas do Grid.

Com três colunas:

```text
linha      linha      linha      linha
  1          2          3          4
  │          │          │          │
  ├──────────┼──────────┼──────────┤
```

Por isso um elemento que ocupe as três colunas pode começar na linha 1 e terminar na linha 4.

---

# 48. `grid-column-start`

Define em qual linha vertical o item começa.

```css
.item {
  grid-column-start: 1;
}
```

---

# 49. `grid-column-end`

Define em qual linha vertical o item termina.

```css
.item {
  grid-column-end: 4;
}
```

---

# 50. Exemplo usando início e fim

```css
header {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

Em uma grade de três colunas, o header ocupa todas.

---

# 51. `grid-column`

É o atalho para:

```text
grid-column-start
+
grid-column-end
```

Em vez de:

```css
header {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

podemos escrever:

```css
header {
  grid-column: 1 / 4;
}
```

Leia:

> comece na linha 1 e termine na linha 4.

---

# 52. Entendendo o comentário da base

Na base temos:

```css
/* grid-column-start: 1;
grid-column-end: 4; */
```

e também:

```css
/* grid-column: 1 / 4; */
```

Os dois exemplos fazem praticamente a mesma coisa.

A segunda forma é apenas mais curta.

Como o projeto já utiliza:

```css
grid-area: h;
```

não precisamos ativar esses comandos ao mesmo tempo.

Eles estão ali como demonstração de outra técnica.

---

# 53. `grid-row-start`

Define onde o item começa no eixo das linhas.

```css
.item {
  grid-row-start: 1;
}
```

---

# 54. `grid-row-end`

Define onde o item termina.

```css
.item {
  grid-row-end: 3;
}
```

---

# 55. `grid-row`

É o atalho para:

```text
grid-row-start
+
grid-row-end
```

Exemplo:

```css
.item {
  grid-row: 1 / 3;
}
```

---

# 56. Cuidado com `grid-row: 1 / 4`

Na base existe este exemplo comentado:

```css
/* grid-row: 1 / 4; */
```

Se o header recebesse isso, ele tentaria ocupar desde a linha 1 até a linha 4 do Grid.

Ou seja, atravessaria várias linhas.

Por isso ele deve permanecer comentado quando estamos usando a área:

```css
grid-area: h;
```

---

# 57. `span`

`span` significa aproximadamente:

> ocupe determinada quantidade de tracks.

Exemplo:

```css
.item {
  grid-column: 1 / span 2;
}
```

Leia:

> comece na linha 1 e ocupe duas colunas.

Outro exemplo:

```css
.item {
  grid-row: 2 / span 3;
}
```

Leia:

> comece na linha 2 e ocupe três linhas.

---

# 58. Exemplo de card ocupando duas colunas

```css
.card-destaque {
  grid-column: span 2;
}
```

Se o Grid tiver três colunas:

```text
┌─────────────────────┬──────────┐
│      destaque       │  outro   │
├──────────┬──────────┼──────────┤
│          │          │          │
└──────────┴──────────┴──────────┘
```

---

# 59. `grid-area` com números

Além de nomear áreas, `grid-area` também pode posicionar um item.

Sintaxe:

```css
grid-area:
  row-start /
  column-start /
  row-end /
  column-end;
```

Exemplo:

```css
.item {
  grid-area: 1 / 1 / 3 / 4;
}
```

Significa:

- começa na linha horizontal 1;
- começa na linha vertical 1;
- termina na linha horizontal 3;
- termina na linha vertical 4.

---

# 60. `grid-area` com `span`

Exemplo:

```css
.item {
  grid-area: 2 / 1 / span 2 / span 3;
}
```

Significa:

- começa na linha 2;
- começa na coluna 1;
- ocupa duas linhas;
- ocupa três colunas.

---

# 61. Duas formas de usar `grid-area`

## Forma 1 — nome

```css
header {
  grid-area: cabecalho;
}
```

## Forma 2 — posicionamento

```css
header {
  grid-area: 1 / 1 / 2 / 4;
}
```

---

# 62. `order`

A propriedade:

```css
order
```

altera a ordem **visual** dos Grid Items.

Exemplo:

```css
.item1 {
  order: 3;
}

.item2 {
  order: 1;
}

.item3 {
  order: 2;
}
```

O menor valor aparece primeiro visualmente.

O valor padrão é:

```css
order: 0;
```

> [!WARNING]
> `order` muda a ordem visual, mas não muda a ordem original do HTML.
>
> Isso é importante para acessibilidade e leitores de tela. Sempre que possível, mantenha o HTML em uma ordem lógica.

---

# 63. Alinhamento no CSS Grid

Essa parte costuma causar confusão porque existem dois tipos de alinhamento:

1. alinhamento do **Grid inteiro** dentro do container;
2. alinhamento dos **itens dentro das células**.

Vamos separar.

---

# 64. `justify-content`

Alinha o Grid inteiro no eixo horizontal quando existe espaço livre no container.

Exemplo:

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  justify-content: center;
}
```

Valores comuns:

```css
justify-content: start;
justify-content: end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

---

# 65. `justify-content: start`

```css
justify-content: start;
```

Grid encostado no início horizontal.

---

# 66. `justify-content: end`

```css
justify-content: end;
```

Grid encostado no final horizontal.

---

# 67. `justify-content: center`

```css
justify-content: center;
```

Centraliza o Grid horizontalmente.

---

# 68. `space-between`

```css
justify-content: space-between;
```

Coloca espaço entre os tracks.

```text
ITEM              ITEM              ITEM
```

---

# 69. `space-around`

```css
justify-content: space-around;
```

Distribui espaço ao redor.

---

# 70. `space-evenly`

```css
justify-content: space-evenly;
```

Distribui espaços de forma uniforme.

---

# 71. Quando `justify-content` parece não funcionar

Se suas colunas já ocuparem toda a largura disponível:

```css
grid-template-columns: 1fr 1fr 1fr;
```

pode não sobrar espaço para perceber o efeito.

Para testar melhor:

```css
grid-template-columns: 100px 100px 100px;
```

---

# 72. `align-content`

Alinha o Grid inteiro no eixo vertical quando existe espaço livre.

Exemplo:

```css
.container {
  display: grid;
  height: 500px;
  grid-template-rows: 100px 100px;
  align-content: center;
}
```

Valores comuns:

```css
align-content: start;
align-content: end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```

---

# 73. `place-content`

É um atalho para:

```text
align-content
+
justify-content
```

Exemplo:

```css
.container {
  place-content: center;
}
```

Centraliza nos dois sentidos.

Com dois valores:

```css
place-content: start center;
```

O primeiro corresponde ao `align-content`.

O segundo corresponde ao `justify-content`.

---

# 74. `justify-items`

Controla o alinhamento horizontal dos itens **dentro das próprias células**.

```css
.container {
  display: grid;
  justify-items: center;
}
```

Valores muito usados:

```css
justify-items: start;
justify-items: end;
justify-items: center;
justify-items: stretch;
```

---

# 75. `align-items`

Controla o alinhamento vertical dos Grid Items dentro de suas células.

```css
.container {
  display: grid;
  align-items: center;
}
```

Valores comuns:

```css
align-items: start;
align-items: end;
align-items: center;
align-items: stretch;
```

---

# 76. `place-items`

É um atalho para:

```text
align-items
+
justify-items
```

Exemplo:

```css
.container {
  place-items: center;
}
```

Centraliza os itens dentro das células nos dois eixos.

Com dois valores:

```css
place-items: start center;
```

significa:

```css
align-items: start;
justify-items: center;
```

---

# 77. `justify-self`

Aplica o alinhamento horizontal a **um item específico**.

```css
.item {
  justify-self: center;
}
```

Outros exemplos:

```css
justify-self: start;
justify-self: end;
justify-self: center;
justify-self: stretch;
```

Ele pode sobrescrever o `justify-items` do container para aquele item.

---

# 78. `align-self`

Alinha verticalmente apenas um item.

```css
.item {
  align-self: center;
}
```

Outros exemplos:

```css
align-self: start;
align-self: end;
align-self: center;
align-self: stretch;
```

---

# 79. `place-self`

É o atalho para:

```text
align-self
+
justify-self
```

Exemplo:

```css
.item {
  place-self: center;
}
```

Com dois valores:

```css
.item {
  place-self: start end;
}
```

---

# 80. Resumo dos alinhamentos

| Propriedade | Atua em | Ideia principal |
|---|---|---|
| `justify-content` | Grid inteiro | eixo horizontal |
| `align-content` | Grid inteiro | eixo vertical |
| `place-content` | Grid inteiro | vertical + horizontal |
| `justify-items` | todos os itens | dentro das células, horizontal |
| `align-items` | todos os itens | dentro das células, vertical |
| `place-items` | todos os itens | vertical + horizontal |
| `justify-self` | um item | horizontal |
| `align-self` | um item | vertical |
| `place-self` | um item | vertical + horizontal |

---

# 81. `grid-template`

`grid-template` é um atalho para:

- `grid-template-rows`;
- `grid-template-columns`;
- `grid-template-areas`.

Exemplo simples:

```css
.container {
  display: grid;
  grid-template: 100px 300px / 1fr 2fr;
}
```

Antes da `/`:

```text
linhas
```

Depois da `/`:

```text
colunas
```

---

# 82. `grid-template` com áreas

Também podemos criar um template com áreas.

Exemplo:

```css
.container {
  display: grid;

  grid-template:
    "header header" 100px
    "main aside" 1fr
    "footer footer" 80px
    / 3fr 1fr;
}
```

Esse formato reúne bastante informação em uma única declaração.

Para quem está começando, normalmente é mais didático escrever as propriedades separadas primeiro.

---

# 83. Propriedade `grid`

`grid` é um shorthand ainda mais amplo.

Ela pode representar propriedades como:

- `grid-template-rows`;
- `grid-template-columns`;
- `grid-template-areas`;
- `grid-auto-rows`;
- `grid-auto-columns`;
- `grid-auto-flow`.

Exemplo:

```css
.container {
  display: grid;
  grid: 150px / auto auto auto;
}
```

Isso cria:

- uma linha explícita de `150px`;
- três colunas automáticas.

> [!TIP]
> No começo, prefira propriedades separadas. O shorthand `grid` é poderoso, mas pode esconder muita coisa em uma única linha.

---

# 84. Layout básico usando linhas numéricas

HTML:

```html
<div class="layout">
  <header>Header</header>
  <main>Main</main>
  <aside>Aside</aside>
  <footer>Footer</footer>
</div>
```

CSS:

```css
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100px 1fr 80px;
  gap: 10px;
  min-height: 100vh;
}

header {
  grid-column: 1 / 3;
}

main {
  grid-column: 1 / 2;
}

aside {
  grid-column: 2 / 3;
}

footer {
  grid-column: 1 / 3;
}
```

---

# 85. O mesmo layout usando áreas

```css
.layout {
  display: grid;

  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100px 1fr 80px;

  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";

  gap: 10px;
  min-height: 100vh;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

aside {
  grid-area: aside;
}

footer {
  grid-area: footer;
}
```

Para páginas com regiões bem definidas, esse formato costuma ser muito fácil de visualizar.

---

# 86. Criando cards com Grid

HTML:

```html
<section class="cards">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
  <article class="card">Card 4</article>
  <article class="card">Card 5</article>
  <article class="card">Card 6</article>
</section>
```

CSS:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  padding: 20px;
  background-color: #ddd;
}
```

---

# 87. Problema em telas pequenas

Isto:

```css
grid-template-columns: repeat(3, 1fr);
```

sempre tenta manter três colunas.

Em uma tela pequena, os cards podem ficar apertados.

Podemos resolver de várias formas.

---

# 88. Responsividade com Media Query

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

Assim:

```text
Desktop → 3 colunas
Tablet  → 2 colunas
Celular → 1 coluna
```

---

# 89. Layout principal responsivo com áreas

Podemos adaptar nossa base.

## Desktop

```css
.container {
  display: grid;

  grid-template-columns: 3fr 3fr 2fr;

  grid-template-areas:
    "h h h"
    "m m a"
    "f f f";

  gap: 10px;
}
```

## Celular

```css
@media (max-width: 700px) {
  .container {
    grid-template-columns: 1fr;

    grid-template-areas:
      "h"
      "m"
      "a"
      "f";
  }
}
```

No celular, tudo passa a ficar em uma coluna.

---

# 90. `auto-fit`

Podemos criar grids responsivos sem necessariamente usar várias Media Queries.

Exemplo:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

Leia:

> crie quantas colunas couberem, desde que cada uma tenha pelo menos `200px`.

---

# 91. Entendendo `repeat(auto-fit, minmax())`

Código:

```css
grid-template-columns:
  repeat(auto-fit, minmax(200px, 1fr));
```

Vamos quebrar.

## `repeat()`

Repete colunas.

## `auto-fit`

O navegador calcula quantas colunas cabem.

## `minmax(200px, 1fr)`

Cada coluna:

- mínimo → `200px`;
- máximo → `1fr`.

Esse padrão é muito útil para:

- cards;
- galerias;
- produtos;
- painéis;
- dashboards.

---

# 92. `auto-fill`

Também existe:

```css
grid-template-columns:
  repeat(auto-fill, minmax(200px, 1fr));
```

`auto-fill` e `auto-fit` são parecidos, mas não se comportam exatamente da mesma maneira quando sobra espaço.

Regra prática inicial:

```css
repeat(auto-fit, minmax(...))
```

é excelente para layouts de cards que devem expandir e preencher o espaço.

---

# 93. `auto-fit` x `auto-fill`

De forma simplificada:

## `auto-fit`

Tende a recolher tracks vazios e permitir que os itens existentes ocupem melhor o espaço.

## `auto-fill`

Pode manter tracks possíveis mesmo quando não existem itens suficientes para preenchê-los.

Exemplo para testar:

```css
grid-template-columns:
  repeat(auto-fit, minmax(150px, 1fr));
```

Depois troque para:

```css
grid-template-columns:
  repeat(auto-fill, minmax(150px, 1fr));
```

Redimensione a janela e compare.

---

# 94. Um Grid dentro de outro Grid

Um Grid Item também pode virar um novo Grid Container.

HTML:

```html
<div class="pagina">

  <main class="conteudo">
    <article>Artigo 1</article>
    <article>Artigo 2</article>
    <article>Artigo 3</article>
  </main>

</div>
```

CSS:

```css
.pagina {
  display: grid;
}

.conteudo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

`.conteudo` é ao mesmo tempo:

- item do Grid externo;
- container do Grid interno.

---

# 95. `subgrid`

Em implementações modernas de Grid, `subgrid` permite que um Grid interno aproveite as tracks definidas pelo Grid pai.

Exemplo conceitual:

```css
.filho {
  display: grid;
  grid-template-columns: subgrid;
}
```

É um recurso mais avançado e deve ser estudado depois que os conceitos principais estiverem dominados.

---

# 96. Colunas nomeadas

Também podemos nomear Grid Lines.

Exemplo:

```css
.container {
  display: grid;

  grid-template-columns:
    [inicio] 1fr
    [meio] 2fr
    [fim] 1fr;
}
```

Depois podemos usar os nomes.

```css
.item {
  grid-column: inicio / fim;
}
```

É um recurso útil em layouts maiores, mas não é obrigatório para começar.

---

# 97. Linha final com número negativo

Em vários layouts podemos usar:

```css
grid-column: 1 / -1;
```

`-1` representa a última linha explícita do Grid.

Por exemplo:

```css
header {
  grid-column: 1 / -1;
}
```

Isso é muito útil para fazer o elemento atravessar todas as colunas sem precisar saber quantas existem.

---

# 98. Exemplo com `1 / -1`

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

header {
  grid-column: 1 / -1;
}
```

Mesmo com quatro colunas, não precisamos escrever:

```css
grid-column: 1 / 5;
```

Podemos usar:

```css
grid-column: 1 / -1;
```

---

# 99. Conteúdo maior que a coluna

Às vezes o Grid parece não obedecer ao tamanho esperado porque existe conteúdo muito grande.

Exemplo:

```css
grid-template-columns: 1fr 1fr;
```

Uma palavra, imagem ou conteúdo sem quebra pode forçar uma coluna.

Uma solução comum é:

```css
grid-template-columns:
  minmax(0, 1fr)
  minmax(0, 1fr);
```

Ou:

```css
.grid-item {
  min-width: 0;
}
```

---

# 100. Imagens dentro do Grid

Uma regra comum para imagens responsivas:

```css
img {
  max-width: 100%;
  display: block;
}
```

Assim a imagem não ultrapassa facilmente a largura da célula.

---

# 101. Exemplo de galeria

HTML:

```html
<section class="galeria">
  <img src="img1.jpg" alt="Imagem 1">
  <img src="img2.jpg" alt="Imagem 2">
  <img src="img3.jpg" alt="Imagem 3">
  <img src="img4.jpg" alt="Imagem 4">
</section>
```

CSS:

```css
.galeria {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(200px, 1fr));

  gap: 15px;
}

.galeria img {
  width: 100%;
  display: block;
}
```

---

# 102. Exemplo de dashboard

HTML:

```html
<section class="dashboard">
  <div class="card vendas">Vendas</div>
  <div class="card usuarios">Usuários</div>
  <div class="card acessos">Acessos</div>
  <div class="card grafico">Gráfico</div>
</section>
```

CSS:

```css
.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.grafico {
  grid-column: 1 / -1;
}
```

---

# 103. Layout de 12 colunas

Layouts profissionais muitas vezes trabalham com uma grade de 12 colunas.

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
```

Um item pode ocupar seis:

```css
.item {
  grid-column: span 6;
}
```

Outro pode ocupar quatro:

```css
.item {
  grid-column: span 4;
}
```

---

# 104. Por que 12 colunas?

Porque 12 pode ser dividido facilmente por:

```text
2
3
4
6
```

Então podemos criar muitas combinações.

Exemplos:

```text
6 + 6
4 + 4 + 4
3 + 3 + 3 + 3
8 + 4
9 + 3
```

---

# 105. Exemplo de 12 colunas responsivo

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.principal {
  grid-column: span 8;
}

.lateral {
  grid-column: span 4;
}

@media (max-width: 700px) {
  .principal,
  .lateral {
    grid-column: 1 / -1;
  }
}
```

---

# 106. `width` x tracks do Grid

Evite colocar larguras desnecessárias nos Grid Items.

Exemplo:

```css
.item {
  width: 500px;
}
```

Isso pode impedir o Grid de se adaptar corretamente.

Quando possível, deixe o Grid controlar a largura.

---

# 107. `height` x conteúdo

Também tome cuidado com alturas rígidas:

```css
grid-template-rows: 100px 300px 80px;
```

Se o conteúdo crescer demais, poderá ocorrer overflow.

Em muitos layouts reais é melhor usar:

```css
grid-template-rows: auto 1fr auto;
```

ou:

```css
grid-auto-rows: minmax(100px, auto);
```

---

# 108. Versão mais flexível da base

Podemos preservar a ideia da base, mas deixar a página mais adaptável.

```css
@charset "UTF-8";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  min-height: 100vh;
}

.container {
  min-height: 100vh;

  display: grid;

  grid-template-columns: 3fr 3fr 2fr;

  grid-template-rows:
    auto
    1fr
    auto;

  grid-template-areas:
    "h h h"
    "m m a"
    "f f f";

  gap: 10px;
}

header,
main,
aside,
footer {
  padding: 20px;
}

header {
  grid-area: h;
  background-color: rgb(226, 43, 80);
}

main {
  grid-area: m;
  background-color: rgb(43, 134, 226);
}

aside {
  grid-area: a;
  background-color: rgb(255, 255, 0);
}

footer {
  grid-area: f;
  background-color: rgb(43, 226, 134);
}

aside ul li {
  list-style-type: none;
}

@media (max-width: 700px) {

  .container {
    grid-template-columns: 1fr;

    grid-template-areas:
      "h"
      "m"
      "a"
      "f";
  }

}
```

---

# 109. Anatomia completa da versão original

Vamos interpretar:

```css
div.container {
  display: grid;
```

Ativa Grid.

```css
  grid-template-areas:
    "h h h"
    "m m a"
    "f f f";
```

Cria o mapa visual das áreas.

```css
  gap: 10px;
```

Adiciona espaço entre linhas e colunas.

```css
  grid-template-columns: 3fr 3fr 2fr;
```

Cria três colunas.

```css
  grid-template-rows: 20vh 70vh 10vh;
}
```

Cria três linhas.

Depois:

```css
header#header {
  grid-area: h;
}
```

coloca o header na área `h`.

```css
main#main {
  grid-area: m;
}
```

coloca o main na área `m`.

```css
aside#aside {
  grid-area: a;
}
```

coloca o aside na área `a`.

```css
footer#footer {
  grid-area: f;
}
```

coloca o footer na área `f`.

---

# 110. Mapa mental da base

```text
CONTAINER
│
├── display: grid
│
├── COLUNAS
│   └── 3fr 3fr 2fr
│
├── LINHAS
│   └── 20vh 70vh 10vh
│
├── ESPAÇO
│   └── gap: 10px
│
└── ÁREAS
    ├── h h h
    ├── m m a
    └── f f f
```

Itens:

```text
header → h
main   → m
aside  → a
footer → f
```

---

# 111. Propriedades do Grid Container

Estas são as principais propriedades que aparecem na referência de CSS Grid estudada neste guia:

| Propriedade | Função |
|---|---|
| `display` | ativa `grid` ou `inline-grid` |
| `grid-template-columns` | define as colunas |
| `grid-template-rows` | define as linhas |
| `grid-template-areas` | define áreas nomeadas |
| `grid-template` | shorthand dos templates |
| `column-gap` | espaço entre colunas |
| `row-gap` | espaço entre linhas |
| `gap` | shorthand dos gaps |
| `justify-content` | alinha o Grid horizontalmente |
| `align-content` | alinha o Grid verticalmente |
| `place-content` | shorthand de content |
| `justify-items` | alinha itens horizontalmente nas células |
| `align-items` | alinha itens verticalmente nas células |
| `place-items` | shorthand de items |
| `grid-auto-columns` | tamanho das colunas implícitas |
| `grid-auto-rows` | tamanho das linhas implícitas |
| `grid-auto-flow` | controla o fluxo automático |
| `grid` | shorthand amplo do Grid |

---

# 112. Propriedades dos Grid Items

| Propriedade | Função |
|---|---|
| `grid-column-start` | linha onde começa na coluna |
| `grid-column-end` | linha onde termina na coluna |
| `grid-column` | shorthand horizontal |
| `grid-row-start` | linha onde começa verticalmente |
| `grid-row-end` | linha onde termina verticalmente |
| `grid-row` | shorthand vertical |
| `grid-area` | nome ou posicionamento completo |
| `justify-self` | alinhamento horizontal de um item |
| `align-self` | alinhamento vertical de um item |
| `place-self` | shorthand de self |
| `order` | altera a ordem visual |

---

# 113. Valores importantes para tracks

Ao estudar Grid, você encontrará:

```text
px
%
fr
auto
min-content
max-content
minmax()
fit-content()
repeat()
subgrid
```

Exemplo:

```css
grid-template-columns:
  100px
  25%
  1fr
  minmax(150px, 2fr);
```

---

# 114. Erros comuns

## Esquecer `display: grid`

Errado:

```css
.container {
  grid-template-columns: 1fr 1fr;
}
```

Correto:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

---

# 115. Confundir coluna com linha

```css
grid-template-columns
```

controla o eixo horizontal.

```css
grid-template-rows
```

controla o eixo vertical.

---

# 116. Contar células em vez de Grid Lines

Em três colunas:

```text
┌────┬────┬────┐
```

existem quatro linhas verticais.

Por isso:

```css
grid-column: 1 / 4;
```

ocupa as três colunas.

---

# 117. Confundir `justify-content` com `justify-items`

## `justify-content`

move o conjunto do Grid.

## `justify-items`

move/alinha os itens dentro das células.

---

# 118. Misturar áreas e posicionamentos sem necessidade

Você pode usar:

```css
grid-template-areas
```

ou posicionamento por linhas.

Os dois podem coexistir em projetos avançados, mas no início é melhor evitar misturar técnicas sem necessidade.

---

# 119. Usar altura fixa demais

Isto:

```css
grid-template-rows: 100px 300px 80px;
```

pode ser útil em exercícios.

Mas páginas reais frequentemente precisam crescer com o conteúdo.

Uma opção:

```css
grid-template-rows: auto 1fr auto;
```

---

# 120. Esquecer responsividade

Um layout pode funcionar perfeitamente no computador e quebrar no celular.

Sempre teste:

- largura grande;
- tablet;
- celular.

---

# 121. Ferramenta visual do navegador

Os navegadores modernos possuem DevTools.

Abra:

```text
F12
```

ou:

```text
Ctrl + Shift + I
```

Selecione o elemento com Grid.

Em navegadores modernos, geralmente é possível visualizar:

- linhas;
- números das linhas;
- áreas;
- tracks;
- gaps.

Essa é uma das melhores formas de entender CSS Grid na prática.

---

# 122. Exercício 1 — três colunas

Crie:

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

Faça três colunas iguais.

## Solução

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

---

# 123. Exercício 2 — coluna maior

Crie três colunas onde a central tenha o dobro da largura.

## Solução

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

---

# 124. Exercício 3 — gap

Coloque:

- `20px` entre linhas;
- `40px` entre colunas.

## Solução

```css
.container {
  display: grid;
  gap: 20px 40px;
}
```

---

# 125. Exercício 4 — item ocupando tudo

Em um Grid de quatro colunas, faça o primeiro item ocupar toda a largura.

## Solução

```css
.item1 {
  grid-column: 1 / -1;
}
```

---

# 126. Exercício 5 — duas colunas

Faça um item ocupar duas colunas.

## Solução

```css
.item {
  grid-column: span 2;
}
```

---

# 127. Exercício 6 — layout semântico

Crie:

```text
HEADER
MAIN + ASIDE
FOOTER
```

## Solução

```css
.container {
  display: grid;

  grid-template-columns: 2fr 1fr;

  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

aside {
  grid-area: aside;
}

footer {
  grid-area: footer;
}
```

---

# 128. Exercício 7 — versão mobile

Transforme o layout anterior em uma coluna abaixo de `600px`.

## Solução

```css
@media (max-width: 600px) {

  .container {
    grid-template-columns: 1fr;

    grid-template-areas:
      "header"
      "main"
      "aside"
      "footer";
  }

}
```

---

# 129. Exercício 8 — cards automáticos

Crie cards com:

- largura mínima de `200px`;
- quantidade automática de colunas;
- `20px` de gap.

## Solução

```css
.cards {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(200px, 1fr));

  gap: 20px;
}
```

---

# 130. Exercício 9 — centralização completa

Centralize todos os itens dentro de suas células.

## Solução

```css
.container {
  display: grid;
  place-items: center;
}
```

---

# 131. Exercício 10 — Grid implícito

Crie três colunas e faça todas as linhas criadas automaticamente terem pelo menos `100px`.

## Solução

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

---

# 132. Projeto final

Vamos juntar vários conceitos.

## HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projeto CSS Grid</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <div class="container">

    <header id="header">
      <h1>Meu Site</h1>
    </header>

    <main id="main">

      <h2>Conteúdo</h2>

      <section class="cards">
        <article>Card 1</article>
        <article>Card 2</article>
        <article>Card 3</article>
        <article>Card 4</article>
      </section>

    </main>

    <aside id="aside">
      <h2>Menu</h2>

      <ul>
        <li>Início</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </aside>

    <footer id="footer">
      <p>Todos os direitos reservados.</p>
    </footer>

  </div>

</body>
</html>
```

## CSS

```css
@charset "UTF-8";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  min-height: 100vh;
}

.container {
  min-height: 100vh;

  display: grid;

  grid-template-columns:
    3fr 3fr 2fr;

  grid-template-rows:
    auto 1fr auto;

  grid-template-areas:
    "h h h"
    "m m a"
    "f f f";

  gap: 10px;
}

header,
main,
aside,
footer {
  padding: 20px;
}

#header {
  grid-area: h;
  background-color: rgb(226, 43, 80);
}

#main {
  grid-area: m;
  background-color: rgb(43, 134, 226);
}

#aside {
  grid-area: a;
  background-color: rgb(255, 255, 0);
}

#footer {
  grid-area: f;
  background-color: rgb(43, 226, 134);
}

#aside ul li {
  list-style-type: none;
}

.cards {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(180px, 1fr));

  gap: 15px;

  margin-top: 20px;
}

.cards article {
  padding: 20px;
  background-color: white;
}

@media (max-width: 700px) {

  .container {
    grid-template-columns: 1fr;

    grid-template-areas:
      "h"
      "m"
      "a"
      "f";
  }

}
```

---

# 133. Checklist de CSS Grid

Antes de considerar o assunto dominado, verifique se você consegue explicar:

- [ ] O que é CSS Grid?
- [ ] O que é Grid Container?
- [ ] O que é Grid Item?
- [ ] O que é Grid Line?
- [ ] O que é Grid Track?
- [ ] O que é Grid Cell?
- [ ] O que é Grid Area?
- [ ] Para que serve `display: grid`?
- [ ] Qual a diferença entre `grid` e `inline-grid`?
- [ ] Como criar colunas?
- [ ] Como criar linhas?
- [ ] O que significa `fr`?
- [ ] Para que serve `repeat()`?
- [ ] Para que serve `minmax()`?
- [ ] O que são `min-content` e `max-content`?
- [ ] Para que serve `fit-content()`?
- [ ] Para que serve `gap`?
- [ ] Qual a diferença entre `row-gap` e `column-gap`?
- [ ] Como funciona `grid-template-areas`?
- [ ] Para que serve `grid-area`?
- [ ] Como funcionam as Grid Lines?
- [ ] Para que serve `grid-column`?
- [ ] Para que serve `grid-row`?
- [ ] O que significa `span`?
- [ ] O que significa `1 / -1`?
- [ ] O que é Grid explícito?
- [ ] O que é Grid implícito?
- [ ] Para que serve `grid-auto-rows`?
- [ ] Para que serve `grid-auto-columns`?
- [ ] Para que serve `grid-auto-flow`?
- [ ] Para que serve `order`?
- [ ] Qual a diferença entre `justify-content` e `justify-items`?
- [ ] Qual a diferença entre `align-content` e `align-items`?
- [ ] Para que servem `justify-self` e `align-self`?
- [ ] Para que servem `place-content`, `place-items` e `place-self`?
- [ ] Como criar um Grid responsivo?
- [ ] Como usar `auto-fit`?
- [ ] Como usar `auto-fill`?
- [ ] Como criar cards responsivos com `minmax()`?
- [ ] Como reorganizar o layout com Media Query?

---

# 134. Resumo rápido

## Ativar Grid

```css
.container {
  display: grid;
}
```

## Criar colunas

```css
grid-template-columns: 1fr 1fr 1fr;
```

ou:

```css
grid-template-columns: repeat(3, 1fr);
```

## Criar linhas

```css
grid-template-rows: 100px 1fr 80px;
```

## Espaçamento

```css
gap: 20px;
```

## Áreas

```css
grid-template-areas:
  "h h"
  "m a"
  "f f";
```

## Associar item à área

```css
header {
  grid-area: h;
}
```

## Ocupar várias colunas

```css
.item {
  grid-column: span 2;
}
```

## Ocupar toda a largura

```css
.item {
  grid-column: 1 / -1;
}
```

## Grid responsivo automático

```css
grid-template-columns:
  repeat(auto-fit, minmax(200px, 1fr));
```

## Centralizar itens

```css
place-items: center;
```

## Centralizar o Grid

```css
place-content: center;
```

---

# 135. Tabela de consulta rápida

| Quero fazer... | Use |
|---|---|
| ativar Grid | `display: grid` |
| criar colunas | `grid-template-columns` |
| criar linhas | `grid-template-rows` |
| nomear regiões | `grid-template-areas` |
| ligar item a região | `grid-area` |
| criar espaço | `gap` |
| espaço horizontal | `column-gap` |
| espaço vertical | `row-gap` |
| repetir colunas | `repeat()` |
| limitar tamanho | `minmax()` |
| preencher cards automaticamente | `auto-fit` |
| manter tracks automáticos | `auto-fill` |
| ocupar duas colunas | `grid-column: span 2` |
| ocupar todas as colunas | `grid-column: 1 / -1` |
| escolher início/fim horizontal | `grid-column` |
| escolher início/fim vertical | `grid-row` |
| tamanho de linhas automáticas | `grid-auto-rows` |
| tamanho de colunas automáticas | `grid-auto-columns` |
| controlar preenchimento automático | `grid-auto-flow` |
| alinhar Grid horizontalmente | `justify-content` |
| alinhar Grid verticalmente | `align-content` |
| alinhar itens horizontalmente | `justify-items` |
| alinhar itens verticalmente | `align-items` |
| alinhar um item horizontalmente | `justify-self` |
| alinhar um item verticalmente | `align-self` |

---

# 136. Ordem recomendada de estudo

Estude nesta sequência:

1. `display: grid`;
2. Grid Container e Grid Items;
3. `grid-template-columns`;
4. `grid-template-rows`;
5. unidade `fr`;
6. `gap`;
7. Grid Lines;
8. `grid-column`;
9. `grid-row`;
10. `span`;
11. `grid-area`;
12. `grid-template-areas`;
13. `repeat()`;
14. `minmax()`;
15. alinhamentos;
16. Grid explícito e implícito;
17. `grid-auto-*`;
18. Media Queries;
19. `auto-fit`;
20. `auto-fill`;
21. shorthands;
22. layouts completos.

---

# 137. Referência das propriedades apresentadas

## Container

```css
display: grid;
display: inline-grid;

grid-template-columns: ...;
grid-template-rows: ...;
grid-template-areas: ...;
grid-template: ...;

gap: ...;
row-gap: ...;
column-gap: ...;

justify-content: ...;
align-content: ...;
place-content: ...;

justify-items: ...;
align-items: ...;
place-items: ...;

grid-auto-columns: ...;
grid-auto-rows: ...;
grid-auto-flow: ...;

grid: ...;
```

## Items

```css
grid-column-start: ...;
grid-column-end: ...;
grid-column: ...;

grid-row-start: ...;
grid-row-end: ...;
grid-row: ...;

grid-area: ...;

justify-self: ...;
align-self: ...;
place-self: ...;

order: ...;
```

## Funções e recursos úteis

```css
repeat()
minmax()
fit-content()
auto-fit
auto-fill
min-content
max-content
subgrid
span
```

---

# 138. Conclusão

CSS Grid fica muito mais simples quando você para de enxergar apenas propriedades isoladas e passa a enxergar uma **grade**.

Sempre pense nesta sequência:

```text
1. Quem é o container?
2. Quantas colunas eu quero?
3. Quantas linhas eu quero?
4. Como o espaço será dividido?
5. Preciso de gap?
6. Onde cada item deve ficar?
7. Preciso nomear áreas?
8. Como o layout deve mudar no celular?
```

A base estudada neste material:

```css
grid-template-areas:
  "h h h"
  "m m a"
  "f f f";

grid-template-columns: 3fr 3fr 2fr;
grid-template-rows: 20vh 70vh 10vh;
```

pode ser lida visualmente como:

```text
┌──────────────────────────────┐
│            HEADER            │
├────────────────────┬─────────┤
│                    │         │
│        MAIN        │  ASIDE  │
│                    │         │
├────────────────────┴─────────┤
│            FOOTER            │
└──────────────────────────────┘
```

Quando você consegue olhar o CSS e imaginar essa estrutura, CSS Grid deixa de parecer um conjunto de comandos e passa a funcionar como aquilo que realmente é:

> **um sistema para desenhar layouts em linhas e colunas.**

---

# Referências de estudo

Conteúdo organizado e explicado com base nos conceitos e propriedades presentes na documentação/tutorial de CSS Grid do W3Schools, incluindo Grid Layout, Grid Container, Grid Tracks, Grid Gaps, alinhamentos, Grid Items e referência das propriedades relacionadas.

- W3Schools — CSS Grid Layout
- W3Schools — CSS Grid Container
- W3Schools — CSS Grid Tracks
- W3Schools — CSS Grid Gap
- W3Schools — CSS Grid Align
- W3Schools — CSS Grid Items
- W3Schools — CSS Grid Item Naming
- W3Schools — CSS Grid Item Order
- W3Schools — CSS Grid Examples
- W3Schools — CSS Grid property references
