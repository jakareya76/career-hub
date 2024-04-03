import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const CategoryList = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategoryData = async () => {
      const res = await fetch("/categories.json");
      const data = await res.json();

      setCategory(data);
    };

    getCategoryData();
  }, []);

  return (
    <section className="container py-16 mx-auto">
      <SectionTitle title="Job Category List" />

      <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-4">
        {category.map((item) => {
          return (
            <div key={item.id} className="p-8 rounded-xl bg-zinc-100">
              <img src={item.logo} alt="" className="max-w-[50px]" />
              <h2 className="mt-4 text-xl font-semibold">
                {item.category_name}
              </h2>
              <p className="text-zinc-500">{item.availability}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryList;
