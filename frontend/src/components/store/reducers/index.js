import {
    GET_SELLER, GET_SELLER_SUCCESS, GET_SELLER_FAIL, 
    
    GET_SELLER_AUCTION, GET_SELLER_AUCTION_SUCCESS, GET_SELLER_AUCTION_FAIL,
    
    POSTING_NEW_AUCTION, POST_NEW_AUCTION_SUCCESS, POST_NEW_AUCTION_FAIL,
    
    DELETE_AUCTION, DELETE_AUCTION_SUCCESS, DELETE_AUCTION_FAIL,
    
    EDIT_AUCTION, EDIT_AUCTION_SUCCESS, EDIT_AUCTION_FAIL, 
    
    GET_SELLER_PRODUCTS, GET_SELLER_PRODUCTS_SUCCESS, GET_SELLER_PRODUCTS_FAIL,
    
    GET_SELLER_PRODUCT, GET_SELLER_PRODUCT_SUCCESS, GET_SELLER_PRODUCT_FAIL,
    
    POSTING_NEW_PRODUCT, POST_NEW_PRODUCT_SUCCESS, POST_NEW_PRODUCT_FAIL,
    
    DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL,
} from "../actions";
  

  const initialState = {
    products: [],
    auctions: [],
    error: "",
    isFetching: false
  };
  
  export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case GET_SELLER:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case GET_SELLER_FAIL:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      case GET_SELLER_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: "",
          auctions: action.payload
        };

        case GET_SELLER_PRODUCTS:
          return {
            ...state,
            isFetching: true,
            error: ""
          };
        case GET_SELLER_PRODUCTS_FAIL:
          return {
            ...state,
            isFetching: false,
            error: action.payload
          };
        case GET_SELLER_PRODUCTS_SUCCESS:
          return {
            ...state,
            isFetching: false,
            error: "",
            products: action.payload
          };

        case GET_SELLER_AUCTION:
          return {
            ...state,
            isFetching: true,
            error: ""
          };
        case GET_SELLER_AUCTION_FAIL:
          return {
            ...state,
            isFetching: false,
            error: action.payload
          };
        case GET_SELLER_AUCTION_SUCCESS:
          return {
            isFetching: false,
            error: "",
            auctions: action.payload
          };

      case POSTING_NEW_AUCTION:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case POST_NEW_AUCTION_FAIL:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      case POST_NEW_AUCTION_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: "",
          auctions: [...state.auctions, action.payload]
        };

      
      case POSTING_NEW_PRODUCT:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case POST_NEW_PRODUCT_FAIL:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      case POST_NEW_PRODUCT_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: "",
          products: [...state.products, action.payload]
        };
      
      case DELETE_PRODUCT:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case DELETE_PRODUCT_FAIL:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: "",
          products: state.products.filter((product) => (product.id !== action.payload))
        };
    
      case DELETE_AUCTION:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case DELETE_AUCTION_FAIL:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      case DELETE_AUCTION_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: "",
          auctions: state.auctions.filter((auction) => (auction.id !== action.payload))
        };

        case EDIT_AUCTION:
          return {
            ...state,
            isFetching: true,
            error: ""
          };
        case EDIT_AUCTION_FAIL:
          return {
            ...state,
            isFetching: false,
            error: action.payload
          };
        case EDIT_AUCTION_SUCCESS:
          return {
            ...state,
            isFetching: false,
            error: "",
            auctions:  action.payload
          };

      default:
        return state;
    }
  };