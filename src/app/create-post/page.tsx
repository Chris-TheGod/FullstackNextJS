export default function Page() {
  return (
    <main className='pt-16 text-center'>
      <h1 className='text-5xl font-semibold mb-7'>Create post</h1>

      <form className='h-10 space-x-2 mt-10'>
        <input
          type='text'
          name='title'
          placeholder='Title for new post'
          className='border rounded px-3 h-full'
          required
        />
        <button className='h-full bg-blue-500 px-5 rounded text-white'>
          Submit
        </button>
      </form>
    </main>
  );
}
