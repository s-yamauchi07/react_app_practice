import { posts } from './data/posts';


const Top = () => {
  const ChangeDateFormat = (date) => date.substring(0, date.indexOf("T")).replace(/-/g, "/");
  // 改行コードを表示させる
  const ShortenText = (text) => {
    const displayText = text.replace(/<br\/>/g, "\n")
    
    console.log(displayText)
    if (text.length >= 55) {
      return displayText.substring(0, 55) + "..."
    } else {
      return text.replace(/<br\/>/g, "\n")
    }
  }

  return(
    <>
      <div className="m-10">
        <ul className="mx-auto max-w-3xl">
            {posts.map((post) => {
              return(
                <li key={post.id} className="p-4 mb-8 border border-solid border-gray-400">
                  <div className="flex justify-between">
                    <p className="text-gray-400 text-sm">{ChangeDateFormat(post.createdAt)}</p>
                    <div className="flex">
                      {post.categories.map((category) => {
                        return(
                          <span key={category} className="p-1 ml-1 text-blue-600 border border-solid border-blue-600 rounded text-sm">{category}</span>
                        )
                      })}
                    </div>
                  </div>
                  <div className="text-2xl my-4">
                    <a href="#">{post.title}</a>
                  </div>
                  <div className='line-clamp-2'>
                    {ShortenText(post.content)}
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </>
  )
}
export default Top
