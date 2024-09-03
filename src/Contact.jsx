import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [content, setContent] = useState();

  return(
    <form className="m-auto mt-10 max-w-3xl">
      <h2 className="text-xl font-bold mb-10">問い合わせフォーム</h2>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="w-60">お名前</label>
          <input type="text" id="name" name="name" className="border border-1 border-gray-300 rounded-lg py-4 px-4 w-full"/>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="w-60">メールアドレス</label>
          <input type="text" id="email" name="email" className="border border-1 border-gray-200 rounded-lg py-4 px-4 w-full"/>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="content" className="w-60">本文</label>
          <textarea id="content" name="content" className="border border-1 border-gray-200 rounded-lg py-4 px-4 w-full h-56"/>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button type="button" className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mr-4">
          送信
        </button>
        <button type="button" className="bg-gray-300 font-bold py-2 px-4 rounded-lg">
          クリア
        </button>
    </div>
    </form>
  )
}

export default Contact;