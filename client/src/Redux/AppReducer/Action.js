import * as types from "./Actiontypes";
import axios from "axios";
let baseRoute = "https://farmer-festlizer.vercel.app"; //"http://localhost:8080"
export const Get_All_Data = (setLoading) => (dispatch) => {
  axios
    .get(`${baseRoute}/data`)
    .then((r) => {
      dispatch({ type: types.PRODUCT_SUCCESS, payload: r.data });
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
};

export const Get_Cart_Data = (setLoading) => (dispatch) => {
  axios
    .get(`${baseRoute}/cart`, { withCredentials: true })
    .then((r) => {
      console.log(r.data.data);
      dispatch({ type: types.CART_DATA, payload: r.data.data });
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
};

export const Get_MyPosts_Data = (setLoading) => (dispatch) => {
  axios
    .get(`${baseRoute}/myposts`, { withCredentials: true })
    .then((r) => {
      console.log(r.data.data);
      dispatch({ type: types.MY_POSTS_DATA, payload: r.data.data });
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
};

export const Sigup_Success =
  (alert, payload, navigate, setLoading) => (dispatch) => {
    if (!payload) {
      return;
    }
    axios
      .post(`${baseRoute}/signup`, payload)
      .then((r) => {
        setLoading(false);
        console.log(r, "adkhbasjhdasd");
        if (r.data.message === "user created") {
          alert.success("User Registration successfull");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else if (r.data.message === "exists") {
          alert.show("User Already Exist");
        } else {
          alert.error(r.data.message || "Something went wrong.");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

export const Login_Success = (alert, payload, navigate, setLoading) => () => {
  axios
    .post(`${baseRoute}/login`, payload, { withCredentials: true })
    .then((r) => {
      setLoading(false);
      if (r.data.message === "login success") {
        sessionStorage.setItem("auth", r.data.value);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("role", r.data.data.role);
        localStorage.setItem(
          "user",
          `${r.data.data.First_Name},${r.data.data.Last_Name},${r.data.data.Mobile},${r.data.data.role}`
        );
        alert.success("Login Successfull");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (r.data.message === "Invalid Password") {
        alert.error("Invalid Password");
      } else if (r.data.message === "user does not exist") {
        alert.show("user does not exist");
        setTimeout(() => {
          navigate("/signup");
        }, 1000);
      }
    })
    .catch((err) => {
      setLoading(false);
      alert.error(err.data.message || "Something Went Wrong in axios");
      console.log(err);
    });
};

export const AddToCart = (Id, alert, setLoading) => (dispatch) => {
  axios
    .get(`${baseRoute}/${Id}/addtocart`, { withCredentials: true })
    .then((r) => {
      setLoading(false);
      if ("item added to cart" === r.data.message) {
        alert.success("Item Collected Successfully");
      }
    })
    .then(() => {
      dispatch(Get_All_Data(setLoading));
    })
    .catch((err) => {
      setLoading(false);
      alert.error("Something Went Wrong in axios");
      console.log(err);
    });
};

export const Upload_Issue =
  (formData, alert, navigate, setLoading) => (dispatch) => {
    console.log(formData);
    axios
      .post(
        `${baseRoute}/uploadIssue`,
        formData,
        { withCredentials: true },
        { headers: { "Content-Type": "multiple/form-data" } }
      )
      .then((r) => {
        setLoading(false);
        console.log(r, "multer");
        if (r.data.message === "data uploaded") {
          alert.success("Your Post Uploaded uploaded");
        } else if (r.data.message === "exists") {
          alert.show("User Already Exist");
        } else if (r.data.message === "error") {
          alert.error("Something Went Wrong");
        }
        dispatch(Get_All_Data(setLoading));
        navigate("/");
      })
      .then(() => {
        dispatch(Get_All_Data(setLoading));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

export const Logout = (setLoading) => (dispatch) => {
  console.log(1, "ji");
  axios
    .get(`${baseRoute}/logout`, { withCredentials: true })
    .then((res) => {
      setLoading(false);
      console.log(res.data.message, "jil");
      if (res.data.message === "user logout successfully") {
        sessionStorage.clear();
        localStorage.setItem("isLogin", false);
        localStorage.setItem("user", "");
        window.location.reload();
      }
    })
    .then(() => {})
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
};

export const Delete = (Id, alert, setLoading) => () => {
  axios
    .get(`${baseRoute}/${Id}/delete`, { withCredentials: true })
    .then((r) => {
      setLoading(false);
      if ("item marked as completed" === r.data.message) {
        alert.success("item marked as completed");
      }
    })
    .catch((err) => {
      setLoading(false);
      alert.error("Something Went Wrong in axios");
      console.log(err);
    });
};

export const PermenentDelete = (Id, alert, setLoading) => (dispatch) => {
  axios
    .get(`${baseRoute}/${Id}/permenentDelete`, { withCredentials: true })
    .then((r) => {
      setLoading(false);
      console.log(r.data);
      if ("item deleted successfully" === r.data.message) {
        alert.success("item deleted successfully");
      }
    })
    .then(() => {
      dispatch(Get_MyPosts_Data(setLoading));
    })
    .catch((err) => {
      setLoading(false);
      alert.error("Something Went Wrong in axios");
      console.log(err);
    });
};

export const Delete_Cart = (Id, alert, setLoading) => (dispatch) => {
  axios
    .get(`${baseRoute}/${Id}/delete_catItem`, { withCredentials: true })
    .then((r) => {
      setLoading(false);
      if ("item marked as completed" === r.data.message) {
        alert.success("item marked as completed");
        dispatch(Get_Cart_Data(setLoading));
      }
    })
    .catch((err) => {
      setLoading(false);
      alert.error("Something Went Wrong in axios");
      console.log(err);
    });
};

export const PermenentDelete_Cart = (Id, alert, setLoading) => (dispatch) => {
  axios
    .get(`${baseRoute}/${Id}/permenentDelete_catItem`, {
      withCredentials: true,
    })
    .then((r) => {
      setLoading(false);
      console.log(r.data);
      if ("item deleted successfully" === r.data.message) {
        alert.success("item deleted successfully");
      }
    })
    .then(() => {
      dispatch(Get_Cart_Data(setLoading));
    })
    .catch((err) => {
      setLoading(false);
      alert.error("Something Went Wrong in axios");
      console.log(err);
    });
};
