import multer from "multer";

//using disk storage
//using storage middleware
const storage = multer.diskStorage({
  // req - pehle se milta h , file - multer se milta h
  destination: function (req, file, cb) {
    // cb(error, destination)
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
