import { useDispatch } from "react-redux";
import { setAllUserList } from "../store/userListSlice";
import { API_DOMAIN } from "../utils/constant";

const useFetchAllUsers = () => {
  const dispatch = useDispatch();
  async function fetchAllUsers() {
    const res = await fetch(API_DOMAIN);
    const data = await res.json();
    dispatch(setAllUserList(data?.users));
  }

  return { fetchAllUsers };
};

export default useFetchAllUsers;
