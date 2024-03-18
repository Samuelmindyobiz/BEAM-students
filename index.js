import chalk from "chalk"
import http from 'http'
import 'dotenv/config'
import fs from 'fs'
import axios from 'axios'


const host = process.env.HOST
const port = process.env.PORT
 
fs.writeFile('data.txt', 'hello world', 'utf-8', (err) => {
    if (err) throw err
})

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err

    axios.get('http://www.google.com')
  .then((response) => {
    fs.writeFile('google.html', response.data, (err) => {
      if (err) throw err;
      console.log('Google HTML file created successfully!');
    });
  })
  .catch((error) => {
    console.error('Error fetching data from Google:', error);
  });

    console.log('Data read from the file:');
    console.log(data);
})


console.log(process.env)

const server = http.createServer((request, response) => {
    response.end('<h1>hello World</h1>')
})

server.listen(port, host, () => console.log(chalk.red(`Server is running on http://${host}:${port}`)))

console.log("hello world")





// console.log(chalk.blue('Samuel'));
// console.log(chalk.green('Paul'));
// console.log(chalk.yellow('Alex'));
// console.log(chalk.red('Wara'));





