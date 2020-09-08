const http=require('http'); //Ëquivalent d'un include

const hostname='127.0.0.1';
const port=3000;

const serveur = http.createServer((req,res)=>{
    //objectif : retourner une reponse
    console.log('nous sommes dans le code du serveur');
    req.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    console.log(req.url);
    res.end('Bonjour du cours 3E4');

});

serveur.listen(port,hostname,()=>{
    console.log(`Le serveur est en fonction http://${hostname}:${port}`)
});
