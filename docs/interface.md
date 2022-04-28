
# Projeto de Interface

O projeto de interface está organizado em 4 páginas: Home, Pets Perdidos e Encontrados, Pets para Adoção e Contato. O conteúdo foi organizado de forma que a pessoa tenha fácil acesso ao seu objeto, utilizando de cores específicas e característica para cada grupo principal: pets perdidos/encontrados e adoção. Dentro desses grupos principais subpáginas serão apresentadas conforme adição de anúncio de animais e interações com os anunciados.

Figma: https://www.figma.com/proto/tLhkBMWIw1jrK2vLHTgsSq/PetSearch?node-id=3%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2

## User Flow
![flux01-perdidos](https://user-images.githubusercontent.com/102265286/165527665-b11ddf3a-1c25-4cd2-b12b-93c72597d4ad.jpg)
![flux02-adocao](https://user-images.githubusercontent.com/102265286/165527682-edd9e506-676f-4bee-9adb-96ee42306dde.jpg)

### Home
A home foi pensada para que o usuário consiga visualizar rapidamente seu objetivo na plataforma. Organizada em 4 faixas: logo, pets perdidos/ecnotnrados e adoção com cores e textos mais chamativos e, por fim a galeria/carrosel de pets que já encontraram ou reencontraram seu lar.
![00_HOME](https://user-images.githubusercontent.com/102265286/165529829-1c529a68-02e7-46dc-8fff-6bf3c4c9d4a7.png)

### Pets Perdidos
por meio do clique no botão "Saiba Mais" na faixa dos pets perdidos na Home, ou por meio do menu superior de navegação, o usuário será digido para essa página. Nela buscamos organizar de forma bastante simples e clara as opções de quem deseja anunciar a perda de um animal e de quem encontrou um animal perdido. Também será inserida uma galeria com os anúncios de pets mais recentes e, logo abaixo, um botão para indicar o acesso para outra página que conterá todos os animais cadastrados ativos. Abaixo indicamos um campo que terá o mapeamento dos animais por meio do endereço fornecido no cadastro.
![PERDIDOS-1](https://user-images.githubusercontent.com/102265286/165650153-3d5df5be-ccc3-4f00-9aa5-6aaf99cc6468.png)
Clicando sobre o botão "perdi meu pet" o usuário será direcionado para uma página contendo um formulário para cadastro do anúncio:
![PERDIDOS-FORM1](https://user-images.githubusercontent.com/102265286/165650721-8d9cdcce-0546-4f8b-8b28-8855223f1fdf.png)
Da mesma forma, para aquele usuário que encontrou um pet perdido e deseja efetuar um anúncio, ao clicar em "encontrei um pet", será direcionado para o formulário abaixo:
![PERDIDOS-FORM2](https://user-images.githubusercontent.com/102265286/165650860-a4b21d82-5d73-46f4-bd93-c86093e330fb.png)
Ao clicar no ícone da seta lateral em "ver galeria completa", o usuário será dirigiado para a página seguinte, contendo todos os anúncios de pets perdidos e encontrados com uma breve descrição do animal.
![PERDIDOS-2](https://user-images.githubusercontent.com/102265286/165651330-f1b35e78-be6f-41ac-9ebf-7ca5c3e31ee4.png)
Ao clicar sobre um anúncio, seja na página anterior ou no card da galeria completa, por exemplo, no "Doguinho", uma página padrão de anúncio será aberta com fotos, descrição e geolocalização. O usuário encontrará botões que irão permitir que o dono se comunique diretamente com o tutor por meio do "SOU O DONO", relatar algum problema ou entrar em contato com a PetSearch sobre esse anúncio.
![PERDIDOS-3](https://user-images.githubusercontent.com/102265286/165651832-de44edfd-edb7-4676-a637-de669a848e74.png)
Clicando sobre "SOU O DONO", será direcionado a uma página de contato direto com o tutor:
![PERDIDOS-5](https://user-images.githubusercontent.com/102265286/165651873-3c1d8d25-5acc-45fa-aa0d-2319ffc51011.png)
Caso o tutor deseje alterar o anúncio, ao clicar em "Editar" na página de anúncio do animal, será exibido uma janela poup-up de confirmação de e-mail e posterior liberação do botão de edição, que fará com que o usuário retorne ao formulário inicialmente preenchido ou remover o anúncio.
![POPUP](https://user-images.githubusercontent.com/102265286/165652013-802dc94b-38a0-4117-97b9-430af55467c5.png)
Caso o anúncio seja de um pet perdido, feito pelo seu dono, como é o caso fictício do "Garfield", a página do anúncio é praticamente igual, muda apenas o botão que permitirá o contato direto do tutor - quem encontrou - com quem perdeu por meio do "ENCONTREI".
![PERDIDOS-4](https://user-images.githubusercontent.com/102265286/165652627-065c2a2a-ee48-4b2b-a9f3-f257b047592b.png)

### Adoção
por meio do clique no botão "Saiba Mais" na faixa dos pets perdidos na Home, ou por meio do menu superior de navegação, o usuário será digido para essa página. Utilizamos a mesma estrutura dos Animais Perdidos a fim de criar uma mesma linguagem visual, alterando apenas as cores e no caso especial dessa página, com a adição de um carrossel/galeria com links para as ONGs parceiras.
![ADOCAO-1](https://user-images.githubusercontent.com/102265286/165652879-0f6da08a-68f0-4ae0-b39f-a4698739a014.png)
O usuário que desejar doar um pet poderá criar um anúncio clicando em "fazer doação", e será direcionado para a página com o formulário abaixo:
![ADOCAO-FORM](https://user-images.githubusercontent.com/102265286/165653477-47c3ccad-c30b-4f94-a4ba-4e2f66d99bb1.png)
O usuário que deseja adotar um pet será dirigido, poderá clicar no botão "quero adotar" ou clicar no botão de seta lateral abaixo da galeria completa para visualizar todos os animais disponíveis para um novo lar.
![ADOCAO-2](https://user-images.githubusercontent.com/102265286/165653856-5d7b53d4-f40b-44c1-8eee-81b78a4377de.png)
Ao clicar sobre um anúncio, seja na página anterior ou no card da galeria completa, por exemplo, no "Easter", uma página padrão de anúncio será aberta com fotos, descrição e geolocalização. O usuário encontrará botões que irão permitir que o dono se comunique diretamente com o tutor ou ONG por meio do botão "QUERO ADOTAR", relatar algum problema ou entrar em contato com a PetSearch sobre esse anúncio. A funcionalidade de edição é igual à da pagina dos Pets Perdidos.
![ADOCAO-3](https://user-images.githubusercontent.com/102265286/165654026-5649eb82-ca21-453e-ace3-5483926886d0.png)
Clicando sobre "QUERO ADOTAR", será direcionado a uma página de contato direto com o tutor:
![ADOCAO-4](https://user-images.githubusercontent.com/102265286/165654078-9a55b1b3-e832-420a-8fa3-db384084a268.png)

### Contato
Através da homepage, no menu de navegação é possível acessar a opção "Contato" que leverá o usuário até a página de identificação do projeto. Na página é possível conhecer um pouco mais sobre a PetSearch e ter uma comunicação direta conosco.
![CONTATOGERAL](https://user-images.githubusercontent.com/102265286/165530826-9beeef59-827b-4946-8a98-306243724e47.png)



Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## User Flow

![Exemplo de UserFlow](img/userflow.jpg)

Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)


## Wireframes

![Exemplo de Wireframe](img/wireframe-example.png)

São protótipos usados em design de interface para sugerir a estrutura de um site web e seu relacionamentos entre suas páginas. Um wireframe web é uma ilustração semelhante do layout de elementos fundamentais na interface.
 
> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)
