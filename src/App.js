import { createUseStyles } from "react-jss";

import Alert from "./components/Alert/Alert";
import CartSuccsess from "./components/CartSuccsess/CartSuccess";

const useStyles = createUseStyles({
    wrapper: {
        padding: 20,
    },
});

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Alert title="Items Not Added" type="error">
                <div>Your items are out of stock.</div>
            </Alert>
            <CartSuccsess />
        </div>
    );
};

export default App;
