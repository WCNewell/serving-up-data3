const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
app.use(cors());

const students = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Zephyr",
    homeTown: "Seattle"
  },
  {
    id: 2,
    fullName: "Bob",
    lastName: "Yellow",
    homeTown: "Vancouver"
  },
  {
    id: 3,
    fullName: "Claire",
    lastName: "Xylitol",
    homeTown: "Toledo"
  },
  {
    id: 4,
    fullName: "Daniel",
    lastName: "Winston",
    homeTown: "Akron"
  },
  {
    id: 5,
    fullName: "Edina",
    lastName: "Veritas",
    homeTown: "Wichita"
  }
];

function findById(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }
  return null;
}

app.get("/", (request, response) => {
  response.status(200);
  response.json({ data: students });
});

app.get("/:id", (request, response) => {
  let record = findById(students, request.params.id);
  if (!record) {
    response.status(404);
    response.json({
      error: {
        message: "No record found"
      }
    });
  }
  response.status(200);
  response.json({ data: record });
});

app.listen(PORT);
