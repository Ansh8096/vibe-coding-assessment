import React from "react";

interface SidebarProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;

  priceRange: {
    min: number;
    max: number;
  };

  setPriceRange: React.Dispatch<
    React.SetStateAction<{
      min: number;
      max: number;
    }>
  >;
}

const categories = ["Electronics", "Apparel", "Footwear"];

const Sidebar = ({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
}: SidebarProps) => {
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <aside className="sticky top-0 h-screen w-72 border-r bg-white p-6 shadow">
      <h2 className="mb-8 text-2xl font-bold">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="mb-4 font-semibold">Category</h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />

              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="mb-4 font-semibold">Price Range</h3>

        <div className="space-y-5">
          {/* Minimum Price */}
          <div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>Min Price</span>
              <span className="font-medium">${priceRange.min}</span>
            </div>

            <input
              type="range"
              min={0}
              max={1000}
              step={10}
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange((prev) => ({
                  ...prev,
                  min: Math.min(Number(e.target.value), prev.max),
                }))
              }
              className="w-full cursor-pointer"
            />
          </div>

          {/* Maximum Price */}
          <div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>Max Price</span>
              <span className="font-medium">${priceRange.max}</span>
            </div>

            <input
              type="range"
              min={0}
              max={1000}
              step={10}
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange((prev) => ({
                  ...prev,
                  max: Math.max(Number(e.target.value), prev.min),
                }))
              }
              className="w-full cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Rating Filter (Static for Phase 3) */}
      <div>
        <h3 className="mb-4 font-semibold">Minimum Rating</h3>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="radio" name="rating" />

              <span>{rating} ⭐</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;