import styles from './footer.module.scss'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h3 className={styles.title}>Nosotros</h3>
            <p>Talleres Metalurgicos Miguel J Diaz es una empresa Argentina, dedicada a la fabricacion de herrajes para cortinas, surgida de un emprendimiento iniciado con el esfuerzo y trabajo sostenido desde 1970.</p>
          </div>

          <div className="col-lg-4">
            <h3 className={styles.title}>Contacto</h3>
            <p>Tel./Fax (+54 11) 4227-8940</p>
            <p>Almirante Cordero 4325 - Villa Domínico - Buenos Aires</p>
          </div>

          <div className="col-lg-4">
            <h3 className={styles.title}>Productos</h3>
            <p>Persianas de enrollar</p>
            <a href="#">Herraje para persiana tipo barrio</a>
            <a href="#">Herraje para persiana americana</a>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className={styles.copyright}>
              <p>Copyright © 2020 Metalúrgica Miguel J Diaz</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}