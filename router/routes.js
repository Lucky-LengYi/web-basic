exports.setRouter = function (app) {
  app.use('/', require('./routers/index'));
};
