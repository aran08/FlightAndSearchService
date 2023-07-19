const express = require("express");
const bodyParser = require("body-parser");
const CityRepository = require('./repository/City-repository');
const { PORT } = require("./config/serverConfig");
const apiRoutes = require('./routes/index');

const setupAndStartServer = async () => {
  // create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api',apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    
    const repo = new CityRepository();
    repo.createCity({name : "New delhi"});
  });
};

setupAndStartServer();
