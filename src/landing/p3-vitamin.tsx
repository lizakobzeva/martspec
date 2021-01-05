import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import MetaTags from 'react-meta-tags';
import NavigationBar from "src/part/navbar";
import IronImage from "src/part/iron-image";
const logo = require("src/img/vitamin.svg").default;

export default function P3LogVitamin() {
    return (
        <div>
            <MetaTags>
                <meta property="og:title" content={_("MAIN.P3.HEAD")} />
                <meta property="og:image" content="https://martspec.com/img/p_vitamin.png" />
                <meta property="og:description" content={_("MAIN.P3.TEXT")} />
                <meta property="og:url" content="https://martspec.com/product/logvitamin" />

                <meta name="twitter:title" content={_("MAIN.P3.HEAD")} />
                <meta name="twitter:description" content={_("MAIN.P3.TEXT")} />

                <title>{_("MAIN.P3.HEAD")}</title>
                <link rel="canonical" href="https://martspec.com/product/logvitamin" />
                <meta name="description" content={_("MAIN.P3.TEXT")} />
            </MetaTags>

            <div className="fixed-top bg-white" >
                <NavigationBar title={_("MAIN.P3.HEAD")} />
            </div>

            <section className="rr-s-about">
                <div className="row" >
                    <div className="col-sm-12 col-md-9 order-last order-md-1">
                        <h3 className="mt-4">{_("PRODUCT.P3.ABOUT")}</h3>
                        <h1>{_("PRODUCT.P3.HEAD1")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P3.DESC1")}</h3>


                        <h1>{_("PRODUCT.P3.HEAD2")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P3.DESC2")}
                            <small><i><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-017-4888-1" target="_blank">
                                {_("BTN.SRC2")}
                            </a></i></small>
                        </h3>

                        <h1>{_("PRODUCT.P3.HEAD3")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P3.DESC3")}
                            <a href="https://ods.od.nih.gov/factsheets/VitaminA-Consumer/" target="_blank">
                                {_("BTN.SRC1")}
                            </a>
                        </h3>

                        <h1>{_("PRODUCT.P3.HEAD4")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P3.DESC4")}
                            <a href="https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-c/" target="_blank">
                                {_("BTN.FACT")}
                            </a>
                        </h3>

                        <h1>{_("PRODUCT.P3.HEAD5")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P3.DESC5")}
                            <a href="https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/" target="_blank">
                                {_("BTN.MORE")}.
                            </a>
                        </h3>
                        <h1>{_("PRODUCT.P3.HEAD6")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P3.DESC6")}
                            <a href="https://www.mayoclinic.org/drugs-supplements-vitamin-e/art-20364144" target="_blank">
                                {_("BTN.SRC1")}
                            </a>
                        </h3>
                        <h1>{_("PRODUCT.P3.HEAD7")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P3.DESC7")}
                            <a href="https://www.mountsinai.org/health-library/supplement/vitamin-b12-cobalamin" target="_blank">
                                {_("BTN.SRC2")}.
                            </a>
                        </h3>
                        <h1>{_("PRODUCT.P3.HEAD8")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P3.DESC8")}
                            <a href="https://www.healthline.com/health/biotin-hair-growth" target="_blank">
                                {_("BTN.MORE")}.
                            </a></h3>
                        <h1>{_("PRODUCT.P3.HEAD9")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P3.DESC9")}
                            <a href="https://ods.od.nih.gov/factsheets/Folate-Consumer/" target="_blank">
                                {_("BTN.SRC1")}.
                            </a></h3>
                        <h1>{_("PRODUCT.P3.HEAD0")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P3.DESC0")}
                            <a href="https://www.mayoclinic.org/drugs-supplements-niacin/art-20364984" target="_blank">
                                {_("BTN.FACT")}.
                            </a></h3>

                    </div>


                    <div className="col-sm-12 col-md-3 order-sm-1">
                        <img src={logo} className="mx-auto" alt="Recruiter" />
                    </div>
                </div>
            </section>


            <div className="container mb-5 pb-5">
                <div className="row align-items-center justify-content-sm-center" >
                    <div className="col-md-7 col-12 pb-5">
                        <IronImage imgLo="/img/p_vitamin_screens_sm.png" imgHi="/img/p_vitamin_screens.png" text={_("MAIN.P3.IMG")} />
                    </div>
                    <div className="col-md-5 col-12 text-center pb-5">
                        <a href={`https://apps.apple.com/${_("APPSTORE")}/app/log-vitamin/id1507629553`}
                            target="_blank" title={_("MAIN.P3.DWN")}>
                            <span className="ms-btn-apple my-5 float-md-right text-center"></span>
                        </a>
                    </div>
                </div>
            </div>


            <Footer />
        </div >
    )
}