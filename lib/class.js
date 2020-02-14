class Employee {
    constructor (name, title, id){
        if (!name) {
            throw new Error("Please enter a name.");
          }
          if (!title) {
            throw new Error("Missing employee title.");
          }
          if (!id) {
            throw new Error("Please enter employee id.");
          }
        this.name = name;
        this.title = title;
        this.id = id;
    }
}