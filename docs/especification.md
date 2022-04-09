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

> **Links Úteis**:
>
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                  | Prioridade |
| ------ | --------------------------------------- | ---------- |
| RF-001 | Permitir que o usuário cadastre tarefas | ALTA       |
| RF-002 | Emitir um relatório de tarefas no mês   | MÉDIA      |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                            | Prioridade |
| ------- | ----------------------------------------------------------------- | ---------- |
| RNF-001 | O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA      |
| RNF-002 | Deve processar requisições do usuário em no máximo 3s             | BAIXA      |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
  (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
  correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
  Lembre-se que cada requisito deve corresponder à uma e somente uma
  característica alvo da sua solução. Além disso, certifique-se de que
  todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre |
| 02  | Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
>
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
