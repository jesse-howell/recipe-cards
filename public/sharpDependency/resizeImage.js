const sharp = require("sharp");

async function resizeImage() {
  try {
    await sharp("yourimg.png")
      .resize({
        width: 150,
        height: 125,
      })
      .toFile("yourimg-resized.png");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();
