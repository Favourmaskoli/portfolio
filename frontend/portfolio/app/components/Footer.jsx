function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center sm:flex items-center justify-between mx-[10%] mt-12 py-6">
        <p className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Favour. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
