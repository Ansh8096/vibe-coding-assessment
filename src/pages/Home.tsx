import { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import SortDropdown from "../components/SortDropdown";
import { products } from "../data/products";

const Home = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: 1000,
    });

    const [selectedRating, setSelectedRating] = useState(0);

    const [sortBy, setSortBy] = useState("");

    const resetFilters = () => {
        setSelectedCategories([]);
        setPriceRange({
            min: 0,
            max: 1000,
        });
        setSelectedRating(0);
        setSortBy("");
    };

    const filteredProducts = useMemo(() => {
        const filtered = products.filter((product) => {
            const categoryMatch =
                selectedCategories.length === 0 ||
                selectedCategories.includes(product.category);

            const priceMatch =
                product.price >= priceRange.min &&
                product.price <= priceRange.max;

            const ratingMatch =
                selectedRating === 0 ||
                product.rating >= selectedRating;

            return categoryMatch && priceMatch && ratingMatch;
        });

        switch (sortBy) {
            case "price-low":
                return [...filtered].sort((a, b) => a.price - b.price);

            case "price-high":
                return [...filtered].sort((a, b) => b.price - a.price);

            case "rating":
                return [...filtered].sort((a, b) => b.rating - a.rating);

            default:
                return filtered;
        }
    }, [
        selectedCategories,
        priceRange,
        selectedRating,
        sortBy,
    ]);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
            />

            <main className="flex-1 p-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Products</h1>

                        <p className="text-gray-500">
                            {filteredProducts.length} Products Found
                        </p>
                    </div>

                    <SortDropdown
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="mt-20 flex flex-col items-center justify-center rounded-xl bg-white p-10 shadow">
                        <h2 className="mb-4 text-2xl font-bold text-gray-700">
                            No items match your criteria.
                        </h2>

                        <button
                            onClick={resetFilters}
                            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <ProductGrid products={filteredProducts} />
                )}
            </main>
        </div>
    );
};

export default Home;