import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm();
  const onsubmit = data => console.log(data);
  const onerror = err => console.log(err);

  return(
    <form onSubmit={handleSubmit(onsubmit, onerror)} className="m-auto mt-10 max-w-3xl">
      <h2 className="text-xl font-bold mb-10">問い合わせフォーム</h2>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="w-60">お名前</label>
          <div className="w-full">
            <input type="text" id="name" name="name" className="border border-1 border-gray-300 rounded-lg py-4 px-4 w-full"
              {...register("name",{
                required: "お名前は必須です。",
                maxLength: {
                  value: 30,
                  message: "お名前は30文字以内で入力してください。"
                }
            })} />
            <p className="text-sm text-red-700">{errors.name?.message}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="w-60">メールアドレス</label>
          <div className="w-full">
            <input type="text" id="email" name="email" className="border border-1 border-gray-200 rounded-lg py-4 px-4 w-full"
              {...register("email", {
                required: "メールアドレスは必須です。",
                pattern: {
                  value: /[a-z\d+\-.]+@([a-z\d-]+(?:\.[a-z]+)*)/i,
                  message: "メールアドレスの形式が不正です。"
                }
              })}
            />
            <p className="text-sm text-red-700">{errors.email?.message}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="content" className="w-60">本文</label>
          <div className="w-full">
            <textarea id="content" name="content" className="border border-1 border-gray-200 rounded-lg py-4 px-4 w-full h-56" 
              {...register("content", {
                required: "本文は必須です。",
                maxLength: {
                  value: 500,
                  message: "本文は500文字以内で入力してください。"
                }
              })}
            />
            <p className="text-sm text-red-700">{errors.content?.message}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button type="submit" className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mr-4">
          送信
        </button>
        <button type="type" className="bg-gray-300 font-bold py-2 px-4 rounded-lg">
          クリア
        </button>
      </div>
    </form>
  )
}

export default Contact;