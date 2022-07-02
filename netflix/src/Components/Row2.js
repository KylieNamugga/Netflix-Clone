import Main from "./Main";
import morbius from "../imgs/morbius.jpg"
import night from "../imgs/night.jpg"
import paws from "../imgs/paws.jpg"
import peninsula from "../imgs/peninsula.jpg"
import outfit from "../imgs/outfit.jpg"

const Row2 = () => {
    return (
        <div className="movies">
            <Main image={morbius} />
            <Main image={night} />
            <Main image={outfit} />
            <Main image={paws} />
            <Main image={peninsula} />

        </div>
    );
}

export default Row2;