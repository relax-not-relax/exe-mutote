import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';
import productAPI from '../../../api/productApi';
import CategorySort from '../components/CategorySort';
import PriceSort from '../components/PriceSort';
import ProductList from '../components/Product/ProductList';
import ProductSkeletonList from '../components/Product/ProductSkeletonList';
import ProductSort from '../components/Product/ProductSort';
import SearchNameSort from '../components/SearchNameSort';
import ServiceSort from '../components/ServiceSort';
import './style.scss';

ListPage.propTypes = {

};

function ListPage(props) {

    const [productList, setProductList] = useState([]);

    const history = useHistory();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        // Kiểm tra xem có giá trị Status không
        const statusValue = Number.parseInt(params.Status) || 0;
        const statusParam = statusValue !== 0 ? { Status: statusValue } : {};

        return {
            ...params,
            Page: Number.parseInt(params.Page) || 1,
            PageSize: Number.parseInt(params.PageSize) || 9,
            SortType: Number.parseInt(params.SortType) || 0,
            ColName: params.ColName || 'price',
            isBestSeller: params.isBestSeller === 'true',
            ...statusParam,
        }
    }, [location.search]);

    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        pageSize: 9,
        totalNumberOfPages: 10,
        pageNumber: 1
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await productAPI.getAll(queryParams);
                setProductList(response.results);
                setPagination(response);
                console.log(response);
            } catch (error) {
                console.log('Failed to get product list', error);
            }

            setLoading(false);
        })();
    }, [queryParams]);

    const handlePageChange = (e, page) => {

        const filters = {
            ...queryParams,
            Page: page,
        }

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        });
    };

    const handleSortChange = (newSortValue) => {

        const filters = {
            ...queryParams,
            SortType: newSortValue,
        }

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        });
    };

    const handleCategoryChange = (newFilters) => {

        const filters = {
            ...queryParams,
            CategoryProductId: newFilters,
        }

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        });
    };

    const handleReset = () => {

        const filters = {
            Page: 1,
            PageSize: 9,
            SortType: 0,
            ColName: 'price',
            isBestSeller: 'false',
        }

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        });
    };

    const handleFiltersChange = (newFilters) => {

        const filters = {
            ...queryParams,
            ...newFilters,
        }

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        });
    };

    return (
        <Box>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fshop-bnn-2.png?alt=media&token=df42a211-cfc0-404f-aa5a-2de9938bf551"
                alt="Shop Now"
                width="1810px"
            />
            <Container>
                <Grid container spacing={1}>
                    <Grid item className='leftDiv'>
                        <Paper elevation={0}>
                            <SearchNameSort onChange={handleFiltersChange} />
                            <CategorySort onChange={handleCategoryChange} onReset={handleReset} />
                            <PriceSort onChange={handleFiltersChange} />
                            <ServiceSort filters={queryParams} onChange={handleFiltersChange} />
                        </Paper>
                    </Grid>

                    <Grid item className='rightDiv'>
                        <ProductSort currentSort={queryParams.SortType} onChange={handleSortChange} />

                        <Paper elevation={0}>
                            {loading ? <ProductSkeletonList length={11} /> : <ProductList data={productList} />}

                            <Box className="pagination">

                                <Pagination
                                    color="primary"
                                    count={pagination.totalNumberOfPages}
                                    page={pagination.pageNumber}
                                    onChange={handlePageChange}>
                                </Pagination>

                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;