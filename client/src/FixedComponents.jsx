const FixedComponents = () => {
  const phoneNumber = +911234657890;
  return (
    <section>
      {/* Social Links */}
      <div className="floatingButtons fixed right-0 top-1/2 transform -translate-y-1/2 space-y-4">
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2 md:p-3 bg-blue-700 text-white rounded-l-lg hover:bg-blue-800 transition-colors z-10"
        >
          <i className="ri-whatsapp-line text-xl cursor-pointer"></i>
        </a>
        <a
          href={`tel:+${phoneNumber}`}
          className="block p-2 md:p-3 bg-blue-700 text-white rounded-l-lg hover:bg-blue-800 transition-colors z-10"
        >
          <i className="ri-phone-line text-xl cursor-pointer"></i>
        </a>
      </div>
    </section>
  );
};

export default FixedComponents;
