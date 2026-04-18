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
    budget: "€800 - €1500",
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
    budget: "€1500 - €3000",
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
    budget: "€1200 - €2500",
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
    budget: "€1000 - €2000",
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
    budget: "€900 - €1800",
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
    budget: "€1300 - €2800",
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

  // HTML for each destination
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
  const charCount = document.getElementById("charCount");

  // Prevent form from submitting on Enter key
  form.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      return false;
    }
  });

  // Update character count
  messageInput.addEventListener("input", () => {
    const length = messageInput.value.length;
    if (charCount) {
      charCount.textContent = length;
      charCount.style.color = length >= 10 ? "green" : "#dc3545";
    }
  });

  // Real-time validation function
  function validateField(input, validationFn, errorElementId, errorMsg) {
    const errorElement = document.getElementById(errorElementId);
    const value = input.value.trim();
    const isValid = validationFn(value);

    if (value.length > 0) {
      if (!isValid) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        if (errorElement) errorElement.textContent = errorMsg;
      } else {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        if (errorElement) errorElement.textContent = "";
      }
    } else {
      input.classList.remove("is-valid", "is-invalid");
      if (errorElement) errorElement.textContent = "";
    }

    return isValid;
  }

  // Name validation (min 2 chars)
  nameInput.addEventListener("input", () => {
    validateField(
      nameInput,
      (val) => val.length >= 2,
      "nameError",
      "Name must be at least 2 characters",
    );
  });

  // Email validation
  emailInput.addEventListener("input", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(
      emailInput,
      (val) => emailRegex.test(val),
      "emailError",
      "Please enter a valid email address (e.g., name@domain.com)",
    );
  });

  // Message validation (min 10 chars)
  messageInput.addEventListener("input", () => {
    validateField(
      messageInput,
      (val) => val.length >= 10,
      "messageError",
      "Message must be at least 10 characters",
    );
  });

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    const isNameValid = nameValue.length >= 2;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    const isMessageValid = messageValue.length >= 10;

    //validation display
    if (!isNameValid) {
      nameInput.classList.add("is-invalid");
      document.getElementById("nameError").textContent =
        "Name must be at least 2 characters";
    } else {
      nameInput.classList.add("is-valid");
      nameInput.classList.remove("is-invalid");
    }

    if (!isEmailValid) {
      emailInput.classList.add("is-invalid");
      document.getElementById("emailError").textContent =
        "Please enter a valid email address";
    } else {
      emailInput.classList.add("is-valid");
      emailInput.classList.remove("is-invalid");
    }

    if (!isMessageValid) {
      messageInput.classList.add("is-invalid");
      document.getElementById("messageError").textContent =
        "Message must be at least 10 characters";
    } else {
      messageInput.classList.add("is-valid");
      messageInput.classList.remove("is-invalid");
    }

    // Check all validations
    if (isNameValid && isEmailValid && isMessageValid) {
      // Show success message
      formMessage.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>✅ Thank you, ${nameValue}!</strong> Your message has been sent successfully, you will recieve an email from us shortly.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;

      // Reset form
      form.reset();
      if (charCount) {
        charCount.textContent = "0";
        charCount.style.color = "#dc3545";
      }
      document.querySelectorAll(".is-valid, .is-invalid").forEach((el) => {
        el.classList.remove("is-valid", "is-invalid");
      });
    } else {
      // Show error message
      formMessage.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>❌ Please fix the errors above</strong> before submitting.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
    }

    return false;
  });
}

