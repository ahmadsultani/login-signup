import styles from "./Title.module.css";
import classNames from "classnames";

interface TitleProps {
  type: "signup" | "login";
  desc: string;
}

export default function AuthTitle({ type, desc}: TitleProps) {
  const signupClassNames = classNames({
    [styles.text] : true,
    [styles.active]: type === "signup",
  });
  const loginClassNames = classNames({
    [styles.text] : true,
    [styles.active]: type === "login",
  });
  return (
    <>
      <div className={styles.container}>
        <h2 className={signupClassNames}>
          Sign Up
        </h2>
        <h2>&nbsp;/&nbsp;</h2>
        <h2 className={loginClassNames}>
          Log In
        </h2>
      </div>
      <p className="medium">{desc}</p>
    </>
  );
}
