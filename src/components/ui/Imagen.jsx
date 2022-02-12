import './Imagen.css'

const Imagen = ({img, type, alt}) => {

    console.log(img, type, alt);
    return (
        <div className='container'>
            {(type = "logo" ? (
                <div className="text-logo">
                    <img
                        src={img}
                        alt={alt}
                        className={type === "logo" ? "logo" : "normal"}
                    />
                    <p className="text-logo">{alt}</p>
                </div>
            ) : (
                <img src={img} alt={alt} className="normal" />
            ))
            }

        </div>
    );
}

export default Imagen;