// DETAILS PAGE LOGIC
function initDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const destId = parseInt(urlParams.get("id"));

  if (!destId) {
    window.location.href = "destinations.html";
    return;
  }

  const destination = destinations.find((d) => d.id === destId);
  if (!destination) {
    window.location.href = "destinations.html";
    return;
  }

  // Image galleries for each destination (carousel images)
  const imageGalleries = {
    1: [
      // Bali, Indonesia
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/19756837/pexels-photo-19756837.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2474696/pexels-photo-2474696.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    2: [
      // Swiss Alps, Switzerland
      "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    3: [
      // Tokyo, Japan
      "https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    4: [
      // Santorini, Greece
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1474116/pexels-photo-1474116.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2676655/pexels-photo-2676655.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2676651/pexels-photo-2676651.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3225534/pexels-photo-3225534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    5: [
      // Banff, Canada
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/10885296/pexels-photo-10885296.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/13579466/pexels-photo-13579466.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    6: [
      // Paris, France
      "https://images.pexels.com/photos/30892607/pexels-photo-30892607.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/29420020/pexels-photo-29420020.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/16785486/pexels-photo-16785486.png?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/13351970/pexels-photo-13351970.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  };

  // Populate destination details
  document.getElementById("destName").textContent =
    `${destination.name}, ${destination.country}`;
  document.getElementById("destWeather").textContent = destination.weather;
  document.getElementById("destBestTime").textContent = destination.bestTime;
  document.getElementById("destBudget").textContent = destination.budget;
  document.getElementById("destDescription").textContent =
    destination.description;
  document.getElementById("destLocation").textContent =
    `${destination.name}, ${destination.country}`;

  // Populate attractions list
  const attractionsList = document.getElementById("destAttractions");
  attractionsList.innerHTML = "";
  destination.attractions.forEach((attraction) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `⏺ ${attraction}`;
    attractionsList.appendChild(li);
  });

  // Carousel build
  const galleryImages = imageGalleries[destId] || [destination.image];
  const carouselInner = document.getElementById("carouselInner");
  const carouselIndicators = document.getElementById("carouselIndicators");

  carouselInner.innerHTML = "";
  carouselIndicators.innerHTML = "";

  galleryImages.forEach((imgSrc, index) => {
    // Create indicator
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.setAttribute("data-bs-target", "#destinationCarousel");
    indicator.setAttribute("data-bs-slide-to", index);
    indicator.setAttribute("aria-label", `Slide ${index + 1}`);
    if (index === 0) {
      indicator.classList.add("active");
      indicator.setAttribute("aria-current", "true");
    }
    carouselIndicators.appendChild(indicator);

    // Create carousel item
    const item = document.createElement("div");
    item.className = `carousel-item ${index === 0 ? "active" : ""}`;
    item.innerHTML = `
            <img src="${imgSrc}" class="d-block w-100" alt="${destination.name}" style="height: 450px; object-fit: cover;">
        `;
    carouselInner.appendChild(item);
  });
  // Interactive map URLs for each destination
  const mapUrls = {
    1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63141.83511707475!2d115.13843245!3d-8.4095178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22f7520fca7d3%3A0x2872b62cc456cd84!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sde!4v1712345678901",
    2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175526.1473913088!2d7.6500765!3d46.818188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478fa2b0b6d72e2d%3A0x5431e9d56a41a0af!2sSwiss%20Alps!5e0!3m2!1sen!2sde!4v1712345678902",
    3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.97307138377!2d139.60078265!3d35.6681625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sde!4v1712345678903",
    4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25681.97746400855!2d25.42860795!3d36.3931562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499cdce05e3b0f9%3A0x180cfa0ea68e8e7!2sSantorini%2C%20Greece!5e0!3m2!1sen!2sde!4v1712345678904",
    5: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159514.3422278688!2d-115.68682645!3d51.1783629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5370ca45910c4afd%3A0xca4d6d6f7c4e8f8!2sBanff%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sde!4v1712345678905",
    6: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9185124463!2d2.347035!3d48.8588548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sde!4v1712345678906",
  };

  const mapIframe = document.getElementById("destMap");
  const locationText = document.getElementById("destLocation");

  if (mapIframe && mapUrls[destId]) {
    mapIframe.src = mapUrls[destId];
    if (locationText) {
      locationText.textContent = `📍 ${destination.name}, ${destination.country}`;
    }
  }
}

// INITIALIZE PAGE
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded - initializing...");

  // Check which page we're on
  const destinationsContainer = document.getElementById(
    "destinationsContainer",
  );
  const contactForm = document.getElementById("contactForm");
  const isDetailsPage = window.location.pathname.includes("details.html");

  console.log("Destinations container found:", !!destinationsContainer);
  console.log("Contact form found:", !!contactForm);
  console.log("Details page:", isDetailsPage);

  if (destinationsContainer) {
    console.log("Rendering destinations...");
    console.log("Destinations array length:", destinations.length);
    renderDestinations();
    initFilterButtons();
  }

  if (contactForm) {
    console.log("Initializing contact form...");
    initContactForm();
  }

  if (isDetailsPage) {
    console.log("Initializing details page...");
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
