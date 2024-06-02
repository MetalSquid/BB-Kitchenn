import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainerDiv,
  TitleLink,
  PreviewDiv
} from  './category-preview.styles.jsx';

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainerDiv>
      <h2>
        <TitleLink to={title}>
        {title.toUpperCase()}
        </TitleLink>
      </h2>
      <PreviewDiv>
        {
          products
          .filter((_, idx) => idx < 4)
          .map((product) =>
          <ProductCard key={product.id} product={product} />)
        }
      </PreviewDiv>
    </CategoryPreviewContainerDiv>
  )
}

export default CategoryPreview;