const { z } = require("zod");

const validationSchema = z.object({
  name: z.string().nonempty(),
  rating: z.number().nonempty().min(1).max(5),
  description: z.string().nonempty(),
  genre: z.string().nonempty(),
  cast: z.array(z.string().nonempty.min(1)),
});

const validation = (req, res, next) => {
  const result = req.body;
  if (!result.success) {
    return res.status(400).json({
      status: "error",
      message: "Bad Request ! Validation Failded",
      error: result.error.errors,
    });
  }
};

module.exports = { validation };
