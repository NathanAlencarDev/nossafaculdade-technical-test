#!/bin/sh

echo "⏳ Aguardando banco de dados ficar disponível..."

until nc -z -v -w30 db 5432
do
    echo "⛔ Banco de dados ainda não disponível. Tentando novamente..."
    sleep 3
done

echo "✅ Banco de dados disponível. Iniciando setup..."

npx prisma generate
npx prisma migrate deploy

echo "🌱 Rodando seeds..."
npx tsx prisma/seed.ts
npx tsx prisma/seedUser.ts

echo "🚀 Iniciando o servidor Next.js..."
exec npm run dev
