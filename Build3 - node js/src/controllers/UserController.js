    // Initialize Firebase database reference
const admin = require('../config/firebaseConfig');
const db = admin.database();
const ref = db.ref('users');


exports.getUsers = (req, res) => {
    
    console.log('Received GET request for all users');    
    ref.once('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data); // Data retrieved from Firebase
        res.status(200).json({data});
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
};

exports.createUser = (req, res) => {
    console.log("Entering create user function");

    const { name, surname, age, gender } = req.body;

    // Check if all required fields are provided
    if (!name || !surname || !age || !gender) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newUser = { name, surname, age, gender };

    // Push new user data to Firebase
    const userRef = ref.push();
    userRef.set(newUser, (error) => {
        if (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ error: error.message });
        } else {
            console.log("User created successfully");
            // Respond with the user data that was saved
            res.status(201).json({ id: userRef.key, ...newUser });
        }
    });
};

exports.getUserByID = (req, res) => {
    const userId = req.query.id;

    // Retrieve user data from Firebase based on userId
    ref.child(userId).once('value')
        .then((snapshot) => {
            const userData = snapshot.val();
            if (!userData) {
                // If user with userId does not exist
                return res.status(404).json({ message: `User with ID ${userId} not found` });
            }
            res.status(200).json(userData);
        })
        .catch((error) => {
            console.error('Error fetching user:', error);
            res.status(500).json({ error: 'Failed to fetch user' });
        });
}

exports.deleteUser = (req, res) => {

    const userIdToDelete = req.query.id; 

    const db = admin.database();
    const ref = db.ref('users');
  
    const userRef = ref.child(userIdToDelete);
    userRef.remove()
      .then(() => {
        console.log(`User with ID ${userIdToDelete} deleted successfully`);
        res.status(200).json({ message: `User with ID ${userIdToDelete} deleted successfully` });
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
      });
}

exports.updateUser = (req, res) => {
    const userIdToUpdate = req.query.id;

    const { name, surname, age, gender } = req.body; // Assuming these fields are sent in the request body

    // Check if all required fields are provided
    if (!name || !surname || !age || !gender) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const updatedUserData = { name, surname, age, gender }; // New user data to update

    const db = admin.database();
    const ref = db.ref('users');

    // Update user data in Firebase
    const userRef = ref.child(userIdToUpdate);
    userRef.update(updatedUserData)
        .then(() => {
            console.log(`User with ID ${userIdToUpdate} updated successfully`);
            res.status(200).json({ message: `User with ID ${userIdToUpdate} updated successfully`, updatedUserData });
        })
        .catch((error) => {
            console.error('Error updating user:', error);
            res.status(500).json({ error: 'Failed to update user' });
        });
};
