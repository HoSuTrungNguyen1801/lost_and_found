import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/found.json`)
      .then(res => res.json())
      .then(data => {
        const selectedPost = data.find(item => item._id === parseInt(id));
        setPost(selectedPost);
      })
      .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
  }, [id]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-6 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl font-semibold mb-2">Không tìm thấy trang</p>
        <p className="text-gray-600 mb-6">Xin lỗi, chúng tôi không thể tìm thấy nội dung bạn đang tìm kiếm.</p>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow"
        >
          Quay lại trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="post-detail p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      {post.coverImage && (
        <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover rounded-md my-4" />
      )}
      <p>{post.description}</p>

      {post.trending && (
        <span className="inline-block bg-red-800 text-yellow-400 px-2 py-5 rounded mt-2">
          Cần tìm gấp
        </span>
      )}
      
      <div className="mt-4 space-y-2 p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="text-lg font-semibold text-gray-700">
          <span className="font-bold text-gray-600">Liên lạc qua số điện thoại:</span>{" "}
          {post.contact ? `${post.contact.slice(0, 3)}*****${post.contact.slice(-2)}` : "Không có"}
        </div>
        <div className="text-lg font-semibold text-gray-700">
          <span className="font-bold text-gray-600">Địa chỉ bị mất:</span> {post.location}
        </div>
        <div className="text-lg font-semibold text-gray-700">
          <span className="font-bold text-gray-600">Ngày bị mất đồ:</span> {post.dateLost}
        </div>
        <div className="text-lg font-semibold text-gray-700">
          <span className="font-bold text-gray-600">Liên lạc với người mất cấp :</span>
          <Link to='/chatbox/:id'>Nhắn tin</Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
