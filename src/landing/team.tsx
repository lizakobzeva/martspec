import * as React from "react";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import _ from "src/i18n/locale";
import TeamMember from "src/part/teamMember";
import teamData from "src/data/team.json";

export default function Team() {

    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 text-center ms-team">
            <section>
                <h1>{_("TEAM.HEAD")}</h1>
                <p>{_("TEAM.SUBHEAD")}</p>
                <div className=" d-flex flex-wrap justify-content-center members-list">
                    {
                        teamData.map(member => <TeamMember key={member.name} {...member} />)
                    }
                </div>
            </section>
        </div>
          
        <Footer />
    </>
}