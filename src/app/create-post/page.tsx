import { createPost } from '@/actions/actions';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default async function Page() {
  return (
    <main className='pt-16 text-center'>
      <h1 className='text-5xl font-semibold mb-7'>Create post</h1>

      <form
        action={createPost}
        className='flex flex-col max-w-[400px] mx-auto gap-2  my-10'
      >
        <input
          type='text'
          name='title'
          placeholder='Title for new post'
          className='border rounded px-3 h-full'
          required
        />
        <textarea
          name='body'
          placeholder='Body content for new post'
          className='border rounded px-3 py-2'
          rows={6}
          required
        />
        <button className='h-10 bg-blue-500 px-5 rounded text-white'>
          Submit
        </button>
      </form>

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
