import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const list = ["Choose", "Đồ mới mất", "Tìm nhanh", "Tất cả", "Giấy tờ tùy thân quan trọng"];

const Banner = () => {
  const [isLost, setIslost] = useState([]);
  const [category, setCategory] = useState("choose");

  useEffect(() => {
    fetch("found.json")
      .then(res => res.json())
      .then((data) => setIslost(data))
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, []);

  const filteredFound = category === "choose" ? isLost : isLost.filter(found => found.item === category.toLowerCase());

  return (
    <div className="w-full">
      <h2 className='text-3xl font-semibold mb-6'>Danh sách đồ vật</h2>
      <div className="mb-4">
        <select 
          name="category" 
          id="category" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full max-w-xs p-2 border rounded"
        >
          {list.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="post-list w-full flex flex-wrap gap-4 mt-6">
        {filteredFound.map((item, index) => (
          <div key={index} className="post-card w-full p-4 border rounded-lg shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-md" />
            <Link to={`/post/${item._id}`} className="text-2xl font-bold mt-2">{item.title}</Link>
            <p className="text-gray-600">{item.description}</p>
            <Link to={`/post/${item._id}`} className="text-blue-500 hover:underline mt-4 block">Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
