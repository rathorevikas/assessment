import { useDispatch } from "react-redux";
import { addNewUser } from "../store/userListSlice";
import { API_DOMAIN } from "../utils/constant";

const useAddUser = () => {
  const dispatch = useDispatch();
  async function addOneUser(name: string, email: string) {
    const res = await fetch(API_DOMAIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json()
      //.then((data) => dispatch(addNewUser({ data: dataid, name, email })));
    let id = await data?.id;
    if (id) {
      dispatch(addNewUser({ id, name, email }));
    }
    return data;
  }
  return {
    addOneUser,
  };
};

export default useAddUser;
