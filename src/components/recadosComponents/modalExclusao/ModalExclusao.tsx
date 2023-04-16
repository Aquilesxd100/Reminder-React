import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { FundoModal, MsgExclusao } from "./modalExclusaoStyled";
import { BotaoCancelar, BotaoConfirmar, DivBotoes } from "../../../styles/global";
import { RootState, UserStore } from "../../../redux/configureStore";
import { hideDeleteModal } from "../../../redux/slices/modalManagerSlice";
import { localLogOut } from "../../../redux/slices/loggedLocalSlice";
import { sessionLogOut } from "../../../redux/slices/loggedSessionSlice";
import { setNotification } from "../../../redux/slices/notificationsSlice";
import { deleteAccountRequest, resetError } from "../../../redux/slices/accountSlice";
import { PropsModalLembrete } from "../../../types/otherTypes";
function ModalExclusao(props : PropsModalLembrete) {
    const dispatch = useDispatch<UserStore>();
    const modalVisualProps = {
        pointerEvents: 'none',
        opacity: '0',
    }
    const [modalVisual, setModalVisual] = useState(modalVisualProps);
    const { showDeleteModalState } = useSelector((state : RootState) => state.modalManager);
    const { error } = useSelector((state : RootState) => state.account);
    useEffect(() => {
        if (showDeleteModalState) {
            setModalVisual({
                pointerEvents: 'auto',
                opacity: '1',  
            });
        }
    }, [showDeleteModalState])
    function handleDeleteAccount() {
        setModalVisual(modalVisualProps);
        dispatch(setNotification({
            textAlert: "Conta excluída com sucesso!",
            typeAlert: "warning",
        }));
        dispatch(resetError());
        dispatch(deleteAccountRequest(props.token));
    };
    useEffect(() => {
        if (error === false) {
            dispatch(localLogOut());
            dispatch(sessionLogOut());
            setTimeout((() => { window.open("/login", "_self") }), 250);
        };
    }, [error])
    return (
        <FundoModal sx={modalVisual}>
            <MsgExclusao>
                <Typography variant="h2">Tem certeza que deseja <span className="destaque">excluir</span> sua conta?</Typography>           
                 <DivBotoes>
                    <BotaoConfirmar onClick={(() => { handleDeleteAccount() })} variant="contained" size="large" startIcon={<CheckCircleIcon />}>
                        Confirmar
                    </BotaoConfirmar>
                    <BotaoCancelar onClick={(() => {setModalVisual(modalVisualProps); dispatch(hideDeleteModal())})} variant="contained" size="large" startIcon={<CancelIcon />}>
                        Cancelar
                    </BotaoCancelar>
                </DivBotoes>
            </MsgExclusao>
        </FundoModal>
    );
};
export default ModalExclusao;
