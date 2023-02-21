import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { AccountType, ReminderInfos } from "../../../types/types";
import { FormularioLembrete, InputAcao, InputData, InputDescricao, InputHora, LabelInput, TabelaLembrete, ThAcao, ThData, ThDescricao, ThHora} from "./modalLembreteStyled";
import { BotaoCancelar, BotaoConfirmar, DivBotoes } from "../../../styles/global";
import { hideReminderModal } from "../../../redux/slices/modalManagerSlice";
import { newReminder } from "../../../redux/slices/userSlice";
import { RootState } from "../../../redux/configureStore";
function ModalLembrete(lembreteInfo : ReminderInfos) {
    const dispatch = useDispatch();

    const modalVisualProps = {
        pointerEvents: 'none',
        opacity: '0',
    }
    const [modalVisual, setModalVisual] = useState(modalVisualProps);
    const { showReminderModalState } = useSelector((state : any) => state.modalManager);
    useEffect(() => {
        if (showReminderModalState.show) {
            if (showReminderModalState.type === "new") {
                inputAcao.current.value = "";
                inputData.current.value = "";
                inputHora.current.value = "";
                inputDescricao.current.value = "";
            }
            else if (showReminderModalState.type === "edit") {
                /* inputAcao.current.value = "";
                inputData.current.value = "";
                inputHora.current.value = "";
                inputDescricao.current.value = ""; */
            }
            setModalVisual({
                pointerEvents: 'auto',
                opacity: '1',  
            });
        }
        else {
            setModalVisual(modalVisualProps);
        }
    }, [showReminderModalState])

    const inputAcao : any = useRef();    
    const inputData : any = useRef();
    const inputHora : any = useRef();
    const inputDescricao : any = useRef();
    function submitHandle() {
        dispatch(hideReminderModal())
        if (showReminderModalState.type === "new") {
            dispatch(newReminder({
                accountID: lembreteInfo.accountId,
                acao: inputAcao.current.value,
                data: inputData.current.value,
                hora: inputHora.current.value,
                descricao: inputDescricao.current.value,
            }));
        }
        else if (showReminderModalState.type === "edit") {

        };
    }
    return(
        <FormularioLembrete onSubmit={((event) => { event.preventDefault(); submitHandle() })} sx={modalVisual}>
            <TabelaLembrete>
                <tbody>
                    <tr>
                        <ThAcao>
                            <LabelInput htmlFor="input-acao">Ação:&nbsp;</LabelInput>
                            <InputAcao ref={inputAcao} type="text" required autoComplete="off" id="input-acao" maxLength={21} />
                        </ThAcao>
                        <ThData>
                            <LabelInput htmlFor="input-data">Data:&nbsp;</LabelInput>
                            <InputData ref={inputData} type="date" required autoComplete="off" id="input-data" maxLength={8} max="2100-11-23" />
                        </ThData>
                        <ThHora>
                            <LabelInput htmlFor="input-hora">Hora:&nbsp;</LabelInput>
                            <InputHora ref={inputHora} type="time" required autoComplete="off" id="input-hora" />
                        </ThHora>
                    </tr>
                    <tr>
                        <ThDescricao colSpan={4} sx={{boxShadow: '4px 3.5px 3.5px #000000;'}}>
                            <LabelInput htmlFor="input-descricao" sx={{ marginBottom: '5px' }}>Descrição:&nbsp;</LabelInput>
                            <InputDescricao ref={inputDescricao} maxLength={66} id="input-descricao" required autoComplete="off" />
                        </ThDescricao>
                    </tr>
                </tbody>
            </TabelaLembrete>
            <DivBotoes>
                <BotaoConfirmar type="submit" variant="contained" size="large" startIcon={<CheckCircleIcon />}>
                    Confirmar
                </BotaoConfirmar>
                <BotaoCancelar onClick={(() => { dispatch(hideReminderModal()) })} variant="contained" size="large" startIcon={<CancelIcon />}>
                    Cancelar
                </BotaoCancelar>
            </DivBotoes>
        </FormularioLembrete>
    )
};
export default ModalLembrete;