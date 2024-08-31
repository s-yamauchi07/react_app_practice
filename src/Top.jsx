import { posts } from './data/posts';
import parse from 'html-react-parser';

const Top = () => {
  const ChangeDateFormat = (date) => date.substring(0, date.indexOf("T")).replace(/-/g, "/");

  return(
    <>
      <div className="m-10">
        <ul className="mx-auto max-w-3xl flex flex-col gap-8">
            {posts.map((post) => {
              return(
                <a key={post.id} href={`/detail/${post.id}`}>
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
                </a>
              )
            })}
        </ul>
      </div>
    </>
  )
}
export default Top
