#!/bin/bash

# Caminho do arquivo: /home/lucas/Documents/bug-hunter/setup.sh

echo "====================================="
echo "🚀 Iniciando a configuração do projeto Bug Hunter..."
echo "====================================="

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "❌ Node.js não está instalado. Por favor, instale o Node.js antes de continuar."
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null
then
    echo "❌ npm não está instalado. Por favor, instale o npm antes de continuar."
    exit 1
fi

echo "✅ Node.js e npm encontrados."

# Clonar o repositório (opcional, se o script for usado fora do repositório)
if [ ! -d "./frontend" ]; then
    echo "⚠️ Repositório não encontrado. Certifique-se de que você está na pasta correta."
    exit 1
fi

# Instalar dependências do frontend
echo "====================================="
echo "📦 Instalando dependências do frontend..."
echo "====================================="
cd frontend
npm install

# Configurar ESLint e Prettier (opcional)
echo "====================================="
echo "⚙️ Configurando ESLint e Prettier..."
echo "====================================="
npm install eslint prettier --save-dev
npx eslint --init
echo "{}" > .prettierrc

# Voltar para a pasta raiz
cd ..

# Mensagem final
echo "====================================="
echo "✅ Configuração concluída com sucesso!"
echo "====================================="
echo "📌 Para iniciar o servidor de desenvolvimento, execute os seguintes comandos:"
echo "cd frontend"
echo "npm run dev"