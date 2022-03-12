import styles from "../../styles/address.module.css";

export default function Address({ PhysAddress, ContactInfo }) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <ul className={styles.list}>
          {PhysAddress.map((elem) => {
            return (
              <li className={styles.listItem} key={elem}>
                {elem}
              </li>
            );
          })}
          <br></br>
          {ContactInfo.map((item) => {
            return (
              <li className={styles.listItem} key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
