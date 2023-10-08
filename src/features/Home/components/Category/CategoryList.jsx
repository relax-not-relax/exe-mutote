import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import categoryAPI from '../../../../api/categoryApi';
import Category from './Category';

CategoryList.propTypes = {

};

function CategoryList(props) {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryAPI.getAll();
                setCategoryList(list.results.map(x => ({
                    id: x.id,
                    name: x.name,
                    cateProductImg: x.cateProductImg
                })));
            } catch (error) {
                console.log('Failed to get category list', error);
            }
        })();
    }, []);

    return (
        <Box className='cateSection'>
            <Typography variant='h4' className='cateTitle'>YOUR STYLE, YOUR CHOICE</Typography>
            <Grid container spacing={7}>
                {categoryList.map((category) => (
                    <Grid item key={category.id}>
                        <Category category={category} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CategoryList;