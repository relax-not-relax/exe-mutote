import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Box, Grid } from '@mui/material';
import Product from '../Product/Product';

RelatedProduct.propTypes = {
    categoryID: PropTypes.number,
};

function RelatedProduct(props) {

    const { categoryID } = props;
    const [relatedList, setRelatedList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const apiUrl = `https://exe202-mutote.azurewebsites.net/api/products`;
                const queryParams = {
                    Page: 1,
                    PageSize: 6,
                    CategoryProductId: categoryID,
                };
                const response = await axios.get(apiUrl, { params: queryParams });
                //console.log(response.data.results);
                setRelatedList(response.data.results);
            } catch (error) {
                console.log('Failed to get product list', error);
            }
        })();
    }, [categoryID]);

    return (
        <Box>
            <Grid container>
                {relatedList.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={2} lg={2}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default RelatedProduct;