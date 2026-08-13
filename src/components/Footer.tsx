import { portfolioData } from "../data/portfoliodata";

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;