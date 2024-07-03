import "./style.css";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        Github:{" "}
        <a
          href="https://github.com/rg85rajat/"
          title="Github React-Hangman"
        >
          @rg85rajat
        </a>
      </div>
      <div className="divider" />
      <div>
        Game made by RG. 
        {/* <a
          href="https://www.flaticon.com/authors/smalllikeart"
          title="smalllikeart"
        >
          smalllikeart
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a> */}
      </div>
    </div>
  );
}
