window.onload = () => {
    // 1. window 객체
    // 1) window.open()
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        // window.open('URL', '창이름', '특성');
        // window.open(); // 새창
        // window.open('https://www.naver.com'); // 네이버 페이지
        // window.open('https://www.naver.com', 'naver'); // 네이버 페이지
        // 특성의 경우 브라우저마다 다르게 동작하기 때문에 정상적으로 동작하는지는 확인해야 한다.
        window.open('https://www.naver.com', 'naver', 'width=500', 'height=400');
    });

};