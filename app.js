const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

// Gets rid of the warning 
mongoose.set('strictQuery', true);



// Making the outline for fruits to be made
const fruitSchema = new mongoose.Schema ({
    name:  {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 20
    },
    review: String
})

// Creating the database model with the Schema
const Fruit = mongoose.model("Fruit", fruitSchema)

// Making the outline for people to come
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
})


// creating a new fruit
const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great Fruit"
})

// pineapple.save()
const Person = mongoose.model("Person", personSchema)

const mango = new Fruit({
    name: "Mango",
    rating: 7,
    review: "This fruit is barely above average"
})
mango.save()

// Adding a new person Amy with a relationship to the fruits collection
const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
})

person.save()

// creating new fruits
const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit"
})

const banana = new Fruit({
    name: "Banana",
    score: 10,
    review: "Top 3 for sure"
})
const orange = new Fruit({
    name: "Orange",
    score: 6,
    review: "Mid"
})


// adding all the new fruits to the db
Fruit.insertMany([kiwi, orange, banana], function(err){
    if ( err) {
        console.log(err)
    }else {
        console.log("Successfully save the fruits")
    }
})
fruit.save();

// Conosole.log the name of every fruit in the DB
Fruit.find(function(err, fruits){

    mongoose.connection.close()

    fruits.forEach(key => {
        console.log(key.name)
    });
})

// Update one specific Fruit
Fruit.updateOne({_id: "63ca3c2a17fbb7308e3658aa"}, {name: "Peach"}, function(err){
    if (err){
        console.log(err)
    } else {
        console.log("Successfully updated the document")
    }
})
// Delete one specific person
Fruit.deleteOne({ _id: "63ca3c2a17fbb7308e3658aa"}, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("Successfully deleted ")
    }
})

// Delete many people
Person.deleteMany({name: "John"}, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("Successfully deleted ")
    }
})