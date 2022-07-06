# Plano de Testes de Software

## Resultados Esperados

| Nº Teste | Página | Cenário de teste |
|-----------|-----------------------------------------|----|
|TF-001| Home | Ao abrir a index, é esperado que sejam carregados as faixas destinadas aos animais Perdidos, Adoção, carrossel de animais que já voltaram para casa, bem como a topbar. |
|TF-002| Home | Ao clicar em "PERDIDOS", no menu superior, é esperado que o usuário seja direcionado para a página "Pet Perdido?" |
|TF-003| Home | Ao clicar em "ADOÇÃO", no menu superior, é esperado que o usuário seja direcionado para a página "Adoção de Pets" |
|TF-004| Home | Ao clicar em "CONTATO", no menu superior, é esperado que o usuário seja direcionado para a página "Contato" |
|TF-005| Home | Ao clicar em "Saiba Mais", na faixa azul - "Pet Perdido?", é esperado que o usuário seja direcionado para a página "Pet Perdido?" |
|TF-006| Home | Ao clicar em "Saiba Mais", na faixa amarela - "Quer Adotar?", é esperado que o usuário seja direcionado para a página "Adoção de Pets" |
|TF-007| Home | Ao clicar nas setas laterais do carossel, é esperado que o usuário visualize todos os animais que já foram adotados ou que retornaram ao seu lar. |
|TF-008| Perdidos | Ao ser direcionado à página, é esperado que sejam carregados os cards com as opções de anunciar a perda do pet - "perdi meu pet" e a de "encontrei um pet", galeria com os mais recentes pets cadastrados, link para a galeria completa de anúncios de pets perdidos e por fim, mapa com localização dos bichinhos. |
|TF-009| Perdidos | Ao clicar em "perdi meu pet", é esperado que o usuário seja direcionado para a página contendo formulário para cadastro dos dados do animal perdido. |
|TF-010| Perdidos | Ao clicar em "encontrei um pet", é esperado que o usuário seja direcionado para a página contendo formulário para cadastro dos dados do animal encontrado. |
|TF-011| Perdidos | Ao clicar em sobre algum dos "cards" de anuncios de animais, é esperado que o usuário seja direcionado para a página contendo às informações do mesmo. |
|TF-012| Perdidos | Ao clicar em "ver galeria completa", é esperado que o usuário seja direcionado para a página contendo todos os cards de pets perdidos. |
|TF-013| Cadastro | Ao clicar em “perdi meu pet”, é esperado que o usuário seja direcionado para a página de cadastro do pet perdido. |
|TF-014| Cadastro | Ao clicar em “encontrei um pet”, é esperado que o usuário seja direcionado para a página de cadastro do pet encontrado. |
|TF-015| Cadastro | Ao preencher o “CEP”, os dados de “Rua”, “Bairro”, “Cidade” e “Estado” são automaticamente preenchidos. |
|TF-016| Cadastro | Ao preencher o formulário, o usuário deve ter a opção de tornar privado o e-mail e telefone.
|TF-017| Cadastro | Ao enviar o formulário, é esperado que o site apresente a mensagem de " Pet cadastrado com sucesso!" e, após apertar OK, retorne à página de cadastro de pet perdido. |
|TF-018| Cadastro | Ao clicar em “Doar um pet”, é esperado que o usuário seja direcionado para a página de cadastro de adoção. |
|TF-019| Cadastro | Ao preencher o “CEP”, os dados de “Rua”, “Bairro”, “Cidade” e “Estado” são automaticamente preenchidos. |
|TF-020| Cadastro | Ao preencher o formulário, o usuário deve ter a opção de tornar privado o e-mail e telefone. |
|TF-021| Cadastro | Ao enviar o formulário, é esperado que o site apresente a mensagem de " Pet cadastrado com sucesso!" e, após apertar OK, retorne à página de cadastro de pet para adoção.  | 
# Registro de Testes de Software

## Resultados Obtidos

| Nº Teste | Página | Resultado do Teste | Bugs? |
|----|-----------------------------------------|----|----|
|RTF-001| Home | Todos os elementos previstos foram carregados na index/homepage sem atrasos ou bugs. | NÃO |
|RTF-002| Home | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-003| Home | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-004| Home | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-005| Home | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-006| Home | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-007| Home | VERIFICAR!!!! | --- |
|RTF-008| Perdidos | Todos os elementos previstos foram carregados na página sem atrasos ou bugs. | NÃO |
|RTF-009| Perdidos | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-010| Perdidos | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-011| Perdidos | O usuário é direciona corretamente para a página esperada em todos os cards. | NÃO |
|RTF-012| Perdidos | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-013| Cadastro | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-014| Cadastro | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-015| Cadastro | Os dados são preenchidos automaticamente após a inserção do CEP. | NÃO |
|RTF-016| Cadastro | A opção de tornar privado o e-mail e telefone está presente, conforme o desejado. | NÃO |
|RTF-017| Cadastro | A página apresente a mensagem pop-up de êxito após envio de formulário, conforme desejado. | NÃO |
|RTF-018| Cadastro | O botão direciona corretamente o usuário para a página esperada. | NÃO |
|RTF-019| Cadastro | Os dados são preenchidos automaticamente após a inserção do CEP. | NÃO |
|RTF-020| Cadastro | A opção de tornar privado o e-mail e telefone está presente, conforme o desejado. | NÃO |
|RTF-021| Cadastro | A página apresenta a mensagem pop-up de êxito após envio de formulário, conforme desejado. | NÃO |

