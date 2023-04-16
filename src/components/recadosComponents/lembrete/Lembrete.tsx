import { useDispatch } from 'react-redux';
import LinhaEspacamento from "../linhaEspaco/LinhaEspacamento";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { InfosRequestDeleteReminderType, LembreteInfoType } from "../../../types/reminderTypes";
import { BotaoEdicao, BotaoEdicaoMobile, BotaoExcluir, BotaoExcluirMobile, LembreteTBody, ThAcao, ThBotoesDesktop, ThBotoesMobile, ThData, ThDescricao, ThHora, TrBasico, TrBotoesMobile, TrDescricao } from "./LembreteStyled";
import { showReminderModal } from "../../../redux/slices/modalManagerSlice";
import { deleteReminderRequest } from '../../../redux/slices/remindersSlice';
import { UserStore } from '../../../redux/configureStore';
function Lembrete(lembreteInfos : LembreteInfoType) {
    const dispatch = useDispatch<UserStore>();

    function editReminderHandle() {
        const reminderInfos = {
            type: 'edit',
            reminderEditID: lembreteInfos.id
        }
        dispatch(showReminderModal(reminderInfos));
    }
    function deleteReminderHandle() {
        const reminder : InfosRequestDeleteReminderType = {
            token: lembreteInfos.token,
            reminderId: lembreteInfos.id
        };
        dispatch(deleteReminderRequest(reminder));
    }
    return(
        <>
            <LinhaEspacamento/>
            <LembreteTBody>
                <TrBasico>
                    <ThAcao><p><span>Ação:&nbsp;</span>{lembreteInfos.acao}</p></ThAcao>
                    <ThData><p><span>Data:&nbsp;</span>{lembreteInfos.data}</p></ThData>
                    <ThHora><p><span>Hora{"(s)"}:&nbsp;</span>{lembreteInfos.hora}</p></ThHora>
                    <ThBotoesDesktop>
                        <BotaoEdicao onClick={(() => { editReminderHandle() })} variant="outlined" size="medium">
                            <EditIcon />
                        </BotaoEdicao>
                        <BotaoExcluir onClick={(() => { deleteReminderHandle() })} variant="outlined" size="medium">
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
                        <BotaoEdicaoMobile onClick={(() => { editReminderHandle() })} variant="outlined" size="medium">
                            <EditIcon />
                        </BotaoEdicaoMobile>
                        <BotaoExcluirMobile onClick={(() => { deleteReminderHandle() })} variant="outlined" size="medium">
                            <DeleteIcon />
                        </BotaoExcluirMobile>
                    </ThBotoesMobile>
                </TrBotoesMobile>
            </LembreteTBody>
        </>
    )
}
export default Lembrete;