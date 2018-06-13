import React from "react";
import styles from "./css/homework.module.scss";

const Lesson3Homework = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <header className={styles.header}>
          <h1>New York</h1>
        </header>
        <nav className={styles.navigation}>
          <a href="http://www.syracuse.com" className={styles.navItem}>
            Syracuse
          </a>{" "}
          |{" "}
          <a href="http://www.rochester.com" className={styles.navItem}>
            Rochester
          </a>{" "}
          |{" "}
          <a href="http://www.buffalo.com" className={styles.navItem}>
            Buffalo
          </a>{" "}
          |{" "}
          <a href="http://www.binghamton.com" className={styles.navItem}>
            Binghamton
          </a>{" "}
          |{" "}
          <a href="http://www.albany.com" className={styles.navItem}>
            Albany
          </a>
        </nav>
        <article className={styles.content}>
          <figure className={styles.heroImage}>
            <img src="http://www.svahtml.com/images/nys.jpg" alt="" />
          </figure>

          <h2>Climate</h2>

          <p>
            The climate of New York State is broadly representative of the humid
            continental type that prevails in the northeastern United States,
            but its articleersity is not usually encountered within an area of
            comparable size. The Great Lakes, ocean, rivers, and mountains give
            New York interesting weather. Masses of cold, dry air frequently
            arrive from the northern interior of the continent. Prevailing winds
            from the south and southwest transport warm, humid air, which has
            been conditioned by the Gulf of Mexico and adjacent subtropical
            waters. These two air masses provide the dominant continental
            characteristics of the climate. A third great air mass flows inland
            from the North Atlantic Ocean and produces cool, cloudy, and damp
            weather conditions.{" "}
          </p>
          <p>
            Nearly all storm and frontal systems moving eastward across the
            continent pass through or come close in proximity to New York State.
            Storm systems often move northward along the Atlantic coast and have
            an important influence on the weather and climate of Long Island and
            the lower Hudson Valley. Frequently, areas deep in the interior of
            the state feel the effects of such coastal storms.{" "}
          </p>

          <h3>Winters</h3>
          <p>
            The winters are long and cold in the Plateau Divisions of the state.
            In the majority of winter seasons, a temperature of -13&deg;F
            (-25&deg;C) or lower can be expected in the northern highlands
            (Northern Plateau) and 5&deg;F (-15&deg;C) or colder in the
            southwestern and east-central highlands (Southern Plateau). The
            Adirondack region records from 35 to 45 days with below zero
            temperatures in normal to severe winters. Much of Upstate New York,
            particularly Western and Central New York, are typically affected by
            lake-effect snows. This usually results in high yearly snowfall
            totals in these regions. Winters are also long and cold in both
            Western and Central New York, though not as cold as the Adirondack
            region. The New York City metro area in comparison to the rest of
            the state is milder in the winter. Thanks in part to geography (its
            proximity to the Atlantic and being shielded to the north and west
            by hillier terrain), the New York metro area usually sees far less
            snow than the rest of the state. Lake-effect snow rarely affects the
            New York metro area, except for its extreme northwestern suburbs.
            Winters also tend to be noticeably shorter here than the rest of the
            state.{" "}
          </p>

          <h3>Summers</h3>
          <p>
            The summer climate is cool in the Adirondacks, Catskills, and higher
            elevations of the Southern Plateau. The New York City area and lower
            portions of the Hudson Valley have rather warm summers by
            comparison, with some periods of high, uncomfortable humidity. The
            remainder of New York State enjoys pleasantly warm summers, marred
            by only occasional, brief intervals of sultry conditions. Summer
            daytime temperatures usually range from the upper 70s to mid
            80s&deg;F (25 to 30&deg;C) over much of the State, producing an
            atmospheric environment favorable to many athletic, recreational,
            and other outdoor activities.{" "}
          </p>
          <p>
            New York ranks 46th among the 50 states in the amount of greenhouse
            gases generated per person. This efficiency is primarily due to the
            state's relatively higher rate of mass transit use.{" "}
          </p>
        </article>
        <footer className={styles.footer}>
          <p>&copy; 2017 SVA HTML </p>
        </footer>
      </main>
    </div>
  );
};

export default Lesson3Homework;
