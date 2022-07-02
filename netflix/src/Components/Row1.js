import Main from "./Main";
import aquaman from "../imgs/aquaman.jpg"
import avatar from "../imgs/avatar.jpg"
import batman from "../imgs/batman.jpg"
import bumblebee from "../imgs/bumblebee.jpg"
import instantfamily from "../imgs/instantfamily.jpg"

const Row1 = () => {
    return (
        <div className="movies">
            <Main image={aquaman} />
            <Main image={avatar} />
            <Main image={batman} />
            <Main image={bumblebee} />
            <Main image={instantfamily} />
        </div>
    );
}

export default Row1;