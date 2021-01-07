import express from "express";

const app = express();
const port = 3000;

app.get("/badges/:badgeId", (request, response) => {
  response.send(`read request - id: ${request.params.badgeId}`);
});
/*
------------------------------ read
[GET] /badges/{badge_id}

responses:
- response status codes
--- 200 (OK)
--- 404 (NOT FOUND)
- response JSON:
{
  id...
  name...
  contentId...
  ....
}
*/


app.listen(port, () => {
  console.log(`badges api is listening at http://localhost:${port}`);
});
