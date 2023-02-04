function ContactSection() {
  return (
    <div className="container-fluid px-5">
      <div className="d-flex justify-content-center align-items-center p-4">
        <div className="row container ">
          <div className="col-12 col-md-5 text-center py-1">
            <p className="font2 border-blue-right color-light-gray font14px">
              شماره تلفتان را وارد کنید تا برای ارائه مشاوره و اطلاعات بیشتر با
              شما تماس بگیریم.
            </p>
          </div>
          <div className="col-6 col-md-3 text-center">
            <input
              type="text"
              className="form-input-costume"
              placeholder="شماره تلفن       09123456789"
            />
          </div>
          <div className="col-6 col-md-3">
            <button
              type="button"
              className="btn bg-dark-blue rounded-2 text-white px-7"
            >
              درخواست مشاوره
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
