import profilePic from '../../assets/Bear.jpg';
import styles from './Card.module.css';

function Card(){
    return(
        <div className={styles.card}>
            <img className={styles.cardImage} src={profilePic} alt="profile picture" width={176}/>
            <h2 className={styles.cardTitle}>Owolabi Joseph</h2>
            <p className={styles.cardText}>I&#39;m a student, i&#39;m studying software engineering & play video games</p>
        </div>
    )
}

export default Card;