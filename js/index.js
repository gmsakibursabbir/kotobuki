// JavaScript to toggle the mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});
// JavaScript
class VideoModal {
  constructor() {
    this.modal = document.querySelector(".video-modal");
    this.videoElement = this.modal.querySelector(".local-video");
    this.init();
  }

  init() {
    // Event delegation for triggers
    document.body.addEventListener("click", (e) => {
      const trigger = e.target.closest(".video-trigger");
      if (trigger) this.openModal(trigger);
    });

    // Close events
    this.modal
      .querySelector(".modal-close-btn")
      .addEventListener("click", () => this.closeModal());
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) this.closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !this.modal.classList.contains("hidden")) {
        this.closeModal();
      }
    });
  }

  openModal(trigger) {
    const videoSrc = trigger.dataset.videoSrc;
    this.videoElement.src = videoSrc;
    this.modal.classList.remove("hidden");

    // Attempt autoplay (may not work in all browsers)
    this.videoElement.play().catch((error) => {
      console.log("Autoplay prevented:", error);
    });
  }

  closeModal() {
    this.modal.classList.add("hidden");
    this.videoElement.pause();
    this.videoElement.removeAttribute("src"); // Reset source
  }
}

// Initialize the modal
new VideoModal();

// Get all tab buttons and content elements
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Add click event listeners to all tab buttons
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.dataset.tab;

    // Remove active classes from all buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove("bg-softwhite", "text-pastelpink");
      btn.classList.add("hover:bg-softwhite", "text-middark");
    });

    // Add active class to clicked button
    button.classList.add("bg-softwhite", "text-pastelpink");
    button.classList.remove("hover:bg-softwhite", "text-middark");

    // Hide all tab contents
    tabContents.forEach((content) => {
      content.classList.add("hidden");
    });

    // Show selected tab content
    document
      .querySelector(`[data-content="${tabId}"]`)
      .classList.remove("hidden");
  });
});

// Initialize first tab as active
tabButtons[0].click();
// item dropdown
document.addEventListener("DOMContentLoaded", () => {
  // Select all cards
  document.querySelectorAll(".formula-card").forEach((card) => {
    const toggle = card.querySelector(".ingredients-toggle");
    const dropdown = card.querySelector(".ingredients-dropdown");
    const arrow = card.querySelector(".dropdown-arrow");
    let isOpen = false;

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      isOpen = !isOpen;

      // Toggle this card's dropdown
      dropdown.classList.toggle("translate-y-4", !isOpen);
      dropdown.classList.toggle("opacity-0", !isOpen);
      dropdown.classList.toggle("translate-y-0", isOpen);
      dropdown.classList.toggle("opacity-100", isOpen);
      dropdown.classList.toggle("pointer-events-none", !isOpen);
      dropdown.classList.toggle("pointer-events-auto", isOpen);

      // Rotate this card's arrow
      arrow.classList.toggle("rotate-179", isOpen);
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        isOpen &&
        !dropdown.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        // Reset this card's state
        dropdown.classList.add(
          "translate-y-4",
          "opacity-0",
          "pointer-events-none"
        );
        dropdown.classList.remove(
          "translate-y-0",
          "opacity-100",
          "pointer-events-auto"
        );
        arrow.classList.remove("rotate-180");
        isOpen = false;
      }
    });
  });
});

//faq
function toggleAccordion(id) {
  const button = document.querySelector(`[data-accordion-target="#${id}"]`);
  const content = document.getElementById(id);
  const icon = button.querySelector("[data-accordion-icon]");

  // Toggle aria-expanded
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !isExpanded);

  // Toggle content visibility
  content.classList.toggle("hidden");

  // Rotate icon
  icon.classList.toggle("rotate-180");
}
//testimonail
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "2rem",
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  }).mount();
});

//Initialize Splide + Lightbox
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Splide Slider with autoplay
  new Splide("#image-slider", {
    type: "loop",
    perPage: 5, // Show 3 images in large screens
    perMove: 1,
    gap: "1rem",
    arrows: false,
    autoplay: true,
    interval: 3000, // Auto slide every 3 seconds
    breakpoints: {
      1024: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  }).mount();

  // Lightbox Elements
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  const images = document.querySelectorAll(".lightbox-trigger");

  // Open Lightbox on Image Click
  images.forEach((img) => {
    img.addEventListener("click", function () {
      lightboxImage.src = this.src;
      lightbox.classList.remove("hidden");
    });
  });

  // Close Lightbox on Button Click
  lightboxClose.addEventListener("click", function () {
    lightbox.classList.add("hidden");
  });

  // Close Lightbox on Background Click
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  });

  // Close Lightbox on Escape Key Press
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      lightbox.classList.add("hidden");
    }
  });
});
// Auto-update year
window.onload = function () {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
};
