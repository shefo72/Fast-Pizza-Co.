import { Link, useNavigate } from "react-router-dom";

function Button({ children, disabled = false, to, type }) {
  const navigate = useNavigate();

  const base =
    "inline-block cursor-pointer text-sm rounded-full bg-yellow-400 tracking-wide text-stone-800 uppercase transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 font-semibold ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-[12px] font-bold",
    secondary:
      "cursor-pointer  text-sm rounded-full bg-transparent tracking-wide text-stone-400 border border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 uppercase transition-colors hover:bg-stone-300 font-semibold hover:text-stone-800 focus:bg-stone-800 focus:ring-2 focus:ring-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed",
  };

  if (to) {
    if (to === "-1")
      return (
        <button onClick={() => navigate(-1)} className={styles[type]}>
          {children}
        </button>
      );

    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
