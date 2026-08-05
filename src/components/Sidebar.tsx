import React from "react";
import PriceRangeSlider from "./PriceRangeSlider";

interface SidebarProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;

  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;

  selectedRating: number;
  setSelectedRating: React.Dispatch<React.SetStateAction<number>>;
}

const categories = [
  "Electronics",
  "Apparel",
  "Footwear",
];

const Sidebar = ({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  selectedRating,
  setSelectedRating,
}: SidebarProps) => {
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <aside className="sticky top-0 h-screen w-72 overflow-y-auto border-r bg-white p-6 shadow">
      <h2 className="mb-8 text-2xl font-bold">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold">Category</h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="h-4 w-4 accent-blue-600"
              />

              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold">
          Price Range
        </h3>

        <PriceRangeSlider
          values={priceRange}
          setValues={setPriceRange}
        />
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Minimum Rating
        </h3>

        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="radio"
                name="rating"
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
                className="accent-blue-600"
              />

              <span className="text-gray-700">
                {rating} ⭐ & Up
              </span>
            </label>
          ))}

          <label className="flex cursor-pointer items-center gap-3 pt-2">
            <input
              type="radio"
              name="rating"
              checked={selectedRating === 0}
              onChange={() => setSelectedRating(0)}
              className="accent-blue-600"
            />

            <span className="font-medium text-blue-600">
              All Ratings
            </span>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;