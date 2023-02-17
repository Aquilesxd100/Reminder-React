import { ReminderInfos } from "../../../types/types";
import { FormularioLembrete, LabelAcao, TabelaLembrete, ThAcao } from "./modalLembrete";
function ModalLembrete(lembreteInfo : ReminderInfos) {
    return(
        <FormularioLembrete>
            <TabelaLembrete>
                <tr>
                    <ThAcao>
                        <LabelAcao htmlFor='input-acao'>Ação</LabelAcao>
                        <InputAcao type="text" required autocomplete="off" id="input-acao" maxlength={21} />
                    </ThAcao>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                </tr>
            </TabelaLembrete>
        </FormularioLembrete>
    )
};
export default ModalLembrete;