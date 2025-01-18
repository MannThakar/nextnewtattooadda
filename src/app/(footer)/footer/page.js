import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="footer__container">
          <div className="footer__social-links">
            <Link href="#" className="footer__social-link">
              Instagram
            </Link>
            <Link href="#" className="footer__social-link">
              Behance
            </Link>
            <Link href="#" className="footer__social-link">
              Dribbble
            </Link>
            <Link href="#" className="footer__social-link">
              Vimeo
            </Link>
            <Link href="#" className="footer__social-link">
              Youtube
            </Link>
            <Link href="#" className="footer__social-link">
              LinkedIn
            </Link>
            <Link href="#" className="footer__social-link">
              Savee.it
            </Link>
            <Link href="#" className="footer__social-link">
              Fonts in Use
            </Link>
            <Link href="#" className="footer__social-link">
              Pinterest
            </Link>
          </div>

          <hr className="footer__divider" />

          <div className="footer__content">
            <p className="footer__slogan">Small is beautiful.</p>
            <div className="footer__links">
              <Link href="#" className="footer__link">
                Index
              </Link>
              <Link href="#" className="footer__link">
                Impressum
              </Link>
              <Link href="#" className="footer__link">
                Privacy Policy
              </Link>
              <span className="footer__copyright">
                © Size – All rights reserved.
              </span>
            </div>
          </div>

          <div className="footer__logo">
            <h2 className="footer__logo-text">Footer</h2>
            <span className="footer__logo-trademark">®</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
