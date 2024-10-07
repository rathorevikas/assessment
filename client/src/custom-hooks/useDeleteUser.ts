import { useDispatch } from "react-redux";
import { deleteSingleUser } from "../store/userListSlice";

const useDeleteUser = () => {
  const dispatch = useDispatch();
  async function deleteOneUser(id: string) {
    const res = await fetch("http://localhost:4002/api/users/" + id, {
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
