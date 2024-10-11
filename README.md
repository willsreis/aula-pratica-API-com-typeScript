#INICIA O PROJETO 
npm init -y
#INSTALA DEPENDENCIAS DE DESENVOLVIMENTO DO PROJETO 
npm i -D typescript ts-node @types/node
#INICIA O TYPESCRIPT NO PROJETO
npx tsc --init
#INSTALA DEPENDENCIA FRAMEWORK DE ROTAS
npm i express
#INSTALA DEPENDENCIAS DE DESENVOLVIMENTO TYPE EXPRESS
npm i -D @types/express
#INSTALA DEPENDENCIAS DE DESENVOLVIMENTO ORM PRISMA
npm i -D prisma
#INICIA O PRISMA
npx prisma init
#INICIAR O 
npx prisma db push
#INSTALA DEPENDENCIAS DE DESENVOLVIMENTO 
npm i -D @swc/core @swc/helpers nodemon
#ADICIONA SCRIPT NO PACKEGE.JSON
"dev":"nodemon --exec ts-node --swc src/server.ts"