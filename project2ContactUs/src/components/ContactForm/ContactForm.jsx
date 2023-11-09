import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

  const [name, setname] = useState("Sai Charan")
  const [email, setemail] = useState("a@gmail.com");
  const [text, settext] = useState("second")

  const onSubmit=(e)=>{
    e.preventDefault();
    setname(e.target[0].value);
    setemail(e.target[1].value);
    settext(e.target[2].value);
  }

  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topbtn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="20px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="20px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="20px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">text</label>
            <textarea type="text" rows={4} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
          <div>{name+"  "+email+"  "+text+"  "}</div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img
          src="../images/contact.svg"
          alt="contact image"
          height="400px"
          width="500px"
        />
      </div>
    </section>
  );
};

export default ContactForm;
