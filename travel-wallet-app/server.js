const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server.json');
const middlewares = jsonServer.defaults();

// Configurar middleware para habilitar CORS
server.use(middlewares);

// Adicionar rota para atualização (PUT) específica
server.put('/posts/:id', (req, res, next) => {
  // Implemente aqui a lógica para atualizar o recurso
  // Normalmente, você atualizaria o arquivo "db.json" com os novos dados
  // e responderia com os dados atualizados
});

// Usar o roteador JSON Server
server.use(router);

// Iniciar o servidor na porta desejada (por exemplo, 3000)
server.listen(3000, () => {
  console.log('JSON Server está em execução na porta 3000');
});
