import { useState } from "react";
import axios from "axios";

function usePost(url) {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (body) => {
    try {
      setLoading(true);
      const response = await axios.post(url, body);
        
      response.status === 201
        ? alert("Data posted successfully")
        : alert("Failed to post data");
   
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, postData };
}

export default usePost;