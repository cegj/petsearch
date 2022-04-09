# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1. Luis Fernando tem 25 anos, é aluno de graduação da PUC-MG e recentemente mudou-se do centro da cidade para uma casa em um bairro periférico. Acostumado com toda a movimentação do centro da cidade e por estar longe de seus amigos, resolveu buscar por um pet pra lhe fazer companhia. Logo ele busca informações para adotar um animal.
2. Beatriz, mulher de 62 anos, recém aposentada decidiu dedicar parte do seu tempo livre a causas sociais. Ela trabalha meio período em uma ONG belo-horizontina que identifica, recolhe, trata e cuida de animais em situação da abandono. Uma de suas tarefas na organização é promover a adoção dos animais recuperados.
3. Maria Julia, estudante de 17 anos, mora com os pais na cidade de Belo Horizonte, Minas Gerais. No seu caminho de volta da escola para casa ela encontrou, sob alguns detritos de construção, um filhote de poodle. Ela logo o acolheu e percebeu que ele tinha uma coleira com seu nome, sinal de que poderia ter fugido e estar sendo procurado pelo seu tutor. Sendo assim, Maria Julia gostaria de divulgar o achado para tentar chegar ao dono do cão e devolvê-lo.
4. José tem 42 anos, é solteiro e é médico no Hospital João XXIII. Ao voltar chegar em casa, após um longo plantão, ele repara a porta de entrada entreaberta porém todos os seus itens estavam nos seus lugares, tudo parecia bem. Porém, ele logo nota que suas duas gatas de estimação haviam desaparecido. Agora, ele busca desesperadamente por informações sobre o paradeiro das suas pets.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`                | QUERO/PRECISO ... `FUNCIONALIDADE`                                                            | PARA ... `MOTIVO/VALOR`                                                      |
| ----------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Pessoa que quer adotar um pet       | Consultar uma relação de pets para adoção com informações de contato dos tutores              | Realizar a adoção                                                            |
| Tutor que tem um pet para adoção    | Divulgar informações do pet e minhas informações de contato                                   | Encontrar um adotante                                                        |
| Tutor que tem um pet para adoção    | Notificar quando o pet for adotado                                                            | Informar às pessoas de que o pet não se encontra mais disponível para adoção |
| Pessoa que encontrou um pet perdido | Consultar uma relação de pets perdidos na região e as informações de contato dos seus tutores | Devolver o pet à sua família                                                 |
| Pessoa que encontrou um pet perdido | Divulgar as informações do pet perdido e as minhas informações de contato                     | Devolver o pet à sua família                                                 |
| Pessoa que encontrou um pet perdido | Notificar quando o tutor do pet for localizado                                                | Informar as pessoas de que o pet não está mais perdido                       |
| Tutor que perdeu um pet             | Divulgar características do pet e minhas informações de contato                               | Localizar o meu pet                                                          |
| Tutor que perdeu um pet             | Consultar uma relação de pets encontrados na região                                           | Localizar o meu pet                                                          |
| Tutor que perdeu um pet             | Notificar quando o meu pet for localizado                                                     | Informar as pessoas de que o pet não está mais perdido                       |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                   | Prioridade |
| ------ | -------------------------------------------------------------------------------------------------------- | ---------- |
| RF-001 | Permitir que o usuário cadastre um animal perdido                                                        | ALTA       |
| RF-002 | Permitir que o usuário altere um cadastro de um animal perdido                                           | ALTA       |
| RF-003 | Permitir que o usuário remova um cadastro de um animal perdido                                           | ALTA       |
| RF-004 | Permitir que o usuário verifique o animal como "encontrado"                                              | ALTA      |
| RF-005 | Disponibilizar funcionalidade que permita pesquisar animais com filtro personalizado                     | MÉDIA     |
| RF-006 | Disponibilizar funcionalidade que permita definir se o pet é um animal perdido ou disponível para adoção	| MÉDIA      |
| RF-007 | Disponibilizar funcionalidade que permita pesquisar ONG cadastradas                                      | BAIXA     |
| RF-008 | Disponibilizar sessão com dados para doações às ONGs                                                     | BAIXA      |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                          | Prioridade |
| ------- | ----------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O sistema deve ser responsivo para rodar em qualquer dispositivo: Browser, Smartphone e Tablet  | ALTA     |
| RNF-002 | Disponibilidade de adaptação da interface pró acessibilidade                                    | ALTA     |
| RNF-003 | A página deverá ter disponibilidade em 90% do tempo                                             | BAIXA     |
| RNF-004 | Deve processar requisições do usuário em no máximo 3s                                           | BAIXA     |



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até a data 08/07/2022   |
| 02  | FrontEnd desenvolvido em HTML, CSS e JavaScript       |
| 03  | Não é permitido a venda de animais                    |
