import "./Hero.css";
export default function Hero(){
    return(
    <section className="hero-section">
        <div className="hero-text">
            <h1 className="hero-title">BEM-VINDO ao</h1>
            <h2 className="hero-subtitle">Quintiliano's Coffee</h2>

            <h2 className="hero-phrase">
               A sofisticação dos cafés gourmet que encantam em cada gole.
            </h2>
            <p className="hero-description">
                Nossos cafés e delícias combinam ingredientes selecionados com um toque artesenal e sofisticado.Uma experiência única em sabor e aroma.</p>
        </div>
        <div className="hero-image">
            <img src="cafefundo.png" alt="café/fundo" />
        </div>
    </section>
    );
}