import React from "react";
import { connect } from "react-redux";

const Header = ({ todo, toggleTodo }) => (
  <div className="header-item">
    <h1>֍ TO-DO ֎</h1>
  </div>
);

export default connect(null)(Header);
