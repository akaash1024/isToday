const { z } = require("zod");

const bodySchema = z.object({
  name: z.string().nonempty(),
  age: z.number().nonempty().min(10),
  cast: z.array(z.string().min(1)),
});

const validation = (req, res, next) => {
  const result = bodySchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      status: "error",
      message: "Bad request! Validation failed.",
      errors: result.error.errors,
    });
  }
};

module.exports = { validation };
