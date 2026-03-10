import React from 'react'
import { getProductCategories } from '../library'

const productlayout = ({children}) => {
  return (
    <div className='container grid-cols-5'>
      <CategoryList/>
      {children}
    </div>
  )
}

export default productlayout



const CategoryList = async () => {
  const categories = await getProductCategories();

  if (!categories?.length) {
    return (
      <div className="p-4 border rounded-lg">
        <p className="text-gray-500">No categories available.</p>
      </div>
    );
}
return (
    <aside className="md:col-span-1">
      <h2 className="text-lg font-medium mb-4">Categories</h2>

      <ul className="space-y-2 border rounded-lg p-4 bg-gray-50">
        {categories.map((category, index) => (
          <li
            key={`category-${index}`}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};