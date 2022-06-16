import {Trip} from "../model/Trip";
import "../components/styles/OffsetPage.css"

type OffsetPageProps = {
    trip: Trip
}


export default function OffsetPage({trip}: OffsetPageProps) {

    const donation = (trip.calculatedEmissions.totalEmissions * 0.03).toFixed(2);

    return (
        <div className={"offset-page"} >
            <h1>Carbon Offset Projects</h1>
            <div className={"project-page-header"}>
                <p> To compensate your emissions of <span className={"value-field"}>{trip.calculatedEmissions.totalEmissions} CO<sub>2</sub>-eq</span>
                    donate <span className={"value-field"}>{donation}€</span> to one of the following projects.</p>
            </div>
            <div className={"project-card"}>
                <h3 className="project-headline" >Solar Project by ACME Group</h3>
                <img src="https://www.carbonfootprint.com/images/acme_india_solar.png"
                     className="project-image" alt={"Solar Project by ACME Group"}/>
                    <p>Location:India, Asia</p>
                    <p>Est. Reductions: 730.457 t CO<sub>2</sub>-eq per year</p>
                    <p className={"project-text"}>The project activity generates electricity using solar energy. The generated electricity is
                        exported to the regional electricity grid system in India.</p>
                <a className={"project-link"} href="https://www.carbonfootprint.com/vcs_india_solar_acme.html">
                    More information</a>
            </div>
            <div className={"project-card"}>
                <h3 className="project-headline" >Dachunhe Sanji 6MW Hydropower Project</h3>
                <img src="https://www.carbonfootprint.com/images/vcs_china_hydro_166_1_300x200.jpg"
                     className="project-image" alt={"Dachunhe Sanji 6MW Hydropower Project"}/>
                <p>Location: China, Asia</p>
                <p>Est. Reductions: 22.668 t CO<sub>2</sub>-eq per year</p>
                <p className={"project-text"}>The Dachunhe Sanji hydro project utilizes water resources from the
                    Dachunhe River to generate electricity, which will be delivered to the China Southern Power Grid without CO2 emissions..</p>
                <a className={"project-link"} href="https://www.carbonfootprint.com/vcs_china_hydro_166.html">
                    More information</a>
            </div>
            <div className={"project-card"}>
                <h3 className="project-headline">Malawi biomass conservation - Efficient stoves</h3>
                <img src="https://www.carbonfootprint.com/images/gs_malawi1_small.jpg"
                     className="project-image"  alt={"Malawi biomass conservation"}/>
                    <p>Location: Malawi, Africa</p>
                    <p>Est. Reductions: 10.000 t CO<sub>2</sub>-eq per year</p>
                    <p className={"project-text"}>The project aims to disseminate over 8,000 improved energy efficient
                        cookstoves to homes in Malawi. The stoves are more efficient and use less wood
                        for household cooking and heating than traditional stoves.</p>
                <a className={"project-link"} href="https://www.carbonfootprint.com/gs_ver_malawi_cookstove_carbon_offset.html">
                    More information</a>
            </div>
            <div className={"project-card"}>
                <h3 className="project-headline" >Rwanda Borehole - Clean Drinking Water</h3>
                <img src="https://www.carbonfootprint.com/images/gs_rwanda1.jpg"
                     className="project-image" alt={"wanda Borehole Clean Drinking Water"}/>
                    <p>Location: Rwanda, Africa</p>
                    <p>Est. Reductions: 6.000 t CO<sub>2</sub>-eq per year</p>
                    <p className={"project-text"}>The Borehole project is a micro project in Rwanda, providing a source of clean drinking water to a local community.
                        The project is based around the supply of clean water to local communities in Rwanda through the rehabilitation of community
                        boreholes.</p>
                <a className={"project-link"} href="https://www.carbonfootprint.com/gs_rwanda_borehole.html">
                    More information</a>
            </div>

        </div>
    )
}