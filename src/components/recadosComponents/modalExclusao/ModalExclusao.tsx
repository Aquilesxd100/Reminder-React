import { useEffect, useState } from "react";
import { FundoModal, MsgExclusao } from "./modalExclusaoStyled";
import { BotaoCancelar, BotaoConfirmar, DivBotoes } from "../../../styles/global";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ModalExclusaoProp } from "../../../types/types";
import { hideDeleteModal } from "../../../redux/slices/modalManagerSlice";
import { deleteAccount } from "../../../redux/slices/userSlice";
import { localLogOut } from "../../../redux/slices/loggedLocalSlice";
import { sessionLogOut } from "../../../redux/slices/loggedSessionSlice";
import { setNotification } from "../../../redux/slices/notificationsSlice";
function ModalExclusao(props: ModalExclusaoProp) {
    const dispatch = useDispatch();
    const modalVisualProps = {
        pointerEvents: 'none',
        opacity: '0',
    }
    const [modalVisual, setModalVisual] = useState(modalVisualProps);
    const { showDeleteModalState } = useSelector((state : any) => state.modalManager);
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
        dispatch(localLogOut());
        dispatch(sessionLogOut());
        dispatch(deleteAccount(props.userID));
        setTimeout((() => { window.open("/login", "_self") }), 700);
    }
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