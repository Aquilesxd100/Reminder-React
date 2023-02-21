import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { ReminderInfos } from "../../../types/types";
import { FormularioLembrete, InputAcao, InputData, InputDescricao, InputHora, LabelInput, TabelaLembrete, ThAcao, ThData, ThDescricao, ThHora} from "./modalLembreteStyled";
import { BotaoCancelar, BotaoConfirmar, DivBotoes } from "../../../styles/global";
import { hideReminderModal } from "../../../redux/slices/modalManagerSlice";
import { newReminder } from "../../../redux/slices/userSlice";
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
            setModalVisual({
                pointerEvents: 'auto',
                opacity: '1',  
            });
        }
    }, [showReminderModalState])
    const [preLoadInputs, setPreLoadInputs] = useState(0);
    const [inputAcao, setInputAcao] = useState("");    
    const [inputData, setInputData] = useState("");
    const [inputHora, setInputHora] = useState("");
    const [inputDescricao, setInputDescricao] = useState("");
    const formModalLembrete : any = useRef();
    useEffect(() => {
        if (document.readyState === "complete") {
            formModalLembrete.current.addEventListener("submit", ((event : any) => {
                event.preventDefault();
                if (showReminderModalState.type === "new") {
                    dispatch(newReminder({
                        accountID: lembreteInfo.accountId,
                        acao: inputAcao,
                        data: inputData,
                        hora: inputHora,
                        descricao: inputDescricao,
                    }));
                }
                else if (showReminderModalState.type === "edit") {
        
                };
            }));
        }
        else {
            setPreLoadInputs(preLoadInputs + 1)
        }
    }, [preLoadInputs]);
    return(
        <FormularioLembrete ref={formModalLembrete} sx={modalVisual}>
            <TabelaLembrete>
                <tbody>
                    <tr>
                        <ThAcao>
                            <LabelInput htmlFor="input-acao">Ação:&nbsp;</LabelInput>
                            <InputAcao onChange={((event) => { setInputAcao(event.target.value) })} type="text" required autoComplete="off" id="input-acao" maxLength={21} />
                        </ThAcao>
                        <ThData>
                            <LabelInput htmlFor="input-data">Data:&nbsp;</LabelInput>
                            <InputData onChange={((event) => { setInputData(event.target.value) })} type="date" required autoComplete="off" id="input-data" maxLength={8} max="2100-11-23" />
                        </ThData>
                        <ThHora>
                            <LabelInput htmlFor="input-hora">Hora:&nbsp;</LabelInput>
                            <InputHora onChange={((event) => { setInputHora(event.target.value) })} type="time" required autoComplete="off" id="input-hora" />
                        </ThHora>
                    </tr>
                    <tr>
                        <ThDescricao colSpan={4} sx={{boxShadow: '4px 3.5px 3.5px #000000;'}}>
                            <LabelInput htmlFor="input-descricao" sx={{ marginBottom: '5px' }}>Descrição:&nbsp;</LabelInput>
                            <InputDescricao onChange={((event) => { setInputDescricao(event.target.value) })} maxLength={66} id="input-descricao" required autoComplete="off" />
                        </ThDescricao>
                    </tr>
                </tbody>
            </TabelaLembrete>
            <DivBotoes>
                <BotaoConfirmar type="submit" variant="contained" size="large" startIcon={<CheckCircleIcon />}>
                    Confirmar
                </BotaoConfirmar>
                <BotaoCancelar onClick={(() => { dispatch(hideReminderModal()); setModalVisual(modalVisualProps); })} variant="contained" size="large" startIcon={<CancelIcon />}>
                    Cancelar
                </BotaoCancelar>
            </DivBotoes>
        </FormularioLembrete>
    )
};
export default ModalLembrete;