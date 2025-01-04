// !!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
{
  "ID": 1,
  "Name": "Inception",
  "Rating": 9.0,
  "Description": "A mind-bending sci-fi movie.",
  "Genre": "Sci-Fi",
  "Cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
}

*/


const { z } = require("zod");

const bodySchema = z.object({
  ID: z.number(),
  Name: z.string().nonempty(),
  Rating: z.number().min(0),
  Description: z.string().nonempty(),
  Genre: z.string().nonempty(),
  Cast: z.array(z.string().min(1)),
});

const validation = (req, res, next) => {
  const result = bodySchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      status: "error",
      message: "Bad request! Validation failed.",
      errors: result.error.errors, // Access the validation errors
    });
  }

  next();
};

module.exports = { validation };
