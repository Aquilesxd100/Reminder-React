import imgLogo from "../../images/logo.png";
import { DivLogo, Logo } from "./GridLogoStyles";
function GridLogo() {
    return (
        <DivLogo item container xs={12} md={6}>
            <Logo src={imgLogo}/>
        </DivLogo>
    )
}
export default GridLogo;