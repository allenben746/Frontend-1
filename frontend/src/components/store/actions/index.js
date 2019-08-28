import axiosWithAuth from '../../utils/axiosWithAuth.js'

export const GET_SELLER = "GET_SELLER";
export const GET_SELLER_SUCCESS = "GET_SELLER_SUCCESS";
export const GET_SELLER_FAIL = "GET_SELLER_FAIL";

export const GET_SELLER_AUCTION = "GET_SELLER_AUCTION";
export const GET_SELLER_AUCTION_SUCCESS = "GET_SELLER_AUCTION_SUCCESS";
export const GET_SELLER_AUCTION_FAIL = "GET_SELLER_AUCTION_FAIL";

export const POSTING_NEW_AUCTION = "POSTING_NEW_AUCTION";
export const POST_NEW_AUCTION_SUCCESS = "POST_NEW_AUCTION_SUCCESS";
export const POST_NEW_AUCTION_FAIL = "POST_NEW_AUCTION_FAIL";

export const DELETE_AUCTION = "DELETE_AUCTION";
export const DELETE_AUCTION_SUCCESS = "DELETE_AUCTION_SUCCESS";
export const DELETE_AUCTION_FAIL = "DELETE_AUCTION_FAIL";

export const EDIT_AUCTION = "EDIT_AUCTION";
export const EDIT_AUCTION_SUCCESS = "EDIT_AUCTION_SUCCESS";
export const EDIT_AUCTION_FAIL = "EDIT_AUCTION_FAIL";

export const GET_SELLER_PRODUCTS = "GET_SELLER_PRODUCTS";
export const GET_SELLER_PRODUCTS_SUCCESS = "GET_SELLER_PRODUCTS_SUCCESS";
export const GET_SELLER_PRODUCTS_FAIL = "GET_SELLER_PRODUCTS_FAIL";

export const GET_SELLER_PRODUCT = "GET_SELLER_PRODUCT";
export const GET_SELLER_PRODUCT_SUCCESS = "GET_SELLER_PRODUCT_SUCCESS";
export const GET_SELLER_PRODUCT_FAIL = "GET_SELLER_PRODUCT_FAIL";

export const POSTING_NEW_PRODUCT = "POSTING_NEW_PRODUCT";
export const POST_NEW_PRODUCT_SUCCESS = "POST_NEW_PRODUCT_SUCCESS";
export const POST_NEW_PRODUCT_FAIL = "POST_NEW_PRODUCT_FAIL";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAIL = "DELETE_PRODUCT_FAIL";

//Axios for Seller Page
export const getSeller = () => dispatch => {
  dispatch({ type: GET_SELLER });
  axiosWithAuth()
    .get(`https://silent-auction-api.herokuapp.com/seller/1/auctions`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_SELLER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_SELLER_FAIL,
        payload: err.response
      });
    });
};

//Axios calls to backend for Seller auctions
export const getSellerAuction = (userid, auctionid) => dispatch => {
    dispatch({ type: GET_SELLER_AUCTION });
    axiosWithAuth()
    .get(`https://silent-auction-api.herokuapp.com/seller/${userid}/auctions/${auctionid}`)
    .then(res => {
        console.log(res.data);
        dispatch({
          type: GET_SELLER_AUCTION_SUCCESS,
          payload: res.data
        });
    })
    .catch(err => {
        console.log(err);
        dispatch({
          type: GET_SELLER_AUCTION_FAIL,
          payload: err.response
        });
    });
};

export const addAuction = (userid, newAuction) => dispatch => {
  dispatch({ type: POSTING_NEW_AUCTION });
  axiosWithAuth()
    .post(`https://silent-auction-api.herokuapp.com/seller/1/auctions`, newAuction)
    .then(res => {
      console.log("POST data", res);
      dispatch({
        type: POST_NEW_AUCTION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("Rejected, newAuction", err);
      console.log(newAuction);
      dispatch({
        type: POST_NEW_AUCTION_FAIL,
        payload: err.data
      });
    });
};

export const deleteAuction = (userid, auctionid) => dispatch => {
  dispatch({ type: DELETE_AUCTION });
  axiosWithAuth()
    .delete(`https://silent-auction-api.herokuapp.com/seller/1/auctions/${auctionid}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: DELETE_AUCTION_SUCCESS,
        payload: res.data
      });
    })
    .catch(rej => {
      console.log(rej);
      dispatch({
        type: DELETE_AUCTION_FAIL,
        payload: rej.data
      });
    });
};

export const editAuction = (userid, auctionid) => dispatch => {
  dispatch({ type: EDIT_AUCTION });
  axiosWithAuth()
    .put(`https://silent-auction-api.herokuapp.com/seller/${userid}/auctions/${auctionid}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: EDIT_AUCTION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: EDIT_AUCTION_FAIL,
        payload: err.data
      });
    });
};

//Axios calls to backend for Seller auction Products

export const getAllProducts = userid => dispatch => {
    dispatch({ type: GET_SELLER_PRODUCTS });
    axiosWithAuth()
      .get(`https://silent-auction-api.herokuapp.com/seller/${userid}/products`)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: GET_SELLER_PRODUCTS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_SELLER_PRODUCTS_FAIL,
          payload: err.response
        });
      });
  };

export const getSellerProduct = (userid, productid) => dispatch => {
    dispatch({ type: GET_SELLER_PRODUCT });
    axiosWithAuth()
    .get(`https://silent-auction-api.herokuapp.com/seller/${userid}/products/${productid}`)
    .then(res => {
        console.log(res.data);
        dispatch({
          type: GET_SELLER_PRODUCT_SUCCESS,
          payload: res.data
        });
    })
    .catch(err => {
        console.log(err);
        dispatch({
          type: GET_SELLER_PRODUCT_FAIL,
          payload: err.response
        });
    });
};

export const addProduct = (userid, newProduct) => dispatch => {
  dispatch({ type: POSTING_NEW_PRODUCT });
  axiosWithAuth()
    .post(`https://silent-auction-api.herokuapp.com/seller/${userid}/products`, newProduct)
    .then(res => {
      console.log("POST data", res);
      dispatch({
        type: POST_NEW_PRODUCT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("Rejected, newProduct", err);
      console.log(newProduct);
      dispatch({
        type: POST_NEW_PRODUCT_FAIL,
        payload: err.data
      });
    });
};

export const deleteProduct = (userid, productid) => dispatch => {
  dispatch({ type: DELETE_PRODUCT });
  axiosWithAuth()
    .delete(`https://silent-auction-api.herokuapp.com/seller/${userid}/products/${productid}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: res.data
      });
    })
    .catch(rej => {
      console.log(rej);
      dispatch({
        type: DELETE_PRODUCT_FAIL,
        payload: rej.data
      });
    });
};
