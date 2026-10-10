# 📖 Guia de Desenvolvimento

## 🚀 Começando

### 1. Clonar e Configurar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/plataforma-agencia.git
cd plataforma-agencia

# Configure as variáveis de ambiente
cp .env.example .env
# Edite .env com suas configurações
```

### 2. Instalar Dependências

```bash
# Backend
cd backend
npm install

# Frontend (em outro terminal)
cd frontend
npm install
```

### 3. Iniciar Desenvolvimento

```bash
# Terminal 1 - Backend
cd backend
npm run dev
# Backend rodará em http://localhost:5000

# Terminal 2 - Frontend
cd frontend
npm start
# Frontend abrirá em http://localhost:3000
```

## 📝 Padrões de Código

### Componentes React

```javascript
// components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button 
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

export default Button;
```

### Controllers Express

```javascript
// backend/src/controllers/serviceController.js
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
```

### Models Mongoose

```javascript
// backend/src/models/Service.js
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Service', serviceSchema);
```

## 🧪 Testes

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## 📦 Git Workflow

```bash
# Criar feature branch
git checkout -b feature/nova-funcionalidade

# Fazer commits
git add .
git commit -m "feat: descrição da funcionalidade"

# Push para repositório
git push origin feature/nova-funcionalidade

# Criar Pull Request no GitHub
```

## 🔍 Commits Semânticos

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, sem alterações de lógica
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Tarefas de build, dependencies, etc

## 📚 Dependências Principais

### Frontend
- React 18
- React Router
- Tailwind CSS
- Axios

### Backend
- Express.js
- MongoDB + Mongoose
- JWT
- bcryptjs

## 🐛 Troubleshooting

### Porta 3000 ou 5000 já em uso
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### MongoDB não conecta
- Verifique se MongoDB está rodando
- Verifique a `DATABASE_URL` no `.env`
- Para MongoDB Atlas, use a string de conexão completa

### CORS errors
- Verifique a configuração de CORS no backend
- A URL do frontend deve estar na whitelist

## 🌐 Variáveis de Ambiente

Sempre copie `.env.example` para `.env` e configure:

```
BACKEND_PORT=5000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/agencia
REACT_APP_API_URL=http://localhost:5000
JWT_SECRET=sua-chave-secreta
```

---

*Para dúvidas, verifique a documentação da API em `docs/api/`*
