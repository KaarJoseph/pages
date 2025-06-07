window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const img = document.getElementById("modal-image");
  const profilePic = document.getElementById("profile-pic");
  const closeModal = document.getElementById("close-modal");

  profilePic?.addEventListener("click", () => {
    if (modal && img) {
      modal.style.display = "flex";
      img.src = profilePic.src;
    }
  });

  closeModal?.addEventListener("click", () => {
    if (modal) modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (modal && modal.style.display === "flex" && event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Asegura ocultar el modal al cargar
  if (modal) modal.style.display = "none";
});
