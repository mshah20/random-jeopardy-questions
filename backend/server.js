const express = require('express');
const app = express();
const cors = require('cors')
const axios = require('axios');

app.use(cors())

const filterData = (data) => {
  return({
    question: data[0].question,
    answer: data[0].answer,
    category: data[0]["category"].title.toUpperCase(),
    price: data[0].value
  });
}

app.get("/random", async(req, res, next) => {
  
  try {
    const response = await axios.get("https://jservice.io/api/random")

    res.send(filterData(response.data));

  } catch (error) {
    res.send(error.message);
  }

})

app.listen(5000, () => {console.log("Server started on port 5000")})