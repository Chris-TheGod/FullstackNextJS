import Form from '@/components/form';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default async function Page() {
  return (
    <main className='pt-16 text-center'>
      <h1 className='text-5xl font-semibold mb-7'>Create post</h1>

      <Form />

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
