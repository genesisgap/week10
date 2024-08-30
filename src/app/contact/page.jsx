import styles from './contact.module.css'

export default function ContactUsPage() {
  return (
    <div className={styles.container} style={{ backgroundImage: 'url(/public/quarkstudio.jpg)'}} >
      <h1 className={styles.h1}>Please get in touch with us..</h1>
      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea mollitia neque voluptates quia tempora ex, modi fugit, repellat rem harum consequuntur excepturi temporibus, dolore consequatur beatae natus autem minus corrupti. Voluptatem laudantium eligendi fugiat repudiandae dolores nobis hic numquam, totam tempore esse eius harum illo ut dolor ducimus qui. Accusantium minus magni reprehenderit illo sunt ducimus itaque iusto cupiditate ex earum? Pariatur repudiandae maxime sed cupiditate voluptatem quia tempore quidem? Ut quibusdam provident est assumenda facere cum architecto quos fugiat.</p>

      <form className={styles.form}>
        <h2 className={styles.formTitle}>Send us an email..</h2>
        <label className={styles.formLabel}>
          Name:
          <input className={styles.formInput} type="text" name="name" />
        </label>
        <br className={styles.formBreak} />
        <label className={styles.formLabel}>
          Email:
          <input className={styles.formInput} type="email" name="email" />
        </label>
        <br className={styles.formBreak} />
        <label className={styles.formLabel}>
          Tel:
          <input className={styles.formInput} type="tel" name="phone" />
        </label>
        <br className={styles.formBreak} />
        <label className={styles.formLabel}>
          Enter Your Message:
          <textarea className={styles.formInput} name="message" />
        </label>
        <br className={styles.formBreak} />
        <button className={styles.formButton} type="submit">Send</button>
      </form>
    </div>
  )
}