import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";

export default function P6BodySize() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <IronImage imgLo="/img/p_bodysize_screens2.64.webp" imgHi="/img/p_bodysize_screens2.512.webp" text={_("MAIN.P6.IMG")} h={512} w={512} />
            {/* <IronImage imgLo="/img/bodysize.64.webp" imgHi="/img/bodysize.512.webp" text={_("MAIN.P6.IMG")} h={512} w={512} /> */}
            <h1 className="text-center pt-3 ">{_("MAIN.P6.HEAD")}</h1>


            <section>
                <p className="mt-4">{_("PRODUCT.P6.ABOUT")}</p>
                <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1564205068`}
                    target="_blank" title={_("MAIN.P4.DWN")} className="ms-btn-apple"
                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                </a>
            </section>

            {/* Body compostion */}
            <section>
                <h4>{_("PRODUCT.P6.HEAD1")}</h4>
                <p className="mt-3">{_("PRODUCT.P6.DESC1")}</p>
            </section>

            {/* Chest and Bust */}
            <section>
                <h4>{_("PRODUCT.P6.HEAD2")}</h4>
                <p className="mt-3">{_("PRODUCT.P6.DESC2")}</p>
            </section>

            {/* Waist Circumferance */}
            <section>
                <h4>{_("PRODUCT.P6.HEAD3")}</h4>
                <p className="mt-3">
                    <a href="https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women" target="_blank">
                        {_("PRODUCT.P4.LINK2")}
                    </a>
                    {_("PRODUCT.P4.DESC2")}
                </p>
            </section>

            {/* Hips Width */}
            <section>
                <h4>{_("PRODUCT.P6.HEAD4")}</h4>
                <p className="mt-3">{_("PRODUCT.P6.DESC4")}</p>
            </section>

            <section>
                <h4>{_("PRODUCT.P4.HEAD1")}</h4>
                <p className="mt-3">{_("PRODUCT.P4.DESC1")}
                    <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" target="_blank">
                        <br /><small><i>{_("PRODUCT.P4.LINK1")}</i></small>
                    </a>
                </p>
            </section>

            {/* Body Shape */}
            <section>
                <h4>{_("PRODUCT.P6.HEAD5")}</h4>
                <p className="mt-3">{_("PRODUCT.P6.DESC5")}</p>
            </section>
        </div>

        <div className="pb-5 text-center">
            <IronImage imgLo="/img/p_bodysize_screens.64.webp" imgHi="/img/p_bodysize_screens.512.webp" text={_("MAIN.P6.IMG")} h={512} w={512} />
        </div>
        <Footer />
    </>
}