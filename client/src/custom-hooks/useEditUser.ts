import { useDispatch } from "react-redux";
import { editSingleUser } from "../store/userListSlice";
import { API_DOMAIN } from "../utils/constant";

const useEditUser = () => {
  const dispatch = useDispatch();
  async function editOneUser(id: string, name: string, email: string) {
    const res = await fetch(API_DOMAIN + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    if (data?.id === id) {
      dispatch(editSingleUser({ id, name, email }));
    }
    return data;
  }
  return {
    editOneUser,
  };
};

export default useEditUser;
