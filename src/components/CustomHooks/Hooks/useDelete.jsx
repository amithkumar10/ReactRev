import { useState } from "react";
import axios from "axios";

const useDelete = (baseUrl) => {
  const [loadingId, setLoadingId] = useState(null);
  const [error, setError] = useState(null);

  const deleteItem = async (id) => {
    try {
      setLoadingId(id);
      setError(null);

      const response = await axios.delete(`${baseUrl}/${id}`);

      if (response.status === 200) {
        return true; // success
      }

      return false;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoadingId(null);
    }
  };

  return { deleteItem, loadingId, error };
};

export default useDelete;