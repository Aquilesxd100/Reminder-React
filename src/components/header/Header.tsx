import { HeaderDiv, MiniLogo, PainelUsuario, InfoUsuario, IconeUsuario, BotaoSairDiv, BotaoExcluirDiv, BotaoPainel } from "./HeaderStyles";
import miniLogoIMG from "../../images/logo_menor.png";
import perfilUsuarioIMG from "../../images/icone-usuario.png";
import botaoDeslogarIMG from "../../images/erro.png";
import botaoExcluirContaIMG from "../../images/exclusao.png";
import { Typography } from "@mui/material";
import { HeaderProps } from "../../types/types";
function Header(props : HeaderProps) {
    return(
        <HeaderDiv>
            <MiniLogo src={miniLogoIMG} />
            <PainelUsuario>
                <InfoUsuario>
                    <IconeUsuario src={perfilUsuarioIMG}/>
                    <Typography variant="h3">{props.userName}</Typography>
                </InfoUsuario>
                <BotaoSairDiv>
                    <BotaoPainel onClick={(() => {})} src={botaoDeslogarIMG} />
                </BotaoSairDiv>
                <BotaoExcluirDiv>
                    <BotaoPainel onClick={(() => {})} src={botaoExcluirContaIMG} />
                </BotaoExcluirDiv>
            </PainelUsuario>
        </HeaderDiv>
    );
};
export default Header;