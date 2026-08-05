const SortDropdown = () => {
  return (
    <select className="rounded-lg border bg-white px-4 py-2 shadow">
      <option>Sort By</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
      <option>Top Rated First</option>
    </select>
  );
};

export default SortDropdown;