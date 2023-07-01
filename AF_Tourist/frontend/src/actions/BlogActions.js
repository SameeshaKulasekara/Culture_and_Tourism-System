import axios from "axios";
import {
  ADMIN_BLOG_FAIL,
  ADMIN_BLOG_REQUEST,
  ADMIN_BLOG_SUCCESS,
  ALL_BLOG_FAIL,
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  CLEAR_ERRORS,
  DELETE_BLOG_FAIL,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  NEW_BLOG_FAIL,
  NEW_BLOG_REQUEST,
  NEW_BLOG_SUCCESS,
  NEW_LIKE_FAIL,
  NEW_LIKE_REQUEST,
  NEW_LIKE_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
 
} from "../constans/BlogConstans";

export const getAllBlogs= (keyword="",currentPage=1,category) => async (dispatch)=>{
  try {
      dispatch({
          type:  ALL_BLOG_REQUEST
      });

     let link = `/api/v2/blogs?keyword=${keyword}&page=${currentPage}`;
      
     if(category){
      link = `/api/v2/blogs?keyword=${keyword}&page=${currentPage}&category=${category}`;
     }
      const {data} = await axios.get(link);

      dispatch({
          type: ALL_BLOG_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({
          type: ALL_BLOG_FAIL,
          payload: error.response.data.message,
      })
  }
}; 

// Get All Products Details
export const getSingleBlog= (id) => async (dispatch)=>{
  try {
      dispatch({ type: BLOG_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v2/blog/${id}`);
  
      dispatch({
        type: BLOG_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: BLOG_DETAILS_FAIL,
        payload: error.response.message,
      });
    }
};
  
  // NEW REVIEW
export const likeBlog = (likeblog) => async (dispatch) => {
  try {
    dispatch({ type: NEW_LIKE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v2/blog/:postId/like`, likeblog, config);

    dispatch({
      type: NEW_LIKE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_LIKE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//new dislike
export const dislikeBlog = (likeblog) => async (dispatch) => {
  try {
    dispatch({ type: NEW_LIKE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v2/blog/:postId/dislike`, likeblog, config);

    dispatch({
      type: NEW_LIKE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_LIKE_FAIL,
      payload: error.response.data.message,
    });
  }
}


// Create Product --------Admin
export const createBlog = (blogData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BLOG_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/blog/new`,
      blogData,
      config
    );

    dispatch({
      type: NEW_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Admin Products -----Admin
  export const getAdminBlogs = () => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_BLOG_REQUEST });
  
      const { data } = await axios.get("/api/v2/admin/blogs");
  
      dispatch({
        type: ADMIN_BLOG_SUCCESS,
        payload: data.products,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_BLOG_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Delete Product ------Admin
export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BLOG_REQUEST });

    const { data } = await axios.delete(`/api/v2/blog/${id}`);

    dispatch({
      type: DELETE_BLOG_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateBlog = (id, blogData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BLOG_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/blog/${id}`,
      blogData,
      config
    );

    dispatch({
      type: UPDATE_BLOG_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   Clearing errors
export const clearErrors= () => async (dispatch)=>{
  dispatch({
      type: CLEAR_ERRORS
  })
}