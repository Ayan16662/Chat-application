import { useEffect } from "react";
import axios from "axios";
import { serverUrl } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { setUserData } from "./src/redux/userSlice";

const useCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          `${serverUrl}/api/user/current`,
          {
            withCredentials: true,
          }
        );

        dispatch(setUserData(result.data));
      } catch (error) {
        console.log("Current user error:", error);
      }
    };

    fetchUser();
  }, [dispatch]);
};

export default useCurrentUser;