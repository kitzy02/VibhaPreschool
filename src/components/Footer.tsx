const Footer = () => {
  return (
    <footer className="bg-primaryBlue text-white py-6 mt-16">
      <div className="container-custom text-center">
        <p>
          © {new Date().getFullYear()} Veebha International. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
