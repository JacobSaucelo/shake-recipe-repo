import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { convertDate } from "../components/myDate";
import Update from "../components/update";
import { Loading } from "../styles/pages/more";
import {
  MoreContainer,
  BackBtn,
  MoreTitle,
  MoreTools,
  MoreUpdate,
  MoreDelete,
} from "../styles/pages/more";

const More = ({}) => {
  const { id } = useParams();
  const [shake, setShake] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isSameAuthor, setIsSameAuthor] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const updateToggle = () => setIsUpdate(!isUpdate);

  const getMore = async () => {
    await axios
      .get(`http://localhost:3001/api/v1/shakes/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status >= 199 && res.status <= 299) {
          return res.data;
        }
        console.log("i cant lool", res.statusText);
      })
      .then((data) => {
        setIsAuthenticating(false);
        setShake(data.recipe);
        setIsSameAuthor(data.isSameUser);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.response.message);
        navigate("/login");
      });
  };

  const deleteMore = async () => {
    await axios
      .delete(`http://localhost:3001/api/v1/shakes/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status >= 199 && res.status <= 299) {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err.response.message);
        setMessage(err.response.message);
      });
  };

  useEffect(() => {
    if (isUpdate === false) {
      getMore();
    }
  }, [isUpdate]);

  if (isAuthenticating) {
    return (
      <Loading>
        <BounceLoader color="#FF8181" size="100px" />
      </Loading>
    );
  }

  const {
    shakeAuthor,
    title,
    recipe,
    description,
    procedure,
    createdAt,
    updatedAt,
  } = shake;

  return (
    <MoreContainer>
      {isUpdate ? (
        <Update info={shake} id={id} toggle={updateToggle} />
      ) : (
        <>
          <BackBtn onClick={() => navigate(-1)} />
          <MoreTitle>{title}</MoreTitle>
          <h5>by {shakeAuthor || "Unknown"}</h5>
          <h4>Description</h4>
          <p>{description}</p>
          <h4>Ingredients</h4>
          <p>{recipe}</p>
          <h4>Procedure</h4>
          <p>{procedure || "Empty... nothing to see here"}</p>
          <h5>Created at {convertDate(createdAt)}</h5>
          <br />
          <h5>Updated at {convertDate(updatedAt)}</h5>
          {isSameAuthor && (
            <MoreTools>
              <MoreUpdate onClick={updateToggle}>Edit Post</MoreUpdate>
              <MoreDelete onClick={deleteMore}>Delete</MoreDelete>
            </MoreTools>
          )}
        </>
      )}
    </MoreContainer>
  );
};

export default More;
