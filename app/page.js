import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <h1>Trivia</h1>
        <Link href='\quiz'>
          <button>Start Trivia</button>
        </Link>
      </div>
    </main>
  );
}