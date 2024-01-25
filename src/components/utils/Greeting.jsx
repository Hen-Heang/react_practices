import React from "react";

export default function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting/>;
  } else {
    return <GuestGreeeting/>;
  }
}

function UserGreeting() {
  return <h1>Hello Guy!</h1>;
}

function GuestGreeeting() {
  return <h1>Please sign up</h1>;
}
