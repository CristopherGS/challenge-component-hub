
export default function ContentCard() {
    const alerta = () => {
        alert('Aqui esta el contenido del card');
    }
    return (
        <div>
            <img src="../img/illustration-hero.svg" alt="" />
            <div>
                <h2>Order Summary</h2>
                <p>You can now lisen to millons of songs,
                    audiobooks and podcasts on any device
                    anywhere you like!
                </p>
                <div className="content-price">
                    <img className="musiclogo" src="../img/icon-music.svg" alt="iconmusic" />
                    <h4 className="plan">Annual Plan
                        <span className="price"><br/>$59.99/year</span>
                    </h4>
                    <p className="change">
                    Change
                    </p>
                    
                </div>
                <button onClick={alerta}>Procced to Payment</button>
                <p className="cancel">Cancel Order</p>
            </div>
        </div>
    )
}
