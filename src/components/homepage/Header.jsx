export default function Header() {
    return(
        <header>
            <nav>
                <div className="logo">
                    <img src="/assets/images/logo.svg" alt=""/>
                </div>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Masuk
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Daftar
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );

}