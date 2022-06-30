import Nav from "./Components/Nav"
import Main from "./Components/Main"
import aquaman from "./imgs/aquaman.jpg"
import avatar from "./imgs/avatar.jpg"
import batman from "./imgs/batman.jpg"
import bumblebee from "./imgs/bumblebee.jpg"
import instantfamily from "./imgs/instantfamily.jpg"
import morbius from "./imgs/morbius.jpg"
import night from "./imgs/night.jpg"
import paws from "./imgs/paws.jpg"
import peninsula from "./imgs/peninsula.jpg"
import sonic from "./imgs/sonic.jpg"
import spiderman from "./imgs/spiderman.jpg"
import springs from "./imgs/springs.jpg"
import uncharted from "./imgs/uncharted.jpg"
import venom from "./imgs/Venom.jpg"
import outfit from "./imgs/outfit.jpg"




function App() {
  return (
    <div>
      <Nav />
      <div className="movies">
        <Main image={aquaman} />
        <Main image={avatar} />
        <Main image={batman} />
        <Main image={bumblebee} />
        <Main image={instantfamily} />
      </div>
      <div className="movies">
        <Main image={morbius} />
        <Main image={night} />
        <Main image={outfit} />
        <Main image={paws} />
        <Main image={peninsula} />

      </div>
      <div className="movies">
        <Main image={sonic} />
        <Main image={spiderman} />
        <Main image={springs} />
        <Main image={uncharted} />
        <Main image={venom} />

      </div>
    </div>
  );
}

export default App;
