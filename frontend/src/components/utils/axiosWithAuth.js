import axios from "axios";

const axiosWithAuth = () => {
  // const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFtZSI6InRlc3RpbmciLCJqd3RJZCI6MSwiaWF0IjoxNTY3MDQwNDQ5LCJleHAiOjE1NjcxMjY4NDl9.h4cIwLVbsKzcLW-ZY2u1CKyn4kXZIrc_C2ujdmshhRw`
    // {token}
    },
  });
};

export default axiosWithAuth;