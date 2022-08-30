const express = require("express");

const app = express();

const port = process.env.APP_PORT ?? 5000;

app.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });