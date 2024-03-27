import express from "express";
import cors from "cors";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
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

// Start route PUT
let data = {
  id: 1,
  name: "Johan Krisbima Abi",
  email: "johankrisbima77@gmail.com",
};

app.put("/update", (req, res) => {
  try {
    const { id, name, email } = req.body;

    if (id === data.id) {
      data.name = name;
      data.email = email;

      // Menyusun respons
      // res.send("Berhasil");
      res.status(200).json({
        status: "success",
        message: "Data berhasil diperbarui",
        data: {
          id: 1,
          name: name,
          email: email,
        },
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "Data dengan ID yang diberikan tidak ditemukan",
      });
    }
  } catch (error) {
    // Jika terjadi kesalahan, kirim respons error server
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});
// End Route PUT

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
