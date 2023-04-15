class person{
    constructor(name,age,city,clg){
        this.name=name;
        this.age=age;
        this.city=city;
        this.clg=clg;
    }
    getPerson(){
        return `Hi, my name is ${this.name}, age is ${this.age} I'm  from ${this.city} completed my clg in  ${this.clg}`;
    }
}
let per=new person("Tamilarasan",26,"Tindivanam","Mailam Engineering colleg");
console.log(per);
console.log(per.getPerson());