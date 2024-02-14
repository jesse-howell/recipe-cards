const sharp = require("sharp");

async function resizeImage() {
  try {
    await sharp("sammy.png")
      .resize({
        width: 150,
        height: 97
      })
      .toFile("sammy-resized.png");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();