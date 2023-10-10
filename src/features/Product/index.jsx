import { Box } from '@mui/material';
import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import React from 'react';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
    const match = useRouteMatch();
    return (
        <Box>
            <Box pt={6}>
                <Switch>
                    <Route path={match.url} exact component={ListPage} />
                    <Route path={`${match.url}/:productId`} component={DetailPage} />
                </Switch>
            </Box>
        </Box>
    );
}

export default ProductFeature;