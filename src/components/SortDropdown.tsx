import React from "react";

interface SortDropdownProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SortDropdown = ({
  sortBy,
  setSortBy,
}: SortDropdownProps) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="rounded-lg border bg-white px-4 py-2 shadow"
    >
      <option value="">Sort By</option>

      <option value="price-low">
        Price: Low to High
      </option>

      <option value="price-high">
        Price: High to Low
      </option>

      <option value="rating">
        Top Rated First
      </option>
    </select>
  );
};

export default SortDropdown;