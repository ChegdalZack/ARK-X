const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contacts = [];

function addContact() {
    rl.question('enter name: ', (name) => {
        rl.question('enter phone number: ', (phoneNumber) => {
            contacts.push({ name, phoneNumber });
            console.log('Contact added.');
            displayMenu();
            
        });
    });
}

function viewContacts() {
    if (contacts.length === 0) {
        console.log('No contacts found.');
    } else {
        console.log('Contacts:');
        contacts.forEach(contact => {
            console.log(`Name: ${contact.name}, Phone Number: ${contact.phoneNumber}`);
        });
    }
    displayMenu();
}

function searchContact() {
    rl.question('Enter name to search: ', (name) => {
        const contact = contacts.find(contact => contact.name === name);
        if (contact) {
            console.log(`Name: ${contact.name}, Phone Number: ${contact.phoneNumber}`);
        } else {
            console.log('Contact not found.');
        }
        displayMenu();
    });
}

function exitApp() {
    console.log('Exiting application.');
    rl.close();
}

function displayMenu() {
    console.log('\nMenu:');
    console.log('1. Add a contact');
    console.log('2. View all contacts');
    console.log('3. Search for a contact');
    console.log('4. Exit');
    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                addContact();
                break;
            case '2':
                viewContacts();
                break;
            case '3':
                searchContact();
                break;
            case '4':
                exitApp();
                break;
            default:
                console.log('Invalid choice please try again.');
                displayMenu();
                break;
        }
    });
}

displayMenu();

