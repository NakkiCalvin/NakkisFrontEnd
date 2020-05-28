import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styles from './stylesheets/productOverview.module.sass';
import Header from '../../../components/header/headerContainer';
import Variants from './components/Variants';
import mergeProductAndVariants from './utils/mergeProductAndVariants';
import jumpTo from '../../../modules/Navigation';
import LoadingAnimation from '../../../components/loadingAnimation';

export default class ProductOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      size: '',
      pic: '',
      selectedSize: '',
      variantId: '',
      quantitySizes: '',
      id: '',
      variantModel: '',
    };
  }

  componentDidMount() {
    this.props.getProduct(this.props.location.pathname.split('/').slice(-1)[0]);
    this.props.getVariantsByProductId(
      this.props.location.pathname.split('/').slice(-1)[0]
    );
  }

  handleClick = variant => {
    console.log('variant SELECT', variant);
    this.setState({
      color: variant.color,
      size: variant.variantSizes,
      pic: variant.imagePath,
      selectedSize: variant.variantSizes[0],
      variantId: variant.variantId,
      quantitySizes: variant.quantitySizes[variant.variantSizes[0]],
      variantModel: variant,
    });
  };

  clickSize = s => {
    const { variantModel } = this.state;
    this.setState({
      selectedSize: s,
      quantitySizes: variantModel.quantitySizes[s],
    });
  };

  addToBag = () => {
    this.props
      .postCart(
        this.state.id ||
          Number(this.props.location.pathname.split('/').slice(-1)[0]),
        this.state.selectedSize.toString(),
        this.state.variantId
      )
      .then(res => {
        alert('successfuly added');
      });
  };

  buyNow = () => {
    this.props
      .postCart(
        this.state.id ||
          Number(this.props.location.pathname.split('/').slice(-1)[0]),
        // (this.state.selectedSize.toString() === '' &&
        //   this.props.product.variantId === this.state.variantId) ||
        //   !this.props.variants
        //   ? this.props.product.variantSizes[0]
        //   : this.props.variants.find(x => x.variantId === this.state.variantId)
        //       .variantSizes[0],
        this.state.selectedSize.toString(),
        this.state.variantId
      )
      .then(res => {
        jumpTo('/bag');
      });
  };

  render() {
    console.log(
      'this.props.product.quantitySizes[this.state.selectedSize]',
      this.props.product &&
        this.props.product.quantitySizes[this.state.selectedSize],
      this.state
    );
    return (
      <div className={styles.outbox}>
        <Header />
        {this.props.loadingVariants && this.props.loadingProduct && (
          <LoadingAnimation />
        )}
        {this.props.product && (
          <div className={styles.content_box}>
            <div className={styles.content}>
              {/* left image */}
              <div className={styles.image}>
                <img
                  src={this.state.pic || this.props.product.imagePath}
                  alt=""
                />
              </div>
              {/* right content box */}
              <div className={styles.context_outbox}>
                <div className={styles.context}>
                  {/* top descriptions */}
                  <div className={styles.title}>{this.props.product.title}</div>
                  <div className={styles.description}>
                    {this.props.product.description}
                  </div>
                  <div className={styles.price}>
                    ${this.props.product.price} USD
                  </div>
                  {/* dotted border */}
                  <div className={styles.border}></div>
                  {/* bottom descriptions */}
                  <div className={styles.variants}>
                    <Variants
                      color={this.state.color || this.props.product.color}
                      size={
                        this.state.size ||
                        (this.props.product && this.props.product.variantSizes)
                      }
                      selectedItem={this.state.variantId}
                      selectedSize={this.state.selectedSize}
                      variants={mergeProductAndVariants(
                        this.props.product,
                        this.props.variants
                      )}
                      handleClick={this.handleClick}
                      clickSize={this.clickSize}
                    />
                  </div>
                  <div className={styles.btns}>
                    <Button
                      disabled={
                        !(
                          this.state.quantitySizes &&
                          this.state.quantitySizes !== '0'
                        )
                      }
                      className={styles.btn}
                      onClick={this.addToBag}
                      variant="outline-primary"
                    >
                      Add to Bag
                    </Button>
                    <Button
                      className={styles.btn}
                      disabled={
                        !(
                          this.state.quantitySizes &&
                          this.state.quantitySizes !== '0'
                        )
                      }
                      onClick={this.buyNow}
                      variant="outline-danger"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
