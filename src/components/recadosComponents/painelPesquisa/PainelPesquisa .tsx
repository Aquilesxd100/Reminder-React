import { useEffect, useState } from "react";
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
    const [checkBox, setCheckBox] = useState<boolean | undefined>(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchChange, setSearchChange] = useState(0);
    const [arrayTimers, setArrayTimers] = useState<any>([]);
    function searchSubmit() {
        const searchInfos : SearchStorageType = {
            search : searchValue,
            checkBox : checkBox === undefined ? false : checkBox
        };
        dispatch(setSearch(searchInfos));
        dispatch(setNeedUpdate());
    };
    
    useEffect(() => {
        if (searchChange > 0 || checkBox !== undefined) {
            arrayTimers.push(setTimeout(() => {
                searchSubmit();
            }, 1200));
            if(arrayTimers.length === 2) {
                clearTimeout(arrayTimers[0]);
                arrayTimers.splice(0, 1);
            };  
        };
    }, [searchChange, checkBox]);

    return (
        <Barra>
            <BarraPesquisa>
                <InputPesquisa placeholder={"Pesquisar..."} maxLength={14} onChange={((event) => {setSearchValue(event.target.value); setSearchChange(searchChange + 1)})} />
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
