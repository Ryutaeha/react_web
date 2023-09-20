import "./default.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const isLogin = props.isLogin;
  const setIsLogin = props.setIsLogin;
  return (
    <header>
      <div className="header">
        <div className="main-logo">
          <Link to="/">MAIN</Link>
        </div>
        <Navi />
        <HeaderLink isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </header>
  );
};

const Navi = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/board">BOARD</Link>
        </li>
        <li>
          <Link to="#">메뉴2</Link>
        </li>
        <li>
          <Link to="#">메뉴3</Link>
        </li>
        <li>
          <Link to="#">메뉴4</Link>
        </li>
      </ul>
    </div>
  );
};

const HeaderLink = (props) => {
  const isLogin = props.isLogin;
  const setIsLogin = props.setIsLogin;
  const logout = () => {
    window.localStorage.removeItem("token"); //세션에 들어있는 값을 지워준다.
    setIsLogin(false);
  };
  return (
    <div className="header-link">
      {isLogin ? (
        <>
          <Link to="/member" title="mypage">
            <span className="material-icons">face</span>
          </Link>
          <Link to="#" title="로그아웃" onClick={logout}>
            <span className="material-icons">logout</span>
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" title="로그인">
            <span className="material-icons">login</span>
          </Link>
          <Link to="/join">
            <span className="material-icons" title="회원가입">
              person_add_alt
            </span>
          </Link>
        </>
      )}
    </div>
  );
};
export default Header;
