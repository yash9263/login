import React from "react";

function LoginForm() {
  return (
    <div>
      <form>
        <label for="fname">Email</label>
        <input type="email" id="email" name="email" />
        <label for="lname">Password</label>
        <input type="password" id="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default LoginForm;
