import express from "express";
import cors from "cors";
const app = express();

const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
  try {
    // response get
    res.status(200).json({
      status: "succes",
      message: "Get berhasil",
      data: [
        {
          id: 1,
          name: "John doe",
          email: "johndoe@gmail.com",
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
