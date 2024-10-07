import { useDispatch } from "react-redux";
import { setAllUserList } from "../store/userListSlice";

const useFetchAllUsers = () => {
  const dispatch = useDispatch();
  async function fetchAllUsers() {
    const res = await fetch("http://localhost:4002/api/users");
    const data = await res.json();
    dispatch(setAllUserList(data?.users));
  }

  return { fetchAllUsers };
};

export default useFetchAllUsers;
