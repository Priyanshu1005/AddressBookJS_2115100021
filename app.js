class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!Contact.validateName(firstName) || !Contact.validateName(lastName)) {
            throw new Error('First name and last name must start with a capital letter and be at least 3 characters long.');
        }
        if (!Contact.validateAddress(address) || !Contact.validateAddress(city) || !Contact.validateAddress(state)) {
            throw new Error('Address, city, and state must be at least 4 characters long.');
        }
        if (!Contact.validateZip(zip)) {
            throw new Error('Invalid ZIP code. It should be a 6-digit number.');
        }
        if (!Contact.validatePhone(phone)) {
            throw new Error('Invalid phone number. It should be a 10-digit number.');
        }
        if (!Contact.validateEmail(email)) {
            throw new Error('Invalid email format.');
        }

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

    static validateName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    static validateAddress(value) {
        return /^.{4,}$/.test(value);
    }

    static validateZip(zip) {
        return /^\d{6}$/.test(zip);
    }

    static validatePhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    static validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }
}

const contacts = [];

// Function to add a new contact
function addContact(firstName, lastName, address, city, state, zip, phone, email) {
    try {
        const contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
        contacts.push(contact);
        console.log('Contact added successfully:', contact);
    } catch (error) {
        console.error('Error adding contact:', error.message);
    }
}

console.log(JSON.stringify(contacts));
addContact("Dheeraj", "Sharma", "Mathura", "CityName", "UttarPradesh", "281001", "1234567890", "dheeraj@gmail.com");
addContact("Abc", "Sharma", "Mathura", "CityName", "UttarPradesh", "281001", "1234567890", "abc@gmail.com");
addContact("Priyanshu", "Sharma", "Mathura", "CityName", "UttarPradesh", "281001", "1234567890", "priyanshu@gmail.com");
addContact("xyz", "Sharma", "Mathura", "CityName", "UttarPradesh", "281001", "1234567890", "xyz@gmail.com");
addContact("Sohan", "Sharma", "Mathura", "CityName", "UttarPradesh", "281001", "1234567890", "Sohan@gmail.com");
console.log(JSON.stringify(contacts));
