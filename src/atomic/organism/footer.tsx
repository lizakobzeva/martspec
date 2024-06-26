import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import SocialBar from "@/atomic/organism/social-bar";

export function LanguageSwitcher() {
    return (
        <div className="btn-group btn-group-toggle text-center" data-toggle="buttons">
            <button
                className={`ms-btn-lang ${Locale.language == "en" ? "disabled" : "active"} language`}
                onClick={() => (Locale.language = "en")}
            >
                English
            </button>
            <span>|</span>
            <button
                className={`ms-btn-lang ${Locale.language == "ru" ? "disabled" : "active"} language`}
                onClick={() => (Locale.language = "ru")}
            >
                Русский
            </button>
        </div>
    );
}

export const Footer = () => (
    <footer>
        <div className="px-0 py-5">
            <div className="ms-s-offset my-2">
                <div className="row">
                    <div className="col-md-4 col-7 d-flex flex-column">
                        <h2 className="mb-4"> {_("NAV.ABOUT").toUpperCase()} </h2>
                        <a className="footer-link mb-1" href={Locale.i18nLink("about")}>
                            {" "}
                            {_("ABOUT.HEAD")}{" "}
                        </a>
                        <a className="footer-link mb-1" href={Locale.i18nLink("mission")}>
                            {" "}
                            {_("MISSION.HEAD")}{" "}
                        </a>
                        <a className="footer-link mb-1" href={Locale.i18nLink("team")}>
                            {" "}
                            {_("TEAM.HEAD")}{" "}
                        </a>
                        <a className="footer-link mb-1" href={Locale.i18nLink("careers")}>
                            {" "}
                            {_("CAREERS.HEAD")}{" "}
                        </a>
                        <a className="footer-link" href={Locale.i18nLink("privacy-policy")}>
                            {" "}
                            {_("PP.HEAD")}{" "}
                        </a>
                    </div>

                    <div className="col-md-4 col-5 d-flex flex-column">
                        <h2 className="mb-4"> {_("NAV.APPS").toUpperCase()} </h2>
                        <a className="footer-link mb-1" href={Locale.i18nLink("vitamin")}>
                            {" "}
                            {_("VITAMIN.HEAD")}{" "}
                        </a>
                        <a className="footer-link mb-1" href={Locale.i18nLink("bodysize")}>
                            {" "}
                            {_("SIZE.HEAD")}{" "}
                        </a>
                        <a className="footer-link mb-1" href={Locale.i18nLink("bodymass")}>
                            {" "}
                            {_("MASS.HEAD")}{" "}
                        </a>
                        <a className="footer-link mb-1" href={Locale.i18nLink("waistline")}>
                            {" "}
                            {_("WAIST.HEAD")}{" "}
                        </a>
                        <a className="footer-link mb-1" href={Locale.i18nLink("bodyzinc")}>
                            {" "}
                            {_("ZINC.HEAD")}{" "}
                        </a>
                        <a className="footer-link mb-1" href={Locale.i18nLink("emotion")}>
                            {" "}
                            {_("EMOTION.HEAD")}{" "}
                        </a>
                        <a className="footer-link mb-1" href={Locale.i18nLink("electrolyte")}>
                            {" "}
                            {_("ELECTROLYTE.HEAD")}{" "}
                        </a>
                    </div>

                    <div className="col-md-4 col-12 d-flex flex-md-column flex-row-reverse px-0 icon-container">
                        <div>
                            <a
                                href={`https://apps.apple.com/${_("COUNTRY_CODE")}/developer/martspec-llc/id1506250419?l=${Locale.language}`}
                                target="_blank"
                                title={_("FOOTER.APPLE_BTN.TITLE")}
                                className="ms-btn-apple"
                            >
                                <img
                                    src={"/img/apple_btn/" + Locale.language + ".svg"}
                                    alt={_("FOOTER.APPLE_BTN.ALT")}
                                />
                            </a>
                        </div>
                        <SocialBar color="white" />
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <hr />
        </div>

        <div className="ms-s-offset copyright">
            <div className="row">
                <span className="px-2">{_("FOOTER.C")}</span>
            </div>
        </div>

        <br />
    </footer>
);
