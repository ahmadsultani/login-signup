import AuthBackButton from "@components/AuthBackButton";
import AuthTitle from "@components/AuthTitle";
import LoginForm from "@components/organisms/LoginForm";
import Phone from "@components/Phone";
import styles from "@styles/Auth.module.css";

export default function Login() {
  return (
    <Phone>
      <AuthBackButton />
      <AuthTitle type="login" desc="Good to see you back!" />
      <LoginForm />
    </Phone>
  );
}
