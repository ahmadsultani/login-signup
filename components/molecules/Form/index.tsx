import styles from "./Form.module.css";
import Textbox from "@components/atoms/Textbox";

interface FormProps {
  fields: Array<{
    title: string,
    type: string
  }>
}

export default function Form({ fields }: FormProps) {
  return (
    <div className={styles["tb-group"]}>
      {fields.map((field, index) => (
        <Textbox title={field.title} type={field.type} key={index} />
      ))}
    </div>
  );
}
