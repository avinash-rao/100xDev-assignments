const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Cluster21172:SE8r7r7pkaFMBLnC@cluster21172.css5ukv.mongodb.net/user_app?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    title: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}