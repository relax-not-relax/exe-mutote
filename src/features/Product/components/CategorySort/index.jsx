import React, { useEffect, useState } from 'react';
import categoryAPI from '../../../../api/categoryApi';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import './style.scss';

CategorySort.propTypes = {
    onChange: PropTypes.func,
    onReset: PropTypes.func,
};

function CategorySort(props) {
    const { onChange, onReset } = props;

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryAPI.getAll();
                setCategoryList(list.results.map(x => ({
                    id: x.id,
                    name: x.name,
                })));
                //setCategoryList(list);
                console.log(list);
            } catch (error) {
                console.log('Failed to get category list', error);
            }
        })();
    }, []);

    const handleCategoryClick = (categoryId) => {
        // Gọi hàm onChange và truyền categoryId vào đó
        onChange(categoryId);
    };

    const handleAllClick = () => {
        onReset();
    };

    return (
        <Box className="cateDiv">
            <Typography variant='subtitle2' className='cateDiv__title'>DANH MỤC SẢN PHẨM</Typography>

            <ul className='cateDiv__menu'>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                        <Typography variant='body2'>{category.name}</Typography>
                    </li>
                ))}
                <li onClick={handleAllClick}><Typography variant='body2'>All</Typography></li>
            </ul>
        </Box>
    );
}

export default CategorySort;