export default function Workflow() {
  return (
    <section className="workflow">
      <ul className="workflow__list">
        <li className="workflow__item">
          <div className="icon__workflow">
            <img src="assets/images/icon_workflow/icon1.png" alt="" />
          </div>
          <div className="description__workflow">
            <h1>Tulis Laporan</h1>
            <p>Laporkan keluhan anda dengan jelas dan lengkap</p>
          </div>
        </li>
        <li className="workflow__item">
          <div className="icon__workflow">
            <img src="assets/images/icon_workflow/icon2.png" alt="" />
          </div>
          <div className="description__workflow">
            <h1>Proses Verifikasi</h1>
            <p>
              Laporan Anda akan diverifikasi dan diteruskan kepada instansi
              berwenang
            </p>
          </div>
        </li>
        <li className="workflow__item">
          <div className="icon__workflow">
            <img src="assets/images/icon_workflow/icon3.png" alt="" />
          </div>
          <div className="description__workflow">
            <h1>Proses Tindak Lanjut</h1>
            <p>Instansi akan menindaklanjuti dan membalas laporan Anda</p>
          </div>
        </li>
        <li className="workflow__item">
          <div className="icon__workflow">
            <img src="assets/images/icon_workflow/icon4.png" alt="" />
          </div>
          <div className="description__workflow">
            <h1>Beri Tanggapan</h1>
            <p>
              Anda dapat menanggapi kembali balasan yang diberikan oleh instansi
            </p>
          </div>
        </li>
        <li className="workflow__item">
          <div className="icon__workflow">
            <img src="assets/images/icon_workflow/icon5.png" alt="" />
          </div>
          <div className="description__workflow">
            <h1>Selesai</h1>
            <p>Laporan Anda akan terus ditindaklanjuti hingga terselesaikan</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
