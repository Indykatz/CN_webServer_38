// import entire express library
const express = require("express");
// creating app obj that houses servers instructions
const app = express();
// port const
const port = process.env.PORT || 5001;
// telling app to use the public folder, when a request is made to /static
app.use("/static", express.static("public"));
// listening on localhost:5001 for requests to our webserver
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
