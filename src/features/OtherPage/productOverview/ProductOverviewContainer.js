import { connect } from 'react-redux';
import ProductOverview from './ProductOverview';
import { getProduct } from '../action/productAction';
import { getVariantsByProductId } from '../action/variantsAction';
import { postCart } from '../action/cartAction';

const mapStoreToProps = state => ({
  product: state.product.product,
  variants: state.variant.variants,
});
const mapDispatchToProps = {
  getProduct,
  getVariantsByProductId,
  postCart,
};

export default connect(mapStoreToProps, mapDispatchToProps)(ProductOverview);
