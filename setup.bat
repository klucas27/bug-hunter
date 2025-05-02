@echo off
echo =====================================
echo 🚀 Iniciando a configuração do projeto Bug Hunter...
echo =====================================

:: Verificar se o Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js não está instalado. Por favor, instale o Node.js antes de continuar.
    exit /b 1
)

:: Verificar se o npm está instalado
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm não está instalado. Por favor, instale o npm antes de continuar.
    exit /b 1
)

echo ✅ Node.js e npm encontrados.

:: Verificar se a pasta frontend existe
if not exist "frontend" (
    echo ⚠️ Repositório não encontrado. Certifique-se de que você está na pasta correta.
    exit /b 1
)

:: Instalar dependências do frontend
echo =====================================
echo 📦 Instalando dependências do frontend...
echo =====================================
cd frontend
npm install

:: Configurar ESLint e Prettier (opcional)
echo =====================================
echo ⚙️ Configurando ESLint e Prettier...
echo =====================================
npm install eslint prettier --save-dev
npx eslint --init
echo {} > .prettierrc

:: Voltar para a pasta raiz
cd ..

:: Mensagem final
echo =====================================
echo ✅ Configuração concluída com sucesso!
echo =====================================
echo 📌 Para iniciar o servidor de desenvolvimento, execute os seguintes comandos:
echo cd frontend
echo npm run dev
pause