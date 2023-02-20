import { FundoModal, MsgExclusao } from "./modalExclusaoStyled";
import { BotaoCancelar, BotaoConfirmar, DivBotoes } from "../../../styles/global";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Typography } from "@mui/material";

function ModalExclusao() {
    return (
        <FundoModal>
            <MsgExclusao>
                <Typography variant="h2">Tem certeza que deseja <span className="destaque">excluir</span> sua conta?</Typography>           
                 <DivBotoes>
                    <BotaoConfirmar variant="contained" size="large" startIcon={<CheckCircleIcon />}>
                        Confirmar
                    </BotaoConfirmar>
                    <BotaoCancelar variant="contained" size="large" startIcon={<CancelIcon />}>
                        Cancelar
                    </BotaoCancelar>
                </DivBotoes>
            </MsgExclusao>
        </FundoModal>
    );
};
export default ModalExclusao;