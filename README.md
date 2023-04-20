<h1 align="center"> Lab Medicine </h1>
<p align="center">
Lab medicine é um gerenciador de API baseado no funcionamento de uma clínica, esse aplicativo foi criado para poder adicionar pacientes, médicos e enfermeiros, você também pode atualizar, mostrar os dados de todos ou de cada um individualmente e excluí-los de suas listas e registrar cada vez que é marcada uma consulta e com qual médico o paciente foi atendido

Este aplicativo ajudará você a manter seus dados organizados criando um identificador para cada pessoa, também oferece
a possibilidade de modificá-lo em tempo real gerando dados confiáveis.
</p>

<h2 align="center"> Tecnologias utilizadas<h2/>


<li>ES6(ECMASCRIPT)</li>
<p>como linguagem base do nosso projeto</p>
<img src="./src/img/js.png">
<br><br>

<li>PostgreSQL</li>
<p>como gerenciador de banco de dados</p>
<img  src="./src/img/post.png">
<br>


<li>Sequelize</li>
<p>com o Sequelize podemos usar a linguagem de programação que já estamos usando no backend para conectar e operar o banco de dados.</p>
<img src="./src/img/seq.png"> 
<br>

<li>Express</li>
<p>vai nos ajudar a gerenciar requisições de diferentes verbos http em diferente URLs</p>
<img src="./src/img/express.png">
<br>

<li>Insomnia</li>
<p>Este framework vai nos ajudar a testar nossas requisições corretamente</p>
<img src="./src/img/inso.png">
<br>



<h2>Descrição de como executar</h2>

Clone o projeto

```bash
  git clone https://github.com/miche0077/Project-LabMedicine.git
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
  npm install --save sequelize
  npm install express --save
  npm install pg pg-hstore
```

Inicie o servidor

```bash
  npm start

```
<h2> Como esta organizado?</h2>
<p>
Pasta SRC, contém subdiretórios para controladores, banco de dados, modelos e rotas. 
O diretório CONTROLLERS possui subdiretórios para os módulos do projeto, incluindo atendimentos, médicos, enfermeiros e pacientes. 
O diretório DATABASE contém o arquivo index.js com dados de conexão com o banco de dados.
O diretório MODELS inclui arquivos de modelo para criar  controladores com base em seus atributos.
ROUTES possui as rotas URL padrão </p>

<h2>Gerenciando Patients</h2>
<p> Para cadastrar um novo paciente deve preencher os dados requeridos e você deve usar a seguinte rota: </p>
```http
  GET /api/patient
```

<p> Sera  **obrigatorio** </p>

1. emergency_contact
2. date_of_birth
3. cpf

<i> Será verificado se o cpf já está cadastrado no banco de dados se já estiver cadastrado não poderá continuar com o cadastro </i>
##Example
<img src="./src/img/newpatient.png">