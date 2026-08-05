import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import SortDropdown from "../components/SortDropdown";
import { products } from "../data/products";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Products
            </h1>

            <p className="text-gray-500">
              {products.length} Products Found
            </p>
          </div>

          <SortDropdown />
        </div>

        <ProductGrid products={products} />
      </main>
    </div>
  );
};

export default Home;