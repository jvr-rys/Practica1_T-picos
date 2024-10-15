import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <>
      <h1>My First Post</h1>
      <Image
        src="/images/profile.jpg" // Asegúrate de que la imagen esté en la carpeta correcta
        height={144}
        width={144}
        alt="Your Name"
      />
      <h2>
        <Link href="/">Home</Link>
      </h2>
    </>
  );
}
