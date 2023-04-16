import SearchIcon from '@mui/icons-material/Search';
import { Barra, BarraPesquisa, BotaoPesquisa, CheckBoxPesquisa, CheckBoxPesquisaMobile, InputPesquisa } from './painelPesquisaStyled';
import { Checkbox, FormControlLabel } from '@mui/material';

function PainelPesquisa() {
    return (
        <Barra>
            <BarraPesquisa>
                <InputPesquisa placeholder={"Pesquisar..."} maxLength={14} />
                <BotaoPesquisa>
                    <SearchIcon />
                </BotaoPesquisa>
                <CheckBoxPesquisa>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Mostrar Arquivados" />
                </CheckBoxPesquisa>
            </BarraPesquisa>
            <CheckBoxPesquisaMobile>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Mostrar Arquivados" />
            </CheckBoxPesquisaMobile>
        </Barra>
    );
};
export default PainelPesquisa;