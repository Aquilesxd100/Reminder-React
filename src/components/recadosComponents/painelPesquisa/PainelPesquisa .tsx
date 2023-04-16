import { useState } from "react";
import { useDispatch } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import { Barra, BarraPesquisa, BotaoPesquisa, CheckBoxPesquisa, CheckBoxPesquisaMobile, InputPesquisa } from './painelPesquisaStyled';
import { Checkbox, FormControlLabel } from '@mui/material';
import { UserStore } from "../../../redux/configureStore";
import { setSearch } from "../../../redux/slices/searchSlice";
import { SearchStorageType } from "../../../types/otherTypes";
import { setNeedUpdate } from "../../../redux/slices/remindersSlice";

function PainelPesquisa() {
    const dispatch : UserStore = useDispatch();
    const [checkBox, setCheckBox] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    function searchSubmit() {
        const searchInfos : SearchStorageType = {
            search : searchValue,
            checkBox : checkBox
        };
        dispatch(setSearch(searchInfos));
        dispatch(setNeedUpdate());
    };
    return (
        <Barra>
            <BarraPesquisa>
                <InputPesquisa placeholder={"Pesquisar..."} maxLength={14} onChange={((event) => {setSearchValue(event.target.value)})} />
                <BotaoPesquisa onClick={((event) => { event.preventDefault(); searchSubmit()})}>
                    <SearchIcon />
                </BotaoPesquisa>
                <CheckBoxPesquisa>
                    <FormControlLabel onChange={((event : any) => {setCheckBox(event.target.checked)})} control={<Checkbox />} label="Mostrar Arquivados" />
                </CheckBoxPesquisa>
            </BarraPesquisa>
            <CheckBoxPesquisaMobile>
                <FormControlLabel onChange={((event : any) => {setCheckBox(event.target.checked)})} control={<Checkbox />} label="Mostrar Arquivados" />
            </CheckBoxPesquisaMobile>
        </Barra>
    );
};
export default PainelPesquisa;
