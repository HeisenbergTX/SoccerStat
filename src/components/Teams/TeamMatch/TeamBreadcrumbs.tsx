import React, { useMemo } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { getTeamsSelector } from "../../../store/teams/selectors";

function handleClick(e: any) {
  e.preventDefault();
}

const style = {
  fontSize: "16px",
  textDecoration: "none",
  color: "#fff",
};

export const TeamBreadCrumbs = () => {
  const teamMatch = useSelector(getTeamsSelector);
  const id = useSelector((state: RootState) => state.teamMatchId.openId);

  const teamName = useMemo(
    () => teamMatch.find((team: any) => team.id === id)?.name || "",
    [teamMatch, id]
  );

  return (
    <Breadcrumbs style={style} aria-label="breadcrumb">
      <NavLink style={{ fontSize: "16px", color: "#fff" }} to="/teams">
        Команды
      </NavLink>
      <NavLink
        style={{
          fontSize: "16px",
          textDecoration: "none",
          color: "#fff",
          opacity: "0.7",
        }}
        to="/teams/:id/match"
        onClick={handleClick}
      >
        {teamName}
      </NavLink>
    </Breadcrumbs>
  );
};