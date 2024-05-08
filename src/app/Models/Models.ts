export interface product {
    id: string;
    name: string;
  }
export interface productList {
  products : product[]
}

export interface SearchResponse{
  status : string ,
  request_id : string ,
  data : ProductBasicData[]
}
export interface ProductBasicData {
  product_id: string;
  product_title: string;
  product_description: string;
  product_photos: string[];
  product_attributes: {
    [key: string]: string;
  };
  product_rating: number;
  product_page_url: string;
  product_offers_page_url: string;
  product_specs_page_url: string;
  product_reviews_page_url: string;
  product_num_reviews: number;
  product_num_offers: string;
  typical_price_range: string[];
  offer: productOfferSummery ;
}

export interface productOfferSummery{
  store_name: string;
  store_rating: number;
  offer_page_url: string;
  store_review_count: number;
  store_reviews_page_url: string;
  price: string;
  shipping: string;
  tax: string;
  on_sale: boolean;
  original_price: string;
  product_condition: string;
}

export interface homePageProductRes {
  data : homePageProductData[]
}

export interface homePageProductData{
  category : string ;
  products : ProductBasicData[]
}