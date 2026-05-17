import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <h4>About</h4>

         <div className="team-members">
      <p> Sultan Ajayi</p>
      <p> Samuel Oloyede</p>
      <p> Anointed Olorunwa</p>
      <p> Donald Yusuf</p>
      <p> Elijah Oluwole</p>
      <p> Chika Chukwuelokalum</p>
      <p> Joshua Oluwatoba</p>
      <p> Uzuegbu Nmesoma</p>
    </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div>
          <p>©2026 Design by Group22 </p>

          <p>
            Built by Group_22_TS_Academy. All rights reserved
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://tsacademyonline.com/"
            target="_blank"
            rel="noreferrer"
          >
            TS Academy
          </a>

          <a
            href="https://github.com/Allienino/Group_22_TS_Academy.git"
            target="_blank"
            rel="noreferrer"
          >
            Group_22_TS_Academy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;