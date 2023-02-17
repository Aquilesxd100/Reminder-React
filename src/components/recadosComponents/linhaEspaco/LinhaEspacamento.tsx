import { EspacamentoTBody, EspacamentoTh } from "./LinhaEspacamentoStyles";

function LinhaEspacamento() {
    return (
        <EspacamentoTBody>
            <tr>
                <EspacamentoTh colSpan={4}></EspacamentoTh>
            </tr>
        </EspacamentoTBody>
    )
};
export default LinhaEspacamento;