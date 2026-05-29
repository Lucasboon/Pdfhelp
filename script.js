const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");

const progressSection = document.getElementById("progressSection");
const progressBar = document.getElementById("progressBar");
const percent = document.getElementById("percent");

const successSection = document.getElementById("successSection");
const fileName = document.getElementById("fileName");

// Open file picker
uploadBox.addEventListener("click", () => {
  fileInput.click();
});

// File selected
fileInput.addEventListener("change", (e) => {

  const file = e.target.files[0];

  if (!file) return;

  startConversion(file);

});

// Drag over
uploadBox.addEventListener("dragover", (e) => {

  e.preventDefault();

  uploadBox.style.borderColor = "#ef4444";
  uploadBox.style.background = "#fef2f2";

});

// Drag leave
uploadBox.addEventListener("dragleave", () => {

  uploadBox.style.borderColor = "#d1d5db";
  uploadBox.style.background = "white";

});

// Drop
uploadBox.addEventListener("drop", (e) => {

  e.preventDefault();

  uploadBox.style.borderColor = "#d1d5db";
  uploadBox.style.background = "white";

  const file = e.dataTransfer.files[0];

  if (!file) return;

  startConversion(file);

});

function startConversion(file) {

  // Validate file
  if (
    !file.name.endsWith(".doc") &&
    !file.name.endsWith(".docx")
  ) {

    alert("Please upload a Word document.");
    return;

  }

  uploadBox.classList.add("hidden");
  progressSection.classList.remove("hidden");

  fileName.textContent = file.name;

  let progress = 0;

  const interval = setInterval(() => {

    progress += Math.random() * 12;

    if (progress > 100) {
      progress = 100;
    }

    progressBar.style.width = progress + "%";
    percent.textContent = Math.floor(progress) + "%";

    if (progress >= 100) {

      clearInterval(interval);

      setTimeout(() => {

        progressSection.classList.add("hidden");
        successSection.classList.remove("hidden");

      }, 600);

    }

  }, 250);

}

// Fake download
document.getElementById("downloadBtn")
  .addEventListener("click", () => {

  alert("Your PDF would download here in a real app.");

});
