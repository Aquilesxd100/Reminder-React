import { Grid } from "@mui/material";
import { Logo } from "../../styles/global";
import Footer from "../../components/Footer"; 
import imgLogo from "../../images/logo.png";
import { Formulario } from "./LoginStyles";
function Login() {
    return (
        <>
            <Grid container justifyContent="space-around" alignItems="center" sx={{ height: "calc(100vh - 55px)" }}>
                <Grid item container justifyContent="center" xs={6}>
                    <Logo src={imgLogo}/>
                </Grid>
                <Formulario item xs={6}>
                    
                </Formulario>
            </Grid>
            <Footer/>
        </>
    )
}
export default Login;