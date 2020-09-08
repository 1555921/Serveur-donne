import chalk from 'chalk';



import app from './src/app.js';
const PORT=5000;

app.listen(PORT,err => {
    console.log(chalk.rgb(34,200,8)(`Mon serveur est démarrer et écoute sur le port ${PORT}`));
})
