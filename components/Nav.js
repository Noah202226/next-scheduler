import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/journal">Journal</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>

      <style jsx>
        {`
          ul {
            display: flex;
            list-style: none;
            align-items: flex-start;
            justify-content: flex-start;
          }
          ul li {
            font-size: 1.5rem;
            padding: 2px 5px;
            color: red;
          }
        `}
      </style>
    </nav>
  );
}
