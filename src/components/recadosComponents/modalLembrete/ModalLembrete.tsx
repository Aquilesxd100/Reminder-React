import { Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import React from "react";
import { ReminderInfos } from "../../../types/types";
import { BotaoCancelar, BotaoConfirmar, DivBotoes, FormularioLembrete, InputAcao, InputData, InputDescricao, InputHora, LabelInput, TabelaLembrete, ThAcao, ThData, ThDescricao, ThHora} from "./modalLembreteStyled";
function ModalLembrete(lembreteInfo : ReminderInfos) {
    return(
        <FormularioLembrete>
            <TabelaLembrete>
                <tr>
                    <ThAcao>
                        <LabelInput htmlFor="input-acao">Ação:&nbsp;</LabelInput>
                        <InputAcao type="text" required autoComplete="off" id="input-acao" maxLength={21} />
                    </ThAcao>
                    <ThData>
                        <LabelInput htmlFor="input-data">Data:&nbsp;</LabelInput>
                        <InputData type="date" required autoComplete="off" id="input-data" maxLength={8} max="2100-11-23" />
                    </ThData>
                    <ThHora>
                        <LabelInput htmlFor="input-hora">Hora:&nbsp;</LabelInput>
                        <InputHora type="time" required autoComplete="off" id="input-hora" />
                    </ThHora>
                </tr>
                <tr>
                    <ThDescricao colSpan={4} sx={{boxShadow: '4px 3.5px 3.5px #000000;'}}>
                        <LabelInput htmlFor="input-descricao" sx={{ marginBottom: '5px' }}>Descrição:&nbsp;</LabelInput>
                        <InputDescricao maxLength={66} id="input-descricao" required autoComplete="off" />
                    </ThDescricao>
                </tr>
            </TabelaLembrete>
            <DivBotoes>
                <BotaoConfirmar variant="contained" size="large" startIcon={<CheckCircleIcon />}>
                    Confirmar
                </BotaoConfirmar>
                <BotaoCancelar variant="contained" size="large" startIcon={<CancelIcon />}>
                    Cancelar
                </BotaoCancelar>
            </DivBotoes>
        </FormularioLembrete>
    )
};
export default ModalLembrete;