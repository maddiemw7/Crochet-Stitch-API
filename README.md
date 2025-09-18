# Crochet Stitch API
A simple Node.js API that stores and serves crochet stitch data, including name, abbreviation, difficulty, and step-by-step instructions. Perfect for programmatically accessing crochet stitch information.
# Features
-Retrieve all stitches or a single stitch by ID.
-Add new stitches to the database.
-Update existing stitches.
-Delete stitches.
-Steps stored as JSON arrays for easy iteration.
#Technologies
-Node.js
-Express.js
-SQLite
-JSON
# Installation
Clone the repository:
git clone https://github.com/maddiemw7/Crochet-Stitch-API.git
cd Crochet-Stitch-API
Install dependencies:
npm install
Ensure your database connection is configured in db.js.
# Usage
Start the server:
node server.js
Access the API at http://localhost:3000/.
# API Endpoints

# Get all stitches
curl http://localhost:3000/api/stitches
Returns a JSON array of all stitches:
[
  {
    "id": 1,
    "name": "Single Crochet",
    "abbreviation": "sc",
    "difficulty": "beginner",
    "steps": ["Insert hook", "Yarn over", "Pull through", "Yarn over and pull through both loops"]
  },
  ...
]
# Get a single stitch
curl http://localhost:3000/api/stitches/1
Returns a single stitch object.
# Add a new stitch
curl -X POST http://localhost:3000/api/stitches \
-H "Content-Type: application/json" \
-d '{
  "name": "Double Crochet",
  "abbreviation": "dc",
  "difficulty": "beginner",
  "steps": ["Insert hook", "Yarn over", "Pull through", "You should have three loops on hook", "Yarn over", "Pull through two loops", "Yarn over", "Pull through last two loops"]
}'
# Update a stitch
curl -X PUT http://localhost:3000/api/stitches/1 \
-H "Content-Type: application/json" \
-d '{
  "name": "Single Crochet",
  "abbreviation": "sc",
  "difficulty": "beginner",
  "steps": ["Insert hook", "Yarn over", "Pull through", "Yarn over and pull through both loops"]
}'
# Delete a stitch
curl -X DELETE http://localhost:3000/api/stitches/1
Notes
This project is backend only. To integrate with a front-end, make HTTP requests to the API endpoints.
Stitches’ steps are stored as JSON arrays, so front-end apps can display them step by step.
