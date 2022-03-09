//  ---------------
//  Description :
//  ---------------
//  1) In this component, data is fetched from the registered,unregisterd and project management endpoints in useEffect hook
//     when the user clicks on "Display Users " button.
//  2) Users state (id,status,projects) is created/ updated using useState Hook.
//  3) Users  state is dispatched to store

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setAllUsers } from "../redux/actions/Actions";
import UserDisplayComponent from "./UserDisplayComponent";
import commonData from "./commonData";

const UsersListingComponent = () => {
  const [displayData, setDisplayData] = useState(false);
  const [registered, setRegistered] = useState([]);
  const [unregistered, setUnRegistered] = useState([]);
  const [projectMembership, setProjectMembership] = useState([]);
  const [users, setUsers] = useState([]);
  const projectID = [];

  const dispatch = useDispatch();

  const refreshPage = () => {
    setUsers([]);
    setDisplayData(!displayData);
  };

  const getDataFromAPI = async (url, type) => {
    const response = await fetch(url);
    const data = await response.json();

    if (type == commonData.registered) {
      setRegistered(data);
    } else if (type == commonData.unregistered) {
      setUnRegistered(data);
    } else if (type == "") {
      setProjectMembership(data);
    }
  };

  const updataUsersInfo = (data, type) => {
    let userStatus = "";

    data.map((each) => {
      var projects = [];
      var project = "";
      if (type == commonData.registered) {
        userStatus = commonData.registered;
      } else {
        userStatus = commonData.unregistered;
      }

      var projectDetailsfromEndPoint = projectMembership.filter(
        (item) => item.userId == each.id
      );

      setUsers((users) => [
        ...users,
        {
          id: each.id,
          status: userStatus,
          projectID: [
            ...projectID,
            projectDetailsfromEndPoint.map((each) => each.projectId),
          ],
        },
      ]);
    });
  };

  useEffect(() => {
    //fetching project management data ...
    getDataFromAPI(commonData.project_membership, "").then(() => {});

    //fetching registered data....
    getDataFromAPI(commonData.registered_url, commonData.registered).then(
      () => {
        updataUsersInfo(registered, commonData.registered);
      }
    );

    //fetching unregistered data....
    getDataFromAPI(commonData.unregistered_url, commonData.unregistered).then(
      () => {
        updataUsersInfo(unregistered, commonData.unregistered);
      }
    );
  }, [displayData]);

  //dispatching the users to the store

  dispatch(setAllUsers(users));

  return (
    <div>
      <h2 style={{ color: "blue", font: "medium" }}>
        {" "}
        Click on the display button to get all the users information.
      </h2>
      <button onClick={refreshPage} style={{ margin: "10px", font: "large" }}>
        {" "}
        {displayData == true ? "Hide users" : "Display Users"}
      </button>
      <br></br>
      {displayData == true && <UserDisplayComponent></UserDisplayComponent>}
    </div>
  );
};

export default UsersListingComponent;
