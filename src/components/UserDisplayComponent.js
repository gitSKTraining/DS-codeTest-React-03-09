//  ---------------
//  Description :
//  ---------------
//  1) In this component, alluser data is retrieved from the store using useSelector
//  2) Data retrieved from the store is sorted and displayed as a table.

import React from "react";
import { useSelector } from "react-redux";
import "../stylesheet/users.css";

const UserDisplayComponent = () => {
  //fetching data from Redux

  const allUsersFromRedux = useSelector((state) => {
    return state.allUserReducer.allUsers;
  });

  //sorting the data from store before displaying
  allUsersFromRedux.sort((a, b) => a.id - b.id);

  return (
    <div>
      <table className="allUserTable">
        <thead className="allUserHeading">
          <tr>
            <th>USER Id</th>
            <th>Status</th>
            <th>Assigned Projects </th>
          </tr>
        </thead>
        <tbody className="allUserData">
          {allUsersFromRedux.map((each) => (
            <tr key={each.id}>
              <td> {each.id} </td> <td> {each.status}</td>{" "}
              {each.projectID.map((eachProject) => (
                <td> {eachProject && eachProject + " "} </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDisplayComponent;
