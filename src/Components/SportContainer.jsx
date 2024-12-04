const SportContainer = () => {
  const categories = [
    {
      name: "Football",
      image: "https://via.placeholder.com/150?text=Football",
    },
    { name: "Tennis", image: "https://via.placeholder.com/150?text=Tennis" },
    {
      name: "Basketball",
      image: "https://via.placeholder.com/150?text=Basketball",
    },
    { name: "Cricket", image: "https://via.placeholder.com/150?text=Cricket" },
    {
      name: "Baseball",
      image: "https://via.placeholder.com/150?text=Baseball",
    },
    {
      name: "Badminton",
      image: "https://via.placeholder.com/150?text=Badminton",
    },
  ];
  return (
    <section className="my-16 px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Explore by Sports Category
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative flex items-center justify-center overflow-hidden rounded-lg bg-white shadow-md"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-40 w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <h3 className="absolute text-2xl font-semibold text-white">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SportContainer;
