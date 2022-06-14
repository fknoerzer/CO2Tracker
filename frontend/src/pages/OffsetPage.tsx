import {Trip} from "../model/Trip";

type OffsetPageProps = {
    trip: Trip
}


export default function OffsetPage({trip}: OffsetPageProps) {

    const donation = (trip.calculatedEmissions.totalEmissions * 0.03).toFixed(2);

    return (
        <div>
            <div className={"project-page-header"}>
            <h1>Carbon Offset Projects</h1>
            <p> To compensate your carbon footprint of <strong>{trip.calculatedEmissions.totalEmissions} CO<sub>2</sub>-eq</strong> for this trip you
                could donate <strong>{donation} €</strong> to one of the following quality international carbon
                reduction projects </p>
        </div>
            <div className={"project-card"}>
                <h3 className="project-headline">Malawi biomass conservation - Efficient stoves</h3>
                <img src="https://www.carbonfootprint.com/images/gs_malawi1_small.jpg"
                     className="project-image"  alt={"Malawi biomass conservation"}/>
                <ul className={"project-list"}>
                    <li>Location: Malawi, Africa</li>
                    <li>Est. Reductions: 10,000 tCO2e per year</li>
                    <p className={"project-text"}>The project aims to disseminate over 8,000 improved energy efficient
                        cookstoves to homes in Malawi. The stoves are more efficient and use less wood
                        for household cooking and heating than traditional stoves.</p>
                </ul>
                <a className={"project-link"} href="https://www.carbonfootprint.com/gs_ver_malawi_cookstove_carbon_offset.html">
                    More information</a>
            </div>
            <div className={"project-card"}>
                <h3 className="project-headline" >Rwanda Borehole Clean Drinking Water</h3>
                <img src="https://www.carbonfootprint.com/images/gs_rwanda1.jpg"
                     className="project-image" alt={"wanda Borehole Clean Drinking Water"}/>
                <ul className={"project-list"}>
                    <li>Location: Rwanda, Africa</li>
                    <li>Est. Reductions: 6,000 tCO2e per year</li>
                    <p className={"project-text"}>The Borehole project is a micro project in Rwanda, providing a source of clean drinking water to a local community.
                        The project is based around the supply of clean water to local communities in Rwanda through the rehabilitation of community
                        boreholes.</p>
                </ul>
                <a className={"project-link"} href="https://www.carbonfootprint.com/gs_rwanda_borehole.html">
                    More information</a>
            </div>
            <div className={"project-card"}>
                <h3 className="project-headline" >Dachunhe Sanji 6MW Hydropower Project</h3>
                <img src="https://www.carbonfootprint.com/images/vcs_china_hydro_166_1_300x200.jpg"
                     className="project-image" alt={"Dachunhe Sanji 6MW Hydropower Project"}/>
                <ul className={"project-list"}>
                    <li>Location: China, Asia</li>
                    <li>Est. Reductions: 22,668 tCO2e per year</li>
                    <p className={"project-text"}>The Dachunhe Sanji hydro project utilizes water resources from the
                        Dachunhe River to generate electricity, which will be delivered to the China Southern Power Grid without CO2 emissions..</p>
                </ul>
                <a className={"project-link"} href="https://www.carbonfootprint.com/vcs_china_hydro_166.html">
                    More information</a>
            </div>
            <div className={"project-card"}>
                <h3 className="project-headline" >Solar Project by ACME Group</h3>
                <img src="https://www.carbonfootprint.com/images/acme_india_solar.png"
                     className="project-image" alt={"Solar Project by ACME Group"}/>
                <ul className={"project-list"}>
                    <li>Location:India, Asia</li>
                    <li>Est. Reductions: 730,457 tCO2e per year</li>
                    <p className={"project-text"}>The project activity generates electricity using solar energy. The generated electricity is
                        exported to the regional electricty grid system in India.</p>
                </ul>
                <a className={"project-link"} href="https://www.carbonfootprint.com/vcs_india_solar_acme.html">
                    More information</a>
            </div>
            <a className={"more-projects-link"} href="https://www.carbonfootprint.com/carbonoffsetprojects.html">
                More Projects</a>
        </div>
    )
}