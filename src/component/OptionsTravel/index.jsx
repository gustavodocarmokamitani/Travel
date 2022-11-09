import styles from './styles.module.scss';

const OptionsTravel = ({image, title, text}) => {
  return (
    <div className={`d-flex flex-column align-items-center justify-content-center ${styles.optionsTravel}`}>
      <img src={image} width={72} alt="Diverse Destinations" />
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

export default OptionsTravel;
