
const Top = () => {
  return(
    <>
      <div className="m-10">
        <ul className="mx-auto max-w-3xl">
          <li className="p-4 mb-8 border border-solid border-gray-400">
            <div className="flex justify-between">
              <p className="text-gray-400 text-sm">2023/9/11</p>
              <ul className="flex">
                <li className="p-1 ml-1 text-blue-600 border border-solid border-blue-600 rounded text-sm">React</li>
                <li className="p-1 ml-1 text-blue-600 border border-solid border-blue-600 rounded text-sm">TypeScript</li>
              </ul>
            </div>
            <p className="text-2xl my-4">APIで取得した記事タイトル</p>
            <div>
              コンテンツ
            </div>
          </li>

          <li className="p-4 border border-solid border-gray-400 max-w-3xl">
            <div className="flex justify-between">
              <p className="text-gray-400 text-sm">2023/9/11</p>
              <ul className="flex">
                <li className="p-1 ml-1 text-blue-600 border border-solid border-blue-600 rounded text-sm">React</li>
                <li className="p-1 ml-1 text-blue-600 border border-solid border-blue-600 rounded text-sm">TypeScript</li>
              </ul>
            </div>
            <p className="text-2xl my-4">APIで取得した記事タイトル</p>
            <div>
              コンテンツ
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Top
