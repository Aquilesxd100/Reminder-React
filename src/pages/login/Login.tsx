import { Grid } from "@mui/material";
import { Logo } from "../../styles/global";
import Footer from "../../components/Footer"; 
import imgLogo from "../../images/logo.png";
function Login() {
    return (
        <>
            <Grid container justifyContent="space-around" alignItems="center" sx={{ height: "calc(100vh - 55px)" }}>
                <Grid item container sx={{justifyContent: "center" }} xs={6}>
                    <Logo src={imgLogo}/>
                </Grid>
                <Grid item xs={6}>
                
                </Grid>
            </Grid>
            <Footer/>
        </>
    )
}
export default Login;