|RTF-005| Adoção - Galeria | O filtro apresenta corretamente as opções para o usuário e permite a sua correta filtragem pela raça. | NÃO |
|RTF-005| Perdidos - Galeria | O filtro apresenta corretamente as opções para o usuário e permite a sua correta filtragem pela raça. | NÃO |

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> 
Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

# Plano de Testes de Usabilidade

O Plano de Testes de Usabilidade tem como objetivo obter informações quanto ao atendimento das expectativas dos usuários em relação ao site, bem como, com relação à sua facilidade de uso.

Para isso, foram elaboradas três cenários, todas baseadas nas histórias dos usuários definidas nas especificações do projeto, e solicitou-se que três usuários desempenhassem a tarefa de cada um desses cenários, com o objetivo de apurar os seguintes indicadores:

- **Taxa de sucesso:** responde se o usuário conseguiu ou não executar a tarefa proposta;
- **Satisfação subjetiva:** responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala: 1) Péssimo; 2) Ruim; 3) Regular; 4) Bom; 5) Ótimo.
- **Tempo para conclusão da tarefa**: em segundos, e em comparação com o tempo utilizado quando um especialista na aplicação (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

## Cenários do Teste de Usabilidade

| Nº Cenário | Descrição do cenário |
|-----------|-----------------------|
| 1         | Você é uma pessoa que quer adotar um pet. Encontre UM GATO para adoção e entre em contato com o tutor por formulário de contato para realizar a adoção. | 
| 2         | Você é um tutor que perdeu o seu pet. Divulgue o seu pet perdido no site juntamente com as suas informações de contato para localizar o seu pet. |
| 3         | Você é uma pessoa que encontrou um pet perdido, mas o pet foi devolvido ao dono após o seu anúncio no sistema. Notifique no site que o pet PITBULL PRETO foi devolvido para informar as pessoas de que o pet não está mais perdido. Seu e-mail é jmaragao@email.com. |

# Registro dos Testes de Usabilidade

**Cenário 1:** Você é uma pessoa que quer adotar um pet. Encontre UM GATO para adoção e entre em contato com o tutor por formulário de contato para realizar a adoção.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|--------------------------------|
| 1       | SIM             | 5 - Ótimo            | 165 segundos                   |
| 2       | SIM             | 5 - Ótimo            | 123 segundos                   |
| 3       | SIM             | 5 - Ótimo            | 96 segundos                    |
| 4       | SIM             | 4 - Bom              | 102 segundos                   |
| Média   | 100%            | 4,75                 | 121 segundos                   |
| Tempo para conclusão pelo especialista|  |       | 45 segundos                    |

*Comentários dos usuários:*
> 4: "Tive um pouco de confusão ao clicar em adotar e ser redirecionado para a tela de contato, fiquei confuso se o formulário era pra preenchimento dos meus dados ou da pessoa que está oferecendo o animal para adoção"

**Cenário 2:** Você é um tutor que perdeu o seu pet. Divulgue o seu pet perdido no site juntamente com as suas informações de contato para localizar o seu pet.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|--------------------------------|
| 1       | SIM             | 5 - Ótimo            | 245 segundos                   |
| 2       | SIM             | 4 - Bom              | 260 segundos                   |
| 3       | SIM             | 5 - Ótimo            | 184 segundos                   |
| 4       | SIM             | 5 - Ótimo            | 84 segundos                    |
| Média   | 100%            | 4,75                 | 193 segundos                   |
| Tempo para conclusão pelo especialista |  |      | 73 segundos                    |

**Cenário 3:** Você é uma pessoa que encontrou um pet perdido, mas o pet foi devolvido ao dono após o seu anúncio no sistema. Notifique no site que o pet PITBULL PRETO foi devolvido para informar as pessoas de que o pet não está mais perdido. Seu e-mail é jmaragao@email.com.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|--------------------------------|
| 1       | SIM             | 4 - Bom              | 80 segundos                    |
| 2       | SIM             | 5 - Ótimo            | 110 segundos                   |
| 3       | SIM             | 4 - Bom              | 238 segundos                   |
| 4       | SIM             | 5 - Ótimo            | 26 segundos                    |
| Média   | 100%            | 4,5                  | 113 segundos                   |
| Tempo para conclusão pelo especialista|  |       | 25 segundos                    |

*Comentários dos usuários:*
> 3: "Não consegui localizar o pet facilmente pois ele não estava na página inicial dos pets perdidos e não percebi, de primeira, que havia um botão para ver a galeria completa. Quando encontrei o pet na galeria, foi fácil concluir a tarefa, mas demorei para encontrá-lo."

# Avaliação dos Testes de Usabilidade

De acordo com os resultados obtidos, verificamos que a aplicação web traz bons resultados quanto à taxa de sucesso dos usuários, tendo em vista que todos eles concluíram as tarefas propostas com sucesso.

Da mesma forma, verificamos que a aplicação obteve uma elevada satisfação subjetiva dos usuários ao realizarem os cenários propostos, vez que a média das avaliações em todos os cenários ficou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas etc. Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos que há oportunidades de melhoria na usabilidade da aplicação.