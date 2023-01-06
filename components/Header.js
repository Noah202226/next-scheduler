import HeaderStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h2 className={HeaderStyles.header}>My Personal Scheduler Assistant</h2>
      <p>Make your life meaningful and challenging</p>
    </div>
  );
}
