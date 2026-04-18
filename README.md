# Travel Destination Explorer

A responsive, interactive travel website built for the CO2 Retake Exam.

## 🌍 Live Website

**[View Live Site](https://samparkour51.github.io/travel-destination-explorer/)**

## 📝 Project Description

Interactive travel destination explorer allowing users to search, filter, and view detailed information about various travel locations worldwide. Built as a single-page-style application with multiple HTML pages.

## ✨ Key Features

- **Home Page:** Hero section with image background and search bar
- **Destinations Page:** Responsive grid of 6 destinations with filter options (Beaches, Mountains, Cities)
- **Details Page:** Dynamic content including:
  - 5-image Bootstrap carousel per destination
  - Key information (weather, best time to visit, budget)
  - Top attractions list
  - Interactive Google Maps embed
- **Contact Page:** Form with real-time JavaScript validation including:
  - Name validation (min 2 characters)
  - Email format validation
  - Message length counter (min 10 characters)
  - Success/error message feedback
- **Responsive Design:** Fully responsive across mobile, tablet, and desktop
- **Accessible:** ARIA labels, semantic HTML, sufficient color contrast

## 🛠️ Technologies Used

| Technology | Purpose |  
|VS studio | AI Agent, for code assistance |  
| HTML5 | Semantic page structure |
| Bootstrap 5.3.3 | CSS framework, responsive grid, components (navbar, carousel, cards, forms) |
| JavaScript (Vanilla ES6) | Dynamic content, filtering, form validation, interactive features |
| Google Maps Embed API | Interactive location maps |
| GitHub Pages | Deployment and hosting |
| Pexels/Unsplash | High-quality destination imagery |

## 📁 Project Structure

```

travel-destination-explorer/
├── index.html              # Home page
├── destinations.html       # Destinations grid with filters
├── details.html            # Individual destination details
├── contact.html            # Contact form
├── css/
│   └── style.css           # Custom styles
├── js/
│   └── script.js           # All JavaScript logic
├── images/                 # Empty folder(online images used instead)
└── README.md               # Documentation

```

## 🔍 Cross-Browser Compatibility

| Browser         | Version | Status           |
| :-------------- | :------ | :--------------- |
| Google Chrome   | 120+    | Fully functional |
| Mozilla Firefox | 115+    | Fully functional |

No significant rendering differences were observed. Bootstrap's cross-browser compatibility ensures consistent behavior.

## 📝 Reflection Summary

Reflection on my Travel Destination Explorer Project

**Challenges Faced**

**CSS Framework Integration:**
I chose Bootstrap 5 because I had some familiarity with it. At first, I kept messing up the grid system — forgetting to wrap columns in a row container. Once I learned the container → row → col pattern, the responsive behavior worked smoothly across screen sizes.

**JavaScript Validation:**
The contact form validation was trickier than expected. It worked when clicking submit, but pressing Enter would refresh the page and wipe all user input. I spent time debugging before realizing I needed a keydown event listener to intercept the Enter key. After adding that and preventDefault(), the form behaved properly. It was a good lesson in testing edge cases.

**Dynamic Content and Images:**
Loading destination details using URL parameters was new for me. I had to figure out URLSearchParams to get the ID and find the matching object in my array. The carousel images also caused issues — some Pexels URLs would randomly break. I added an onerror fallback that replaces broken images with a reliable placeholder, so users never see a missing image icon.

**Ensuring Responsiveness and Usability**

Bootstrap handled most responsiveness through grid classes like col-md-6 col-lg-4. Destinations stack in one column on mobile, two on tablets, and three on desktop. The navbar collapses automatically on small screens. For accessibility, I added aria-label attributes, ensured sufficient color contrast, used semantic HTML, and properly associated form labels with inputs.

**Lessons Learned from Deployment and Testing**

Deploying with GitHub Pages was straightforward once I fixed my file paths. I initially used absolute paths that broke on the live site. Switching to relative paths like ./css/style.css fixed everything. Cross-browser testing on Chrome and Firefox revealed no major issues, confirming Bootstrap's reliability. Overall, this project reinforced that building a website requires planning, thorough testing, and handling unexpected edge cases.

## Submission Details

- **Student:** Samuel Toochukwu Akpa (20-478954-23)
- **Course:** CO2 Retake Exam
- **Date:** 19 April 2026
- **Repository:** [GitHub Link](https://github.com/samparkour51/travel-destination-explorer)
