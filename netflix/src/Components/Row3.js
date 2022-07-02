import Main from "./Main"
import sonic from "../imgs/sonic.jpg"
import spiderman from "../imgs/spiderman.jpg"
import springs from "../imgs/springs.jpg"
import uncharted from "../imgs/uncharted.jpg"
import venom from "../imgs/Venom.jpg"

const Row3 = () => {
    return (
        <div className="movies">
            <Main image={sonic} />
            <Main image={spiderman} />
            <Main image={springs} />
            <Main image={uncharted} />
            <Main image={venom} />

        </div>
    );
}

export default Row3;