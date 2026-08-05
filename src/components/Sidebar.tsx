interface SidebarProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const categories = [
  "Electronics",
  "Apparel",
  "Footwear",
];

const Sidebar = ({
  selectedCategories,
  setSelectedCategories,
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
      <h2 className="mb-8 text-2xl font-bold">
        Filters
      </h2>

      <div className="mb-8">
        <h3 className="mb-4 font-semibold">
          Category
        </h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() =>
                  handleCategoryChange(category)
                }
              />

              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 font-semibold">
          Price Range
        </h3>

        <input
          type="range"
          min={0}
          max={1000}
          className="w-full"
        />

        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-semibold">
          Minimum Rating
        </h3>

        <div className="space-y-2">
          {[5,4,3,2,1].map((rating)=>(
            <label
              key={rating}
              className="flex items-center gap-2"
            >
              <input
                type="radio"
                name="rating"
              />

              {rating} ⭐
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;