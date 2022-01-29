import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';

import closeIcn from '@icons/icon_close.svg';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={closeIcn} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;