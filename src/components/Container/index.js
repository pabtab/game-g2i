import React, {createContext} from "react";

import "./Container.scss";

const Context = createContext();

const Header = ({ children }) => (
  <header>{children}</header>
);
const Body = ({ children }) => (
  <section className="body">{children}</section>
);
const Footer = ({ children }) => (
  <footer>{children}</footer>
);


const Container = ({children, className}) => {
  return (
    <Context.Provider>
      <div className={`Container ${className}`}>
        {children}
      </div>
    </Context.Provider>
  )
}

export default Container;
export {Header, Body, Footer}
