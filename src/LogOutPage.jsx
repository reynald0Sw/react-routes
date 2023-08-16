import React from "react";
import { useAuth } from "./auth";

function LogOutPage() {
  const auth = useAuth();
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
    <>
      {/* <div>
      <h1>LogOut</h1>
      <form onSubmit={logout}>
        <label>seguro de que quieres salir?</label>
        
        <button type="submit">Salir</button>
      </form>
      </div> */}

      <div class="form-wrapper sign-up">
        <h1> Logout </h1>
        <form onSubmit={logout} action="">
          <label>Estas seguro de salir?</label>
          <button type="submit" class="btn">
            Exit
          </button>          
          
          <label>
            volver a Home?{" "}
            <a href="#" class="">
              Home
            </a>
          </label>
        </form>
      </div>
    </>
  );
}

export {LogOutPage};
