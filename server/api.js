module.exports = app => {
  let todos = [
    {
      id: 1,
      completed: false,
      title: 'Learn Vue'
    },
    {
      id: 2,
      completed: false,
      title: 'Learn React'
    },
    {
      id: 3,
      completed: false,
      title: 'Learn Angular'
    }
  ];

  app.get('/todos', (req, res) => {
    setTimeout(() => {
      res.status(200).json(todos);
    }, 1000);
  });

  app.post('/todos', (req, res) => {
    todos = req.body;
    res.status(201).json(todos);
  });
};
