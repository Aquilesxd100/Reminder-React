import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { LembreteInfoType } from "../../../types/types";
import LinhaEspacamento from "../linhaEspaco/LinhaEspacamento";
import { BotaoEdicao, BotaoEdicaoMobile, BotaoExcluir, BotaoExcluirMobile, LembreteTBody, ThAcao, ThBotoesDesktop, ThBotoesMobile, ThData, ThDescricao, ThHora, TrBasico, TrBotoesMobile, TrDescricao } from "./LembreteStyled";
function Lembrete(lembreteInfos : LembreteInfoType) {
    return(
        <>
            <LembreteTBody>
                <TrBasico>
                    <ThAcao><p><span>Ação:&nbsp;</span>{lembreteInfos.acao}</p></ThAcao>
                    <ThData><p><span>Data:&nbsp;</span>{lembreteInfos.data}</p></ThData>
                    <ThHora><p><span>Hora{"(s)"}:&nbsp;</span>{lembreteInfos.hora}</p></ThHora>
                    <ThBotoesDesktop>
                        <BotaoEdicao onClick={(() => {})} variant="outlined" size="medium">
                            <EditIcon />
                        </BotaoEdicao>
                        <BotaoExcluir onClick={(() => {})} variant="outlined" size="medium">
                            <DeleteIcon />
                        </BotaoExcluir>
                    </ThBotoesDesktop>
                </TrBasico>
                <TrDescricao>
                    <ThDescricao colSpan={4}>
                        <span>Descrição:&nbsp;</span>{lembreteInfos.descricao}
                    </ThDescricao>
                </TrDescricao>
                <TrBotoesMobile>
                    <ThBotoesMobile>
                        <BotaoEdicaoMobile onClick={(() => {})} variant="outlined" size="medium">
                            <EditIcon />
                        </BotaoEdicaoMobile>
                        <BotaoExcluirMobile onClick={(() => {})} variant="outlined" size="medium">
                            <DeleteIcon />
                        </BotaoExcluirMobile>
                    </ThBotoesMobile>
                </TrBotoesMobile>
            </LembreteTBody>
        </>
    )
}
export default Lembrete;