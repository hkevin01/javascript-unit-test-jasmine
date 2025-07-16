/**
 * Person class demonstrating object-oriented programming
 * for unit testing with Jasmine
 */
class Person {
    constructor(firstName, lastName, age = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.friends = [];
        this.hobbies = [];
    }

    /**
     * Get the person's full name
     * @returns {string} Full name in "First Last" format
     */
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    /**
     * Get the person's initials
     * @returns {string} Initials in "F.L." format
     */
    getInitials() {
        return `${this.firstName.charAt(0)}.${this.lastName.charAt(0)}.`;
    }

    /**
     * Set the person's age
     * @param {number} newAge - New age value
     * @throws {Error} If age is negative
     */
    setAge(newAge) {
        if (newAge < 0) {
            throw new Error('Age cannot be negative');
        }
        this.age = newAge;
    }

    /**
     * Get the person's age
     * @returns {number} Current age
     */
    getAge() {
        return this.age;
    }

    /**
     * Check if person is an adult (18 or older)
     * @returns {boolean} True if person is 18 or older
     */
    isAdult() {
        return this.age >= 18;
    }

    /**
     * Add a friend to the person's friend list
     * @param {Person} friend - Friend to add
     * @throws {Error} If friend is not a Person instance
     */
    addFriend(friend) {
        if (!(friend instanceof Person)) {
            throw new Error('Friend must be a Person instance');
        }
        
        if (friend === this) {
            throw new Error('Cannot add yourself as a friend');
        }
        
        if (!this.friends.includes(friend)) {
            this.friends.push(friend);
        }
    }

    /**
     * Remove a friend from the person's friend list
     * @param {Person} friend - Friend to remove
     */
    removeFriend(friend) {
        const index = this.friends.indexOf(friend);
        if (index > -1) {
            this.friends.splice(index, 1);
        }
    }

    /**
     * Get the list of friends
     * @returns {Person[]} Array of friends
     */
    getFriends() {
        return [...this.friends]; // Return a copy
    }

    /**
     * Get the number of friends
     * @returns {number} Number of friends
     */
    getFriendCount() {
        return this.friends.length;
    }

    /**
     * Check if a person is a friend
     * @param {Person} person - Person to check
     * @returns {boolean} True if person is a friend
     */
    isFriend(person) {
        return this.friends.includes(person);
    }

    /**
     * Add a hobby to the person's hobby list
     * @param {string} hobby - Hobby to add
     */
    addHobby(hobby) {
        if (typeof hobby !== 'string' || hobby.trim() === '') {
            throw new Error('Hobby must be a non-empty string');
        }
        
        const trimmedHobby = hobby.trim();
        if (!this.hobbies.includes(trimmedHobby)) {
            this.hobbies.push(trimmedHobby);
        }
    }

    /**
     * Remove a hobby from the person's hobby list
     * @param {string} hobby - Hobby to remove
     */
    removeHobby(hobby) {
        const index = this.hobbies.indexOf(hobby);
        if (index > -1) {
            this.hobbies.splice(index, 1);
        }
    }

    /**
     * Get the list of hobbies
     * @returns {string[]} Array of hobbies
     */
    getHobbies() {
        return [...this.hobbies]; // Return a copy
    }

    /**
     * Check if person has a specific hobby
     * @param {string} hobby - Hobby to check
     * @returns {boolean} True if person has the hobby
     */
    hasHobby(hobby) {
        return this.hobbies.includes(hobby);
    }

    /**
     * Greet another person
     * @param {Person} person - Person to greet
     * @returns {string} Greeting message
     */
    greet(person) {
        if (!(person instanceof Person)) {
            return 'Hello, stranger!';
        }
        
        if (this.isFriend(person)) {
            return `Hey ${person.firstName}! How are you doing?`;
        } else {
            return `Hello, ${person.getFullName()}. Nice to meet you!`;
        }
    }

    /**
     * Introduce yourself
     * @returns {string} Introduction message
     */
    introduce() {
        let introduction = `Hi, I'm ${this.getFullName()}`;
        
        if (this.age > 0) {
            introduction += ` and I'm ${this.age} years old`;
        }
        
        if (this.hobbies.length > 0) {
            introduction += `. I enjoy ${this.hobbies.join(', ')}`;
        }
        
        introduction += '.';
        return introduction;
    }

    /**
     * Get a string representation of the person
     * @returns {string} String representation
     */
    toString() {
        return `Person: ${this.getFullName()}, Age: ${this.age}`;
    }
}
