import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { RootState, UserStore } from "../../../redux/configureStore";
import { ReminderType } from "../../../types/reminderTypes";
import { MinimumDateType, PropsModalLembrete } from "../../../types/otherTypes";
import { FormularioLembrete, InputAcao, InputData, InputDescricao, InputHora, LabelInput, TabelaLembrete, ThAcao, ThData, ThDescricao, ThHora} from "./modalLembreteStyled";
import { BotaoCancelar, BotaoConfirmar, DivBotoes } from "../../../styles/global";
import dateOrganizerBR from "../../../helpers/reminders/dateOrganizerBR";
import setMinimumHour from "../../../helpers/reminders/setMinimumHour";
import setMinimumDate from "../../../helpers/reminders/setMinimumDate";
import { hideReminderModal } from "../../../redux/slices/modalManagerSlice";
import { createReminderRequest, editReminderRequest } from "../../../redux/slices/remindersSlice";

function ModalLembrete(props : PropsModalLembrete) {
    const { storedReminders } = useSelector((state : RootState) => state.reminders);
    const dispatch = useDispatch<UserStore>();

    const modalVisualProps = {
        pointerEvents: 'none',
        opacity: '0',
    }
    const [modalVisual, setModalVisual] = useState(modalVisualProps);
    const { showReminderModalState } = useSelector((state : RootState) => state.modalManager);

    useEffect(() => {
        if (showReminderModalState.show) {
            if (showReminderModalState.type === "new") {
                inputAcao.current.value = "";
                inputData.current.value = "";
                inputHora.current.value = "";
                inputDescricao.current.value = "";
            }
            else if (showReminderModalState.type === "edit") {
                const reminder : ReminderType | undefined = storedReminders.find((reminder : ReminderType) => reminder.id === showReminderModalState.reminderEditID);
                if(reminder === undefined)return;               
                inputAcao.current.value = reminder.action;
                inputData.current.value = dateOrganizerBR(reminder.date, "NA-Format");
                inputHora.current.value = reminder.time;
                inputDescricao.current.value = reminder.description;
            }
            setModalVisual({
                pointerEvents: 'auto',
                opacity: '1',  
            });
            inputData.current.setAttribute("min", setMinimumDate());
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
            if(typeof props.token !== "string") return;
            dispatch(createReminderRequest({
                token: props.token,
                action: inputAcao.current.value,
                date: dateOrganizerBR(inputData.current.value, "BR-Format"),
                time: inputHora.current.value,
                description: inputDescricao.current.value,
            }));
        }
        else if (showReminderModalState.type === "edit") {
            dispatch(hideReminderModal());
            dispatch(editReminderRequest({
                reminderId: showReminderModalState.reminderEditID,
                token: props.token,
                action: inputAcao.current.value,
                date: dateOrganizerBR(inputData.current.value, "BR-Format"),
                time: inputHora.current.value,
                description: inputDescricao.current.value,
            }));
        };
    }
    function inputDateHandle(inputDateValue : string) {
        if(!inputHora.current) return;
        const dateHandle : MinimumDateType = setMinimumHour(inputDateValue);
        dateHandle.type === "set" ? inputHora.current.setAttribute('min', dateHandle.minDate) : inputHora.current.removeAttribute('min');
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
                            <InputData onChange={((event) => { inputDateHandle(event.target.value) })} ref={inputData} type="date" required autoComplete="off" id="input-data" maxLength={8} max="2100-10-10" />
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