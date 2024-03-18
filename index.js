import chalk from "chalk"
import http from 'http'


const host = 'localhost'
const port = 8000

const server = http.createServer((request, response) => {
    response.end('<h1>hello World</h1>')
})

server.listen(port, host, () => console.log(chalk.red(`Server is running on http://${host}:${port}`)))

console.log("hello world")




console.log(chalk.blue('Samuel'));
console.log(chalk.green('Paul'));
console.log(chalk.yellow('Alex'));
console.log(chalk.red('Wara'));





