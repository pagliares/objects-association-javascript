class Guest {
    constructor(name) {
      this.name = name;
      this.phones = []; // one-to-many association
    }

    addPhone(phoneNumber){
        this.phones.push(phoneNumber);
    }
  }
  
  class Address {
    constructor(street, city) {
      this.street = street;
      this.city = city;
    }
  }

  class Phone {
    constructor(number) {
        this.number = number;
    }

  }
  
const guest1 = new Guest("John");
const address1 = new Address("123 Main St", "New York");
const phone1 = new Phone("123-456-7890");
const phone2 = new Phone("987-654-3210");

guest1.address = address1; // one to one association
guest1.addPhone(phone1);
guest1.addPhone(phone2);

console.log(guest1.name);       // "John"
console.log(guest1.address.street); // "123 Main St"
console.log(guest1.address.city);   // "New York"
console.log(guest1.phones[0].number); // "123-456-7890"
console.log(guest1.phones[1].number); // "987-654-3210"


class Student {
    constructor(name) {
      this.name = name;
      this.courses = [];
    }
  
    enroll(course) {
      this.courses.push(course);
      course.students.push(this);
    }
}
  
class Course {
    constructor(courseName) {
      this.courseName = courseName;
      this.students = [];
    }
}
  
  const student1 = new Student("Alice");
  const student2 = new Student("Bob");

  const mathCourse = new Course("Math");
  const scienceCourse = new Course("Science");
  
  student1.enroll(mathCourse);
  student1.enroll(scienceCourse);
  student2.enroll(mathCourse);
  
  console.log(student1.name); // "Alice"
  console.log(student1.courses[0].courseName); // "Math"
  console.log(student1.courses[1].courseName); // "Science"
  
  console.log(mathCourse.courseName); // "Math"
  console.log(mathCourse.students[0].name); // "Alice"
  console.log(mathCourse.students[1].name); // "Bob"

/*

Question 1: How associations between objects are implemented in JavaScript (class notation)?

Answer: In JavaScript, associations between objects can be implemented using classes and object-oriented programming concepts. You can define relationships between objects by creating instances of those classes and storing references to other objects within those instances.  

Here's a brief overview of how associations between objects can be implemented using class notation in JavaScript:

1. Define Classes: Define classes for the objects you want to associate. Classes are created using the class keyword.
2. Create Instances: Instantiate objects from the defined classes. These instances will represent the objects you want to associate.
3. Establish Associations: You can establish associations between objects by storing references to one object within another object. For example, you can associate a Person with an Address by adding an address property to the Person instance.
4. Access Associated Objects: You can access associated objects by referencing the properties that hold the references to other objects.

You can also create more complex associations and relationships by using arrays, maps, or other data structures to manage multiple associations. For example, you might have an array of addresses associated with a person or a map of relationships between different objects.

Associations can be one-to-one, one-to-many, or many-to-many, depending on your specific requirements. By using classes and object-oriented principles, you can build and manage complex data structures and relationships in your JavaScript code.


Question 2: Is it a good practice to have bidirectional associations in javascript?

Answer: Bidirectional associations can be useful in JavaScript, but they come with some considerations and trade-offs. Whether it's a good practice or not depends on the specific requirements of your application and how you manage the associations. Here are some points to consider:

Pros of Bidirectional Associations:

1. Flexibility: Bidirectional associations allow you to easily navigate and access associated objects from both sides, which can be convenient in various scenarios.

2. Consistency: Keeping both sides of the association in sync can help maintain consistency in your data. If you add a student to a course, the student's list of courses is automatically updated, and vice versa.

3. Efficiency: Bidirectional associations can be more efficient when you need to query or perform operations on both sides of the association.

Cons of Bidirectional Associations:

1. Complexity: Bidirectional associations add complexity to your code. You need to ensure that both sides of the association are updated correctly when objects are added or removed.

2. Memory Usage: Bidirectional associations can consume more memory because each object has references to its associated objects. This can be a concern if you have a large number of associations.

3. Potential for Circular References: Be careful to avoid circular references, which can lead to memory leaks in some situations. JavaScript garbage collectors may have trouble with circular references.

4. Maintenance: Bidirectional associations require extra maintenance to ensure that both sides of the association remain in sync. Failing to do so can lead to inconsistencies in your data.

To determine whether bidirectional associations are a good practice for your specific project, consider the following factors:

- The specific requirements of your application and how you need to access and manipulate the associated objects.
- Whether the added complexity is justified by the benefits of bidirectional associations.
- Whether you have a plan for managing the associations effectively and avoiding circular references or memory issues.

In some cases, it may make sense to use unidirectional associations and query the data as needed, rather than maintaining bidirectional associations. Ultimately, the decision should be based on the trade-offs and requirements of your particular project.

*/