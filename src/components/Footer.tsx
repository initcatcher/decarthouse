import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Description and Information */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/images/logo.png" // Replace with your logo path
              alt="Descartes House"
              width={150}
              height={72}
            />
            {/* <div>
              <h1 className="text-lg font-bold">DESCARTES HOUSE</h1>
              <p className="text-sm text-gray-500">데카르트 하우스</p>
            </div> */}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            당원에서는 「예약 진료」를 실시하고 있습니다. 처음의 분이라도,
            당원의 전화로 예약이 가능합니다.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            당뇨병, 생활습관병(고혈압·지질 이상증/고지혈증, 통풍 등), 갑상선
            질환(바세도우병·하시모토병·갑상선종양 등), 수면시 무호흡
            증후군(SAS), 일반 내과 진료에도 보험 적용
          </p>

          {/* Consultation Hours */}
          <div className="overflow-auto">
            <h2 className="text-sm font-semibold mb-2">진료시간</h2>
            <table className="text-sm text-center text-gray-700 border-collapse border border-gray-300 w-full max-w-lg">
              <thead>
                <tr>
                  <th className="py-2 border border-gray-300"> </th>
                  <th className="py-2 px-3 border border-gray-300">月</th>
                  <th className="py-2 px-3 border border-gray-300">火</th>
                  <th className="py-2 px-3 border border-gray-300">水</th>
                  <th className="py-2 px-3 border border-gray-300">木</th>
                  <th className="py-2 px-3 border border-gray-300">金</th>
                  <th className="py-2 px-3 border border-gray-300">土</th>
                  <th className="py-2 px-3 border border-gray-300">日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2  border border-gray-300">오전</td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ○
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ○
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ○
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ○
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ○
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ×
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ×
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border border-gray-300">오후</td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ○
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ○
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ○
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ○
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ○
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ×
                  </td>
                  <td className="py-2 px-3 border border-gray-300 text-center">
                    ×
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section: Map */}
        <div className="lg:col-start-2">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.5357586892067!2d126.97796911531074!3d37.57109337979847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3a6d73a658d%3A0x3d1e1e7418e5b6f8!2z7ISc7Jq47IucIOygleuztA!5e0!3m2!1sko!2skr!4v1675167281023!5m2!1sko!2skr"
            className="w-full h-72 sm:h-96 rounded-lg shadow-md border"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
