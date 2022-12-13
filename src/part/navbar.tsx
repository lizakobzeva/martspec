import * as React from "react";
import _, { Locale } from "src/i18n/locale"
import NavBarLang from "./navbar-lang";

interface NavBarProps {
    title?: string;
}

export default function NavigationBar(props: NavBarProps) {
    return (
        <nav className="ms-navbar-nav navbar-expand-lg">
            <div className="container-fluid">

                <a className="navbar-brand"  href={Locale.i18nLink("/")}>
                    <img src="/img/logo.64.webp" alt={_("ERROR.404_BTN")} width={64} height={64}/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="/img/burger_menu.svg" alt={_("ERROR.404_BTN")} width={32} height={32}/>
                </button>

                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Us
                            </a>
                            <ul className="dropdown-menu dropdown-position border-1" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Company</a></li>
                                <li><a className="dropdown-item" href="#">Mission</a></li>
                                <li><a className="dropdown-item" href="#">Team</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Applications
                            </a>
                            <ul className="dropdown-menu dropdown-position border-1" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Vitamin Book</a></li>
                                <li><a className="dropdown-item" href="#">Body Size</a></li>
                                <li><a className="dropdown-item" href="#">Electrolyte</a></li>
                                <li><a className="dropdown-item" href="#">Body Mass</a></li>
                                <li><a className="dropdown-item" href="#">Body Zinc</a></li>
                                <li><a className="dropdown-item" href="#">Waistline</a></li>
                                <li><a className="dropdown-item" href="#">Emotion</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <div className="dropdown-container">

                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="/img/language_dropdown.svg" alt={_("ERROR.404_BTN")} width={32} height={32}/>
                                </a>
                                <ul className="dropdown-menu dropdown-position border-1">
                                    <li className="dropdown-item" hidden={Locale.language == 'en'}>
                                        <a className="nav-link" href="/en">English</a>
                                    </li>
                                    <li className="dropdown-item" hidden={Locale.language == 'ru'}>
                                        <a className="nav-link" href="/ru">Русский</a>
                                    </li>
                                    <li className="dropdown-item" hidden={Locale.language == 'de'}>
                                        <a className="nav-link" href="/de">Deutsche</a>
                                    </li>
                                    <li className="dropdown-item" hidden={Locale.language == 'fr'}>
                                        <a className="nav-link" href="/fr">Français</a>
                                    </li>
                                    <li className="dropdown-item" hidden={Locale.language == 'hi'}>
                                        <a className="nav-link" href="/hi">हिन्दी</a>
                                    </li>
                                    <li className="dropdown-item" hidden={Locale.language == 'pt'}>
                                        <a className="nav-link" href="/pt">Português</a>
                                    </li>
                                    <li className="dropdown-item" hidden={Locale.language == 'es'}>
                                        <a className="nav-link" href="/es">Español</a>
                                    </li>
                                    <li className="dropdown-item" hidden={Locale.language == 'zh'}>
                                        <a className="nav-link" href="/zh">中文</a>
                                    </li>
                                    <li className="dropdown-item" hidden={Locale.language == 'ja'}>
                                        <a className="nav-link" href="/ja">日本語</a>
                                    </li>
                                    <li className="dropdown-item" hidden={Locale.language == 'ar'}>
                                        <a className="nav-link" href="/ar">عربي</a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}