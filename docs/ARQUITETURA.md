# 🏗️ Arquitetura da Plataforma

## Visão Geral

Arquitetura moderna de 3 camadas:
- **Frontend**: React 18 com Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB

## Estrutura de Pastas

```
plataforma-agencia/
├── frontend/                 # Aplicação React
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── styles/          # Estilos globais
│   │   ├── hooks/           # React Hooks customizados
│   │   ├── utils/           # Funções utilitárias
│   │   ├── context/         # Context API
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/                  # API Express
│   ├── src/
│   │   ├── routes/          # Rotas da API
│   │   ├── controllers/     # Lógica de negócio
│   │   ├── models/          # Schemas MongoDB
│   │   ├── middleware/      # Middleware Express
│   │   ├── utils/           # Utilitários
│   │   ├── config/          # Configurações
│   │   └── server.js
│   └── package.json
│
├── docs/                     # Documentação
│   ├── api/                 # Documentação da API
│   ├── design/              # Guia de design
│   └── ARQUITETURA.md
│
├── tests/                    # Testes automatizados
│   ├── unit/
│   └── integration/
│
├── .env.example             # Variáveis de ambiente
├── .gitignore
└── README.md
```

## Stack Tecnológico

### Frontend
- **React 18** - UI Library
- **React Router** - Roteamento
- **Tailwind CSS** - Styling
- **Axios** - HTTP Client
- **Formik + Yup** - Form Validation
- **Zustand** - State Management

### Backend
- **Node.js** - Runtime
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Autenticação
- **Multer** - Upload de Arquivos

## Fluxo de Dados

```
[Cliente Browser]
       ↓
   [Frontend React]
       ↓
   [API REST]
       ↓
   [Backend Express]
       ↓
   [MongoDB]
```

## Páginas Principais (Frontend)

1. **Home** - Landing page
2. **Serviços** - Listagem de serviços
3. **Portfólio** - Projetos realizados
4. **Sobre** - Informações da agência
5. **Contato** - Formulário de contato
6. **Dashboard Admin** - Painel administrativo

## Endpoints API (Backend)

### Autenticação
- `POST /api/v1/auth/register` - Registro
- `POST /api/v1/auth/login` - Login
- `GET /api/v1/auth/verify` - Verificar token

### Serviços
- `GET /api/v1/services` - Listar serviços
- `GET /api/v1/services/:id` - Detalhes do serviço
- `POST /api/v1/services` - Criar serviço (admin)
- `PUT /api/v1/services/:id` - Atualizar serviço (admin)
- `DELETE /api/v1/services/:id` - Deletar serviço (admin)

### Portfólio
- `GET /api/v1/portfolio` - Listar projetos
- `GET /api/v1/portfolio/:id` - Detalhes do projeto
- `POST /api/v1/portfolio` - Criar projeto (admin)
- `PUT /api/v1/portfolio/:id` - Atualizar projeto (admin)
- `DELETE /api/v1/portfolio/:id` - Deletar projeto (admin)

### Contatos
- `POST /api/v1/contacts` - Enviar mensagem
- `GET /api/v1/contacts` - Listar mensagens (admin)

## Segurança

- ✅ CORS habilitado
- ✅ JWT para autenticação
- ✅ Bcrypt para senhas
- ✅ Validação de entrada
- ✅ Rate limiting (a implementar)
- ✅ HTTPS em produção

## Deploy

### Frontend
- Vercel ou Netlify
- Build: `npm run build`

### Backend
- Heroku, Railway ou Google Cloud
- Port: 5000

### Database
- MongoDB Atlas (Cloud)
- Ou MongoDB Self-hosted

## Próximos Passos

1. ✅ Estrutura base criada
2. ⬜ Instalar dependências
3. ⬜ Implementar modelos do banco
4. ⬜ Criar controllers e rotas
5. ⬜ Construir componentes do frontend
6. ⬜ Integração frontend-backend
7. ⬜ Testes automatizados
8. ⬜ Deploy em produção

---

*Última atualização: 10 de Outubro de 2026*
