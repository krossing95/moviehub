import useStyles from "./style";

const Loader = () => {
    const classes = useStyles();
    return (
        <div className={classes.info}>
            <img className={classes.loading} src="/loading.gif" alt="Fetching"/> 
            <p className={classes.infotext}>Displayed on your device's screen right here, is a web application programmed in React Js and powered by TheMovieDB API.
            This application, developed by Krossing Technology, will keep you updated on current and recent movies and television series. For your websites web applications, kindly contact the developer on the following contact addresses; 
            <span> Call or whatsapp on +233 542871142</span> or send email on <span> kalenuxoesekwasi@gmail.com</span></p>
        </div>
    );
}
export default Loader;