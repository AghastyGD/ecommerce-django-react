# MiniShop - Django e React

Este projeto é um simples MiniShop desenvolvido com Django para o backend e React para o frontend, incluindo funcionalidades de pagamento usando a API de Braintree e Paypal. O aplicativo armazena informações de usuários, métodos de pagamento e pedidos em um banco de dados PostgreSQL.

## Configuração do Ambiente

_Está com pressa? Veja agora a [demonstração live](https://mini-shop-frontend.vercel.app/)_

### Configuração do Backend (Django)

1. Instale as dependências do projeto:

    ```bash
    pip install -r requirements.txt
    ```

2. Configure as variáveis de ambiente no arquivo `.env` na raiz do projeto. Exemplo:

    ```env
    DATABASE_NAME=seu_nome_de_banco
    DATABASE_USER=seu_usuario_de_banco
    DATABASE_PASS=sua_senha_de_banco
    DATABASE_HOST=seu_host_de_banco
    BT_MERCHANT_ID=sua_chave_merchant_id_do_Braintree
    BT_PUBLIC_KEY=sua_chave_publica_do_Braintree
    BT_PRIVATE_KEY=sua_chave_privada_do_Braintree
    ```

3. Execute as migrações do Django para criar o banco de dados:

    ```bash
    python manage.py migrate
    ```

4. Inicie o servidor Django:

    ```bash
    python manage.py runserver
    ```

### Configuração do Frontend (React)

1. Navegue até o diretório `frontend`:

    ```bash
    cd frontend
    ```

2. Instale as dependências do frontend:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento do React:

    ```bash
    npm start
    ```

## Funcionalidades Principais

- **Cadastro de Usuários:**
  - Os usuários podem se cadastrar no MiniShop, fornecendo informações básicas.

- **Sistema de Pagamento:**
  - O aplicativo integra a API de Braintree e Paypal para processar os pagamentos de pedidos.

- **Armazenamento de Informações:**
  - As informações dos usuários, métodos de pagamento e detalhes dos pedidos são armazenadas de forma segura no banco de dados PostgreSQL.


## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
