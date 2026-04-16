const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    category: "beaches",
    weather: "28°C ☀️ Sunny",
    description:
      "Tropical paradise with stunning beaches, vibrant culture, and lush rice terraces.",
    image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600",
    bestTime: "April - October",
    budget: "$800 - $1500",
    attractions: [
      "Uluwatu Temple",
      "Tegallalang Rice Terraces",
      "Seminyak Beach",
      "Ubud Monkey Forest",
    ],
  },
  {
    id: 2,
    name: "Swiss Alps",
    country: "Switzerland",
    category: "mountains",
    weather: "12°C ⛅ Partly Cloudy",
    description:
      "Majestic mountain peaks, pristine lakes, and world-class skiing destinations.",
    image:
      "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=600",
    bestTime: "December - March (Skiing), June - September (Hiking)",
    budget: "$1500 - $3000",
    attractions: ["Matterhorn", "Jungfraujoch", "Lake Geneva", "Interlaken"],
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    category: "cities",
    weather: "18°C 🌸 Mild",
    description:
      "Vibrant metropolis blending ultramodern technology with ancient traditions.",
    image:
      "https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=600",
    bestTime: "March - May (Cherry Blossom), October - November",
    budget: "$1200 - $2500",
    attractions: [
      "Shibuya Crossing",
      "Senso-ji Temple",
      "Tokyo Skytree",
      "Tsukiji Outer Market",
    ],
  },
  {
    id: 4,
    name: "Santorini",
    country: "Greece",
    category: "beaches",
    weather: "24°C ☀️ Sunny",
    description:
      "Iconic white-washed buildings with blue domes overlooking the Aegean Sea.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bestTime: "May - October",
    budget: "$1000 - $2000",
    attractions: ["Oia Sunset", "Red Beach", "Ancient Akrotiri", "Fira Town"],
  },
  {
    id: 5,
    name: "Banff",
    country: "Canada",
    category: "mountains",
    weather: "8°C ❄️ Cool",
    description:
      "Stunning national park with turquoise lakes and Rocky Mountain peaks.",
    image:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
    bestTime: "June - August (Hiking), December - March (Skiing)",
    budget: "$900 - $1800",
    attractions: [
      "Lake Louise",
      "Moraine Lake",
      "Banff Gondola",
      "Icefields Parkway",
    ],
  },
  {
    id: 6,
    name: "Paris",
    country: "France",
    category: "cities",
    weather: "16°C 🌥️ Partly Cloudy",
    description: "The City of Light - romance, art, and world-famous cuisine.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bestTime: "April - June, September - October",
    budget: "$1300 - $2800",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Montmartre"],
  },
];

function renderDestinations(filterCategory = "all") {
  const container = document.getElementById("destinationsContainer");

  // Clear container
  container.innerHTML = "";

  // Filter destinations
  const filteredDestinations =
    filterCategory === "all"
      ? destinations
      : destinations.filter((dest) => dest.category === filterCategory);

  // Generate HTML for each destination
  filteredDestinations.forEach((dest) => {
    const cardCol = document.createElement("div");
    cardCol.className = "col-md-6 col-lg-4";

    cardCol.innerHTML = `
            <div class="card h-100 shadow-sm destination-card">
                <img src="${dest.image}" class="card-img-top" alt="${dest.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="card-title mb-0">${dest.name}, ${dest.country}</h5>
                        <span class="badge bg-info text-dark">${dest.weather}</span>
                    </div>
                    <p class="card-text text-muted">${dest.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-secondary">${dest.category}</span>
                        <a href="details.html?id=${dest.id}" class="btn btn-sm btn-primary">View Details →</a>
                    </div>
                </div>
            </div>
        `;

    container.appendChild(cardCol);
  });

  // If no destinations match
  if (filteredDestinations.length === 0) {
    container.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-muted">No destinations found in this category.</p>
            </div>
        `;
  }
}

// FILTER BUTTON FUNCTIONALITY
function initFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((b) => {
        b.classList.remove("btn-primary", "active");
        b.classList.add("btn-outline-primary");
      });

      // Add active class to clicked button
      this.classList.remove("btn-outline-primary");
      this.classList.add("btn-primary", "active");

      // Get filter category and render
      const filter = this.getAttribute("data-filter");
      renderDestinations(filter);
    });
  });
}

// CONTACT FORM VALIDATION
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  // Real-time validation
  function validateField(input, validationFn, errorMsg) {
    const errorElement = document.getElementById(`${input.id}Error`);
    const isValid = validationFn(input.value);

    if (!isValid && input.value.length > 0) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      errorElement.textContent = errorMsg;
    } else if (isValid && input.value.length > 0) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      errorElement.textContent = "";
    } else {
      input.classList.remove("is-valid", "is-invalid");
      errorElement.textContent = "";
    }

    return isValid;
  }

  // Validation rules
  nameInput?.addEventListener("input", () => {
    validateField(
      nameInput,
      (val) => val.trim().length >= 2,
      "Name must be at least 2 characters",
    );
  });

  emailInput?.addEventListener("input", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(
      emailInput,
      (val) => emailRegex.test(val),
      "Please enter a valid email address",
    );
  });

  messageInput?.addEventListener("input", () => {
    validateField(
      messageInput,
      (val) => val.trim().length >= 10,
      "Message must be at least 10 characters",
    );
  });

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = nameInput.value.trim().length >= 2;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const isMessageValid = messageInput.value.trim().length >= 10;

    if (isNameValid && isEmailValid && isMessageValid) {
      formMessage.innerHTML = `
                <div class="alert alert-success">
                    ✅ Thank you! Your message has been sent successfully.
                </div>
            `;
      form.reset();
      document
        .querySelectorAll(".is-valid")
        .forEach((el) => el.classList.remove("is-valid"));
    } else {
      formMessage.innerHTML = `
                <div class="alert alert-danger">
                    ❌ Please fix the errors above before submitting.
                </div>
            `;
    }
  });
}

// DETAILS PAGE LOGIC
function initDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const destId = parseInt(urlParams.get("id"));

  if (!destId) return;

  const destination = destinations.find((d) => d.id === destId);
  if (!destination) return;

  document.getElementById("destName").textContent =
    `${destination.name}, ${destination.country}`;
}

// INITIALIZE PAGE
document.addEventListener("DOMContentLoaded", function () {
  // Check current page
  const isDestinationsPage = document.getElementById("destinationsContainer");
  const isContactPage = document.getElementById("contactForm");
  const isDetailsPage = window.location.pathname.includes("details.html");

  if (isDestinationsPage) {
    renderDestinations();
    initFilterButtons();
  }

  if (isContactPage) {
    initContactForm();
  }

  if (isDetailsPage) {
    initDetailsPage();
  }
});

// hover effect CSS dynamically
const style = document.createElement("style");
style.textContent = `
    .destination-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .destination-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
    }
    .filter-btn.active {
        font-weight: 600;
    }
`;
document.head.appendChild(style);
