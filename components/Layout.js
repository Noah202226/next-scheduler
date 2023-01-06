import AppStyles from "../styles/App.module.css";

import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <div className={AppStyles.container}>
        <div className={AppStyles.layout}>
          <Nav />
          <div className={AppStyles.main}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
