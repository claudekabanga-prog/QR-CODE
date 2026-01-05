document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("text");
  const generateButton = document.getElementById("generate");
  const resultSection = document.getElementById("result");
  const qrcodecanvas = document.getElementById("qrcode");
  const downloadLink = document.getElementById("download");

  generateButton.addEventListener("click", function () {
    console.log("INPUT:", input);
    console.log("VALUE:", input.value);

    if (typeof input.value !== "string") {
      alert("Erreur : champ de texte invalide");
      return;
    }

    const text = input.value.trim();

    if (!text) {
      alert("Veuillez entrer un texte ou un lien pour générer un QR Code.");
      return;
    }

    QRCode.toCanvas(qrcodecanvas, text, { width: 400 }, function (error) {
      if (error) {
        console.error(error);
        return;
      }

      resultSection.classList.add("active");

      const imageDataURL = qrcodecanvas.toDataURL("image/png");
      downloadLink.href = imageDataURL;
      downloadLink.download = "qrcode.png";
      downloadLink.style.display = "inline";
    });
  });
});


