import Button from "@components/atoms/Button";
import Spacing from "@components/atoms/Spacing";
import Form from "@components/molecules/Form";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <>
      <Spacing height={76} />
      <Form
        fields={[
          { title: "Email / Username", type: "text" },
          { title: "Password", type: "password" },
        ]}
      />
      <Spacing height={58} />
      <section className={styles["btn-group"]}>
        <Button
          type="submit"
          backgroundColor="#0D2841"
          borderRadius={12}
          height={50}
          width={300}
        >
          <h3 style={{ color: "#F5F5F5" }}>Log in</h3>
        </Button>
        <p>or</p>
        <Button
          type="button"
        >
          <p>Log in with <span className="medium">Google</span></p>
        </Button>
      </section>
    </>
  );
}
