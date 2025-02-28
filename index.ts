import * as readline from 'readline-sync';
import data from './data.json';
import { Car } from './interfaces';

console.log('Welcome to the JSON data viewer!');

let choice = readline.question("1. View all data\n2. Filter by ID\n3. Exit \nEnter your choice: ");

switch (choice) {
    case '1':
        console.log(data);
        break;
    case '2':
        let id = readline.question("Enter ID: ");
        let filteredData = data.filter((car: Car) => car.id == parseInt(id));
        console.log(filteredData);
        break;
    case '3':
        console.log('Exited');
        break;
    default:
        console.log('Invalid choice');
        break;
} 