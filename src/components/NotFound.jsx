import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/dashboard/competencies");
  }

  return (
    <div className="h-screen flex-col bg-drawerColor-100 flex items-center  justify-center">
      <h2 className="text-drawerColor-700 text-9xl mb-7 font-bold">404</h2>
      <p className="italic text-drawerColor-600 text-3xl mb-10 ">
        we couldn't find the page that you are looking for !
      </p>
      <button
        onClick={handleNavigate}
        className="uppercase px-5 py-2  bg-drawerColor-700 rounded text-drawerColor-50"
      >
        back to home page{" "}
      </button>
    </div>
  );
}

export default NotFound;
