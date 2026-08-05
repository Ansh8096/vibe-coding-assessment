# 🛍️ E-Commerce Product Multi-Filter Sidebar

A modern React + TypeScript application that demonstrates an interactive product browsing experience with real-time filtering and sorting capabilities.

Built as part of a Vibe Coding Assessment to showcase component-based architecture, state management, and responsive UI development.

---

## ✨ Features

- 📂 Multi-select Category Filtering
- 💰 Dual-Thumb Price Range Slider
- ⭐ Minimum Rating Filter
- ⚡ Instant Filtering (No Submit Button Required)
- 🔀 Product Sorting
  - Price: Low to High
  - Price: High to Low
  - Top Rated First
- 📦 Dynamic Product Grid
- 🔄 Reset Filters
- 🚫 Empty State when no products match
- 📱 Responsive Layout
- 🎨 Clean & Modern UI

---

## 🖼️ Preview

### Product Listing

- Sticky filter sidebar
- Responsive product grid
- Interactive filtering
- Real-time sorting

---

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Range
- Lucide React

---

## 📁 Project Structure

```text
src
│
├── components
│   ├── Sidebar.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── PriceRangeSlider.tsx
│   └── SortDropdown.tsx
│
├── data
│   └── products.ts
│
├── pages
│   └── Home.tsx
│
├── types
│   └── product.ts
│
├── App.tsx
└── main.tsx
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
```

### Navigate to the project

```bash
cd <repo-name>
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🎯 Filtering Workflow

Products are processed using the following pipeline:

```text
Products
    │
    ▼
Category Filter
    │
    ▼
Price Filter
    │
    ▼
Rating Filter
    │
    ▼
Sorting
    │
    ▼
Display Products
```

This ensures products are filtered first and then sorted according to the selected option.

---

## 📸 Functionality

### Category Filter

- Supports multiple category selection.
- Displays all products when no category is selected.

### Price Filter

- Interactive dual-thumb range slider.
- Filters products within the selected price range.

### Rating Filter

- Displays products with ratings greater than or equal to the selected value.

### Sorting

- Price: Low to High
- Price: High to Low
- Top Rated First

### Empty State

When no products satisfy the selected filters, the application displays an informative message along with a **Reset Filters** button.

---

## 🎨 UI Highlights

- Sticky Sidebar
- Responsive Product Grid
- Hover Effects
- Modern Card Design
- Professional Filtering Experience

---

## 📌 Future Improvements

- Backend API integration
- Pagination
- Product Search
- Brand Filter
- Dark Mode
- Animations
- Wishlist Feature

---

## 👨‍💻 Author

**Ansh Verma**

GitHub: https://github.com/Ansh8096

LinkedIn: https://www.linkedin.com/in/<your-linkedin>

---

## ⭐ If you found this project useful, consider giving it a star!
