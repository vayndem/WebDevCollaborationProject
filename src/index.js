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
let data = [
  {
    id: 1,
    name: "Johan Krisbima Abi",
    email: "johankrisbima77@gmail.com",
  },
  {
    id: 2,
    name: "haikal abror",
    email: "abrorhaikal@gmail.com",
  },
];

app.put("/update", (req, res) => {
  try {
    const { id, name, email } = req.body;

    if (id === data[0].id) {
      const nama = (data[0].name = name);
      const alamatEmail = (data[0].email = email);

      // Menyusun respons
      res.status(200).json({
        status: "success",
        message: "Data berhasil diperbarui",
        data: {
          id: data[0].id,
          name: nama,
          email: alamatEmail,
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

//GET by ID
app.get("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const foundData = data.find((item) => item.id === id);

    if (!foundData) {
      throw new Error("data tidak valid");
    }
    res.status(200).json({
      status: "success",
      message: "Data ditemukan",
      data: foundData,
    });
  } catch (error) {
    res.status(404).json({
      status: "not found",
      message: error.message,
    });
  }
});

//POST
/*untuk membuat artikel baru*/
app.post("/", async function (req, res, next) {
  try {
    //menangkap form data yang dikirim melalu request body
    const { title, content, tags, published } = req.body;

    //membuat data baru di db menggunakan method create
    const post = await models.posts.create({
      title,
      content,
      tags,
      published,
    });

    //jika data berhasil dibuat, kembalikan response dengan kode 201 dan status OK
    if (post) {
      res.status(200).json({
        status: "Success",
        messages: "Post berhasil ditambahkan",
        data: post,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "not found",
      messages: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
