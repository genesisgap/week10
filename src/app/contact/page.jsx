import styles from './contact.module.css';
import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.h1}>Get in Touch</h1>
        <p className={styles.p}>
          We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to drop us a message. 
        </p>

        <form className={styles.form}>
          <h2 className={styles.formTitle}>Send us an email</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input id="name" className={styles.formInput} type="text" name="name" placeholder="Your Name" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input id="email" className={styles.formInput} type="email" name="email" placeholder="Your Email" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>Phone</label>
            <input id="phone" className={styles.formInput} type="tel" name="phone" placeholder="Your Phone Number" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Message</label>
            <textarea id="message" className={styles.formTextarea} name="message" placeholder="Write your message here..."></textarea>
          </div>

          <button className={styles.formButton} type="submit">Send Message</button>

          <br />

          <br />

          <Link href={'/'}>
          <div className='flex text-1x1 font-bold hover:text-blue-700 text-white justify-center items-center bg-gray-950 rounded-md py-4 gap-2 capitalize'>
          go to home</div>
          </Link >

        </form>
         </div>
    </div>
      
  );
}
