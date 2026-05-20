document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-item");
  const workCards = document.querySelectorAll(".work-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 1. Ubah status active tombol filter
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // 2. Ambil nilai filter kategori dari tombol
      const filterValue = this.getAttribute("data-filter");

      // 3. Proses penyaringan kartu karya
      workCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (filterValue === "all" || filterValue === cardCategory) {
          // Tampilkan kartu dengan transisi halus
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 10);
        } else {
          // Sembunyikan kartu
          card.style.opacity = "0";
          card.style.transform = "scale(0.8)";
          setTimeout(() => {
            card.style.display = "none";
          }, 400); // Sinkron dengan durasi CSS transition (0.6s)
        }
      });
    });
  });
});