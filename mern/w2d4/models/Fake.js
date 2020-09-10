const faker = require('faker');

class Fake {
    constructor() {
        this.name = `${faker.name.title()} ${faker.name.firstName()} ${faker.name.lastName()}`;
        this.message = faker.hacker.phrase();
        this.company = `${faker.company.companyName()}`;
    }
}

module.exports = Fake;