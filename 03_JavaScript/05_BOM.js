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

    // 2) window.setTimeout()
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let timerId = 0;
        let newWindow = window.open();

        newWindow.alert('이 페이지는 3초 후에 종료됩니다.');

        // 일정 시간 후에 콜백 함수를 한 번 실행 (3초 후에 동작)
        timerId = window.setTimeout(() => newWindow.close(), 3000);

        // 타이머 ID를 clearTimeout()에 전달하면 해당 ID의 타이머를 취소할 수 있다.
        window.clearTimeout(timerId);
    });

    // 3) window.setInterval()
    let timerId = 0;
    let btnStart = document.getElementById('btnStart');
    let btnStop = document.getElementById('btnStop');

    btnStart.addEventListener('click', () => {
        let div1 = document.getElementById('div1');

        timerId = window.setInterval(() => {
            let now = new Date();
            
            div1.innerHTML = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;
        }, 1000);
    });

    btnStop.addEventListener('click', () => {
        window.clearInterval(timerId);
    });

};