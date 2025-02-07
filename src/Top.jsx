import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Top = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=> {
    const allPosts = async() => {
      const response = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
      const data = await response.json();
      setPosts(data.posts);
      setLoading(false);
    }
    allPosts();
  }, []);
  if (isLoading) return <div>読み込み中...</div>
  
  const ChangeDateFormat = (date) => date.substring(0, date.indexOf("T")).replace(/-/g, "/");

  return(
    <>
      <div className="m-10">
        <ul className="mx-auto max-w-3xl flex flex-col gap-8">
            {posts.map((post) => {
              return(
                <Link key={post.id} to={`/detail/${post.id}`}>
                  <li key={post.id} className="p-4 border border-solid border-gray-400">
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
                    <div className='line-clamp-2'>
                      {parse(post.content)}
                    </div>
                  </li>
                </Link>
              )
            })}
        </ul>
      </div>
    </>
  )
}
export default Top
