class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    displayContact() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
    }
}

const contacts = [];

// Function to add a new contact
function addContact(firstName, lastName, address, city, state, zip, phone, email) {
    const contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
    contacts.push(contact);
}

console.log(JSON.stringify(contacts));
addContact("Priyanshu", "Sharma", "Mathura", "CityName", "StateName", "281001", "1234567890", "priyanshu@example.com");
console.log(JSON.stringify(contacts));
