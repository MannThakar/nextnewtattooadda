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
              Dribbble
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
            <h2 className="footer__logo-text">Tattoo Adda</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.629873673482!2d70.7925151!3d22.292006200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca3777d2d545%3A0xb5c8b6eb811e14c1!2sTattoo%20Adda!5e0!3m2!1sen!2sin!4v1737881051622!5m2!1sen!2sin"
              width="500"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="footer__map"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
