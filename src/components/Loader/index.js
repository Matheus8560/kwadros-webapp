import React, { useEffect }  from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import {Container } from './styles';

const Loader = () => {
    return(
        <Container>
            <CircularProgress disableShrink color="secondary" />
        </Container>
    );
}

export default Loader;