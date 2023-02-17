import { DivLogo, Logo } from "./GridLogoStyles";
import imgLogo from "../../images/logo.png";
function GridLogo() {
    return (
        <DivLogo item container xs={12} md={6}>
            <Logo src={imgLogo}/>
        </DivLogo>
    )
}
export default GridLogo;