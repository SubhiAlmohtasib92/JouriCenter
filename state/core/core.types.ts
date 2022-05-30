export interface IProductAttribute {
  id: number;
  name: string;
  options: Array<string>;
  position: number;
  variation: boolean;
  visible: boolean;
}

export interface IProductCategory {
  categoryId: number;
  categoryImage: {
    alt: string;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    id: number;
    name: string;
    src: string;
  }
  categoryName: string;
  categoryMenuOrder: number;
}

export interface IProductImage {
  imageID: number;
  imageName: string;
  imageURL: string;
}

export interface IProduct {
  productAttributes: Array<IProductAttribute>;
  productCategories: Array<IProductCategory>;
  productDateCreated: string;
  productId: number;
  productImages: Array<IProductImage>;
  productName: string;
  productOnSale: boolean;
  productPrice: string;
  productRegularPrice: string;
  productSalePrice: string;
  productShortDescription: string;
  productStockStatus: string;
  productStockQuantity: number;
  productLowStockAmount: number;
}

export interface ICoreState {
  categoriesList: IProductCategory[];
  wishList: number[];// saves product Id.
  cart: number[];// saves product Id.
  loading: boolean;
}