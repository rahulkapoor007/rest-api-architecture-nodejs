// Import express to index.js
const express = require('express');
// *** v1Router ***
const bodyParser = require('body-parser');
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// *** v1Router hooked
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is listening on PORT ${PORT}`);
})