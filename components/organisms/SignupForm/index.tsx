import Button from "@components/atoms/Button";
import ProfileButton from "@components/atoms/ProfileButton";
import Spacing from "@components/atoms/Spacing";
import Form from "@components/molecules/Form";
import Checkbox from "./Checkbox";

import styles from "./SignupForm.module.css";

export default function SignupForm() {
  return (
    <>
      <ProfileButton />
      <Form
        fields={[
          { title: "Email", type: "text" },
          { title: "Password", type: "password" },
        ]}
      />
      <Checkbox />
      <Spacing height={29} />
      <section className={styles["btn-group"]}>
        <Button
          type="submit"
          backgroundColor="#0D2841"
          borderRadius={12}
          height={50}
          width={300}
        >
          <p className="medium" style={{ color: "#F5F5F5" }}>
            Sign Up
          </p>
        </Button>
        <p>or</p>
        <Button type="button">
          <p>
            Sign up with <span className="medium">Google</span>
          </p>
        </Button>
      </section>
    </>
  );
}
