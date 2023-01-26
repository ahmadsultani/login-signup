import AuthBackButton from "@components/AuthBackButton";
import AuthTitle from "@components/AuthTitle";
import SignupForm from "@components/organisms/SignupForm";
import Phone from "@components/Phone";

export default function Signup() {
  return (
    <Phone>
      <AuthBackButton />
      <AuthTitle type="signup" desc="To access all the features" />
      <SignupForm />
    </Phone>
  );
}