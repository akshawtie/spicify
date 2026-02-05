import { Link } from 'react-router-dom';

import "./Explorer.css";
function Explorer(){
    return(
        <>
         <div className="mainright">
      
      
       {/* TV Girl Section */}

          <a className="headtext">

            <img src="/r/tvgirlfav.jpg" className="fav" alt="TV Girl favorite" /> TV Girl....

          </a>

          <div className="posters">

            <Link to="/album/queen"><img src="/r/r1p2.jpg" className="posterL" alt="Poster" /></Link>
            <Link to="/album/radiohead"><img src="/r/r1p1.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r1p3.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r1p4.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r1p5.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/radiohead"><img src="/r/tvpfp.jpg" className="poster2" alt="Profile Picture" /></Link>

          </div>
          {/* Radiohead Section */}
          <a className="headtext">
            <img src="/r/rdhdfav.jpg" className="fav" alt="Radiohead favorite" /> Radiohead....
          </a>
          <div className="posters">
            <Link to="/album/queen"><img src="/r/r2p1.jpg" className="posterL" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r2c2.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r1c3.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r2p7.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r2p8.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/radiohead"><img src="/r/r1c1.jpg" className="poster2" alt="Poster" /></Link>
          </div>
          {/* Umbrella Rock Section */}

          <a className="headtext">

            <img src="/r/image.png" className="fav" alt="Umbrella Rock favorite" /> Umbrella Rock....

          </a>

          <div className="posters">

            <Link to="/album/queen"><img src="/r/r3p1.jpg" className="posterL" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r3p4.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r3p3.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r3p5.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/queen"><img src="/r/r3p2.jpg" className="poster3" alt="Poster" /></Link>
            <Link to="/album/radiohead"><img src="/r/jeffpfp.png" className="poster2" alt="Profile Picture" /></Link>

          </div>

         

          {/* Bhartiya Sangeet Section (Repeated sections cleaned up) */}

          <a className="headtext">

            <img src="/r/rockfav.jpg" className="fav" alt="Rock favorite" /> Bhartiya Sangeet....

          </a>

          <div className="posters">

            <Link to="/album/queen"><img src="/r/r4p5.jpg" className="posterL" alt="Poster" /></Link>

            <Link to="/album/queen"><img src="/r/r4p2.jpg" className="poster3" alt="Poster" /></Link>

            <Link to="/album/queen"><img src="/r/r4p4.jpg" className="poster3" alt="Poster" /></Link>

            <Link to="/album/queen"><img src="/r/r4p6.jpg" className="poster3" alt="Poster" /></Link>

            <Link to="/album/queen"><img src="/r/r4p1.jpg" className="poster3" alt="Poster" /></Link>

            <Link to="/album/radiohead"><img src="/r/r4c.jpg" className="poster2" alt="Poster" /></Link>

          </div>



          <a className="headtext">

            <img src="/r/rockfav.jpg" className="fav" alt="Rock favorite" /> Oh no i dropped my feminist literature....

          </a>

          <div className="posters">

            <Link to="/album/queen"><img src="/r/r5p1.jpg" className="posterL" alt="Poster" /></Link>

            <Link to="/album/queen"><img src="/r/r5p5.jpg" className="poster3" alt="Poster" /></Link>

            <Link to="/album/queen"><img src="/r/r5p2.jpg" className="poster3" alt="Poster" /></Link>

            <Link to="/album/queen"><img src="/r/r5p3.jpg" className="poster3" alt="Poster" /></Link>

            <Link to="/album/queen"><img src="/r/r5p4.jpg" className="poster3" alt="Poster" /></Link>

            <Link to="/album/radiohead"><img src="/r/clairopfp.jpg" className="poster2" alt="Profile Picture" /></Link>

          </div>
          <br/><br/><br/><br/>
        </div>
        
        </>
    )
}
export default Explorer;