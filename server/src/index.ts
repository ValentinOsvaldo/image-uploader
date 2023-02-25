import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env['CLOUDINARY_URL']!);

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
    tempFileDir: '/tmp',
    useTempFiles: true,
  })
);

// Routes
app.post('/api/image', async (req, res) => {
  const { image } = req.files as any;

  try {
    const { secure_url } = await cloudinary.uploader.upload(image.tempFilePath);

    res.status(201).json({
      url: secure_url,
    });
  } catch (error: any) {
    console.error({ error });

    res.status(500).json({ message: error.message });
  }
});

app.listen(process.env['PORT'], () => {
  console.log(`🚀 Server is running on port ${process.env['PORT']}`);
});
