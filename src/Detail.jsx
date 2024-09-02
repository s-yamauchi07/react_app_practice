import { useParams } from 'react-router-dom';
import { useState } from 'react';
import parse from 'html-react-parser';
import { useEffect } from 'react';

const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPost = async() => {
      const response = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
      const data = await response.json();
      setPost(data.post);
      setLoading(false);
    }
    fetchPost();
  }, []);
  if (isLoading) return <div>読み込み中...</div>;
  if (!post) return <div className='pt-6 text-center'>記事が見当たりません</div>;
  const ChangeDateFormat = (date) => date.substring(0, date.indexOf("T")).replace(/-/g, "/");

  return(
    <>
      <div className="m-auto mt-14 max-w-3xl">
        <div>
          <img src="https://placehold.jp/800x400.png" />
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <p className="text-gray-500 text-xs">{ChangeDateFormat(post.createdAt)}</p>
            <div className="flex gap-2">
              {post.categories.map((category) => {
                return(
                  <span key={category} className="py-1 px-2 text-blue-600 border border-solid border-blue-600 rounded text-xs">
                    {category}
                  </span>
                )
              })}
            </div>
          </div>
          <div className="text-2xl my-4">
            {post.title} 
          </div>
          <div>
            {parse(post.content)} 
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail