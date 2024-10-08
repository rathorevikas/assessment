import { useDispatch } from "react-redux";
import { deleteSingleUser } from "../store/userListSlice";
import { API_DOMAIN } from "../utils/constant";

const useDeleteUser = () => {
  const dispatch = useDispatch();
  async function deleteOneUser(id: string) {
    const res = await fetch(API_DOMAIN + id, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data?.success === true) {
      dispatch(deleteSingleUser(id));
    }
    return data;
  }
  return {
    deleteOneUser,
  };
};

export default useDeleteUser;
