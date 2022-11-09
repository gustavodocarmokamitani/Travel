import styles from './styles.module.scss';

const LargeCard = ({title, image}) => {
    return(
        <a href={`/${title}`} className={styles.largeCard}>
            <img src={image} alt={title} width={600} height={385}/>
            <h1>{title}</h1>
        </a>
    )
}

export default LargeCard;