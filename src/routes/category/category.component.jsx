import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';

import ProductCard from '../../components/product-card/product-card.component';
import { Fragment } from 'react/cjs/react.production.min';
import { CategoryContainerDiv, CategoryTitleH2 } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);

    }, [category, categoriesMap])

    return (
        <Fragment>
                  <CategoryTitleH2>{category.toUpperCase()}</CategoryTitleH2>

        <CategoryContainerDiv>
            {
              products &&  products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </CategoryContainerDiv>
        </Fragment>
    )
}

export default Category
