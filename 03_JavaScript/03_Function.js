// 함수
// 1. 함수 선언
// 1) 선언적 함수
function funcTest() {
    console.log('funcTest() - 호출');

    // return 'funcTest() - 호출';
    // return;
}

// 2) 익명 함수
let btn1 = document.getElementById('btn1');

// btn1.onclick = function() {
//     alert('버튼 클릭!');
// };

btn1.addEventListener('click', function() {
    document.getElementById('p1').innerHTML = '익명 함수 실행';
});

// 함수 정의와 동시에 즉시 실행되는 함수로 한 번만 호출되며 다시 호출할 수 없다.
(
    function (a, b) {
        document.getElementById('p1').innerHTML = `${a} + ${b} = ${a + b}`;
    }
)(30, 70);

/*
    3) 화살표 함수
        3-1) 매개 변수 처리
            - 매개 변수가 없을 때 : () => { ... }
            - 매개 변수가 하나일 때 : x => { ... }
            - 매개 변수가 두 개 이상일 때 : (x, y, ... ) => { ... }
        3-2) 리턴 처리
            - 처리할 라인이 여러 개라면 {}로 감싸서 처리해야 한다.
                (x, y) => {
                    // 실행 구문
                    return x + y;
                }
            - 처리할 라인이 하나라면 {}와 return 문을 생략할 수 있다.
                (x, y) => x + y;
        3-3) this 바인딩 방식
            - 일반적인 함수는 함수를 호출하는 객체가 this가 된다.
            - 화살표 함수는 화살표 함수를 정의하는 영역의 this를 그대로 전달받는다.
*/

let btn2 = document.getElementById('btn2');

// btn2.onclick = () => {
//     alert('버튼 클릭!');
// };

// btn2.onclick = () => alert('버튼 클릭!');

// btn2.addEventListener('click', function () {
btn2.addEventListener('click', (event) => {
    console.log(this);
    console.log(event);
    console.log(event.target);
    document.getElementById('p2').innerHTML = '<h5>화살표 함수 실행</h5>';
});

// 2. 함수 호출
// 1) 매개변수
// function argTest(value) {
// 매개변수 기본값을 지정하면 전달되는 매개값이 없을 경우 기본값으로 사용할 수 있다.
function argTest(value = '매개값 없음') {
    console.log(value);
}

// 2) arguments 객체
// function sum() {
//     let result = 0;

//     // console.log(arguments);
//     // console.log(arguments.length);

//     // for (let i = 0; i < arguments.length; i++) {
//     //     result += arguments[i];
//     // }

//     for (const value of arguments) {
//         result += value;
//     }

//     return result;
// }

// arguments 대신 가변 인자를 사용해서 위의 함수와 동일한 기능을 하도록 구현
function sum(...numbers) {
    let result = 0;

    // console.log(numbers);
    // console.log(numbers.length);

    for (const value of numbers) {
        result += value;
    }

    return result;
}

function min(...numbers) {
    // let numbers = [30, 40, 10, 50];
    // Math.min(numbers[0], numbers[1], numbers[2], numbers[3]);
    // Math.min(...numbers);
    return Math.min(...numbers);
}

// 3) 함수 리턴
// 3-1) 일반적인 값 리턴
// 1 ~ 100까지의 랜덤값을 리턴하는 함수
function random() {
    let result = 0;

    result = parseInt(Math.random() * 100) + 1;

    return result;
}

// 3-2) 익명 함수 리턴
function returnTest() {
    // let func = function() {
    //     return '안녕하세요.'
    // };

    // return func;

    let name = '홍길동';

    // 클로저
    //   - 내부 함수가 사용하는 외부 함수의 지역 변수는 내부 함수가 소멸할 때까지
    //     소멸하지 않는 특성을 갖는데 이러한 특성을 클로저라고 한다.
    return function () {
        return `${name}님 안녕하세요.`;
    };
}

// 3. 내장 함수
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    let p3 = document.getElementById('p3');

    // isFinite() : 숫자가 유한한 값인지 확인한다.
    // isNaN() : 자바스크립트로 표현할 수 없는 숫자인지 확인한다.
    // encodeURI() : URI를 인코딩하는데 사용된다.
    //               , / ? = & ; : @ + $ #는 인코딩하지 않는다.
    // decodeURI() : 인코딩된 URI를 디코딩한다.
    let url = 'https://www.example.com?name=홍길동&age=34&address=경기도 고양시';
    let encodeUrl = 'https://www.example.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=34&address=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B3%A0%EC%96%91%EC%8B%9C';

    p3.innerHTML = `10 / 0 : ${ 10 / 0 }<br>`;
    p3.innerHTML += `-10 / 0 : ${ -10 / 0 }<br>`;
    p3.innerHTML += `isFinite(10 / 0) : ${ isFinite(10 / 0) }<br>`;
    p3.innerHTML += `isFinite(-10 / 0) : ${ isFinite(-10 / 0) }<br>`;
    p3.innerHTML += `isFinite(10 / 2) : ${ isFinite(10 / 2) }<br><br>`;
    p3.innerHTML += `10 / 'a' : ${ 10 / 'a' }<br>`
    p3.innerHTML += `isNaN(10 / 'a') : ${ isNaN(10 / 'a') }<br>`
    p3.innerHTML += `isNaN(10 / 2) : ${ isNaN(10 / 2) }<br><br>`
    p3.innerHTML += `encodeURI(url) : ${ encodeURI(url) }<br>`
    p3.innerHTML += `decodeURI(encodeUrl) : ${ decodeURI(encodeUrl) }<br>`
});