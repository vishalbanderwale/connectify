import "./PopUpOption.css";

import { useContext } from "react";
import { postContext } from "../../context/PostContext";

function PopUpOption({ data }) {
  console.log(data);
  const { Dispatch, editPostData } = useContext(postContext);
  // console.log(data);
  console.log(editPostData);
  const deleteToken = localStorage.getItem("Token");
  const { setoptionToggle, setEditToggle, seteditPostData } =
    useContext(postContext);

  function editHandler() {
    setEditToggle(true);
    setoptionToggle(null);
    seteditPostData({ content: data.content, id: data._id });
    // console.log(data._id);
  }

  const deleteHandler = async () => {
    const response = await fetch(`/api/posts/${data._id}`, {
      method: "DELETE",
      headers: {
        authorization: deleteToken,
      },
    });

    const deleteData = await response.json();
    console.log(deleteData);
    Dispatch({ type: "DELETE_POST", payload: deleteData.posts });
  };

  return (
    <div className="pop-up-option-container">
      <button onClick={editHandler}>edit</button>

      <hr />
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
}

export { PopUpOption };
