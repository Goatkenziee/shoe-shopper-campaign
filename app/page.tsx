export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to the Shoe Shopper Campaign</h1>
      <p className="mt-4 text-lg">Discover the best deals on shoes!</p>
      <section className="mt-8 w-full max-w-4xl text-center">
        <h2 className="text-2xl font-semibold">Featured Shoes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <img src="/shoe1.jpg" alt="Shoe 1" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-2 font-medium">Stylish Sneakers</h3>
            <p className="text-gray-600">Price: $49.99</p>
          </div>
          <div className="border rounded-lg p-4">
            <img src="/shoe2.jpg" alt="Shoe 2" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-2 font-medium">Classic Boots</h3>
            <p className="text-gray-600">Price: $89.99</p>
          </div>
          <div className="border rounded-lg p-4">
            <img src="/shoe3.jpg" alt="Shoe 3" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-2 font-medium">Sporty Sandals</h3>
            <p className="text-gray-600">Price: $29.99</p>
          </div>
        </div>
      </section>
    </div>
  );
}