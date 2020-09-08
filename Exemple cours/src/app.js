import express from "express";

const app = express();

app.get("/premiere", (req, res, next) => {
  console.log("Ma premiere route");
  res.status(200); // = OK
  res.set("Content-type", "text/plain");
  res.send("Notre première route avec express");
});

/*app.get("/somme", (req, res, next) => {
  const a = parseInt(req.query.a, 10);
  const b = parseInt(req.query.b, 10);
  const somme = a + b;
  res.status(200);
  res.set("Content-type", "text/plain");
  res.send(somme.toString());
});
*/
app.get("/:operation", (req, res, next) => {
  const operation = req.params.operation;
  console.log(operation);

  let resultat=0;

  //Operation =somme
  //difference=soustration
  //produit
  //quotient

  switch(operation){
      case'somme':

        break;
      case 'difference':
        break;
      case 'produit':
          break; 

  }

  res.status(200);
  res.set("Content-type", "text/plain");
  res.send(operation.toString());

});
export default app;
