import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                지게차정비365
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">기능</a>
              <a href="#screenshots" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">스크린샷</a>
              <a href="#qr-code" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">QR코드</a>
              <a href="#download" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">다운로드</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">문의</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-700 dark:text-orange-300 text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                지게차 유지보수 관리 솔루션
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                지게차<span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">365</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                지게차 정보 등록부터 유지보수 이력 관리까지<br />
                <span className="font-semibold text-orange-600 dark:text-orange-400">종합적인 지게차 관리 솔루션</span>
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-lg">
                직관적인 사용자 인터페이스로 지게차의 모든 정보를 체계적으로 관리하고, 
                유지보수 이력을 추적하여 안전하고 효율적인 운영을 지원합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.gil.forklift365"
            target="_blank"
            rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play에서 다운로드
          </a>
          <a
                  href="#features"
                  className="group border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  자세히 보기
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">지게차정비365</h3>
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-orange-100 mb-4">지게차 정보 관리</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-orange-100">등록된 지게차</span>
                      <span className="font-semibold">12대</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-100">다음 점검일</span>
                      <span className="font-semibold">3일 후</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-100">유지보수 상태</span>
                      <span className="font-semibold text-green-300">양호</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              주요 기능
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              지게차정비365의 핵심 기능들을 통해 효율적인 지게차 관리를 경험해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                지게차 정보 등록
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                지게차의 기본 정보, 제조사, 모델, 구입일 등 상세 정보를 체계적으로 등록하고 관리할 수 있습니다.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                유지보수 이력 관리
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                정기 점검, 수리 이력, 부품 교체 기록 등을 상세히 기록하고 추적하여 체계적인 유지보수를 지원합니다.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                직관적인 인터페이스
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                사용자 친화적인 디자인으로 누구나 쉽게 사용할 수 있으며, 빠른 접근과 효율적인 작업이 가능합니다.
              </p>
            </div>



          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              앱 스크린샷
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              지게차정비365의 직관적인 인터페이스를 미리 확인해보세요
            </p>
          </div>
          
          {/* 모바일: 가로 스크롤, 데스크톱: 그리드 */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {[
                { src: "/images/screenshots/forklift-sc1.png", alt: "지게차 정보 추가 화면" },
                { src: "/images/screenshots/forklift-sc2.png", alt: "지게차 상세 정보 화면" },
                { src: "/images/screenshots/forklift-sc3.png", alt: "지게차 목록 화면" },
                { src: "/images/screenshots/forklift-sc4.png", alt: "정비내역 관리 화면" }
              ].map((screenshot, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg flex-shrink-0 w-48">
                  <div className="aspect-[9/16] relative">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 데스크톱: 그리드 레이아웃 */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { src: "/images/screenshots/forklift-sc1.png", alt: "지게차 정보 추가 화면" },
              { src: "/images/screenshots/forklift-sc2.png", alt: "지게차 상세 정보 화면" },
              { src: "/images/screenshots/forklift-sc3.png", alt: "지게차 목록 화면" },
              { src: "/images/screenshots/forklift-sc4.png", alt: "정비내역 관리 화면" }
            ].map((screenshot, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[9/16] relative">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section id="qr-code" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              QR 코드로 간편하게 설치하세요
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              모바일에서 QR 코드를 스캔하여 바로 다운로드하세요
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="w-48 h-48 relative mb-6">
                <Image
                  src="/images/qr-code.png"
                  alt="지게차정비365 앱 다운로드 QR 코드"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                모바일 카메라로<br />
                QR 코드를 스캔하세요
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                간편한 설치 방법
              </h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">QR 코드 스캔</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">모바일 카메라로 QR 코드를 스캔합니다</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Google Play Store 이동</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">자동으로 Google Play Store로 이동합니다</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">앱 설치</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">지게차정비365 앱을 다운로드하고 설치합니다</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            지금 다운로드하세요
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Google Play Store에서 지게차정비365 앱을 무료로 다운로드하고<br />
            효율적인 지게차 관리를 시작하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.gil.forklift365"
          target="_blank"
          rel="noopener noreferrer"
              className="group bg-white text-orange-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play에서 다운로드
            </a>
            <div className="text-orange-100">
              <p className="text-sm">개발자: Tyler</p>
              <p className="text-sm">카테고리: Lifestyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">지게차정비365</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                지게차 정보 등록부터 유지보수 이력 관리까지<br />
                종합적인 지게차 관리 솔루션을 제공합니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">링크</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-orange-400 transition-colors">주요 기능</a></li>
                <li><a href="#screenshots" className="text-gray-400 hover:text-orange-400 transition-colors">앱 스크린샷</a></li>
                <li><a href="#qr-code" className="text-gray-400 hover:text-orange-400 transition-colors">QR 코드</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-orange-400 transition-colors">다운로드</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.gil.forklift365" className="text-gray-400 hover:text-orange-400 transition-colors">Google Play Store</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">개발자 정보</h4>
              <div className="space-y-3 text-gray-400">
                <p>개발자: Tyler</p>
                <p>이메일: dlaehdrlf4@naver.com</p>
                <p>위치: 대한민국</p>
                <p>카테고리: Lifestyle</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 지게차정비365. All rights reserved.</p>
            <p className="mt-2 text-sm">데이터 수집 없음 • 제3자와 데이터 공유 없음</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
