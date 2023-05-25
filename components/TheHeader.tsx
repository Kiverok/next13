import Link from "next/link";

const TheHeader = () => {
  return (
    <header className="container">
<Link className="navMenu" href="/">Home</Link>
<Link className="navMenu" href="/blog">Blog</Link>
<Link className="navMenu" href="/about">About</Link>
    </header>
  );
};

export { TheHeader };