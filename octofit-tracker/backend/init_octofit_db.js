// MongoDB initialization script for octofit_db
db = connect("localhost:27017/octofit_db");

// Create collections
db.createCollection("users");
db.createCollection("teams");
db.createCollection("activity");
db.createCollection("leaderboard");
db.createCollection("workouts");

// Ensure unique index for users collection
db.users.createIndex({ "email": 1 }, { unique: true });

print("Database and collections initialized successfully.");
