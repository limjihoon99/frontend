window.onload = () => {
    // 2. 프로퍼티
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');
        let product = {
            // 'pName': '아이폰 12 미니',
            pName: '아이폰 12 미니',
            price: 800000,
            0: '배열 흉내',
            brand: '삼성',
            brand: '애플', // 마지막에 선언된 프로퍼티로 덮어쓴다.
            spec: ['OLED', '8 Inch', '화이트', '64GB']
        };

        let user = {
            'user name': '홍길동',
            'user-age': 34
        }

        console.log(product, user);

        // 객체의 속성에 접근하는 방법
        div1.innerHTML = `product['pName'] : ${product['pName']}<br>`;
        // div1.innerHTML += `product['0'] : ${product['0']}<br>`;
        div1.innerHTML += `product[0] : ${product[0]}<br>`;
        div1.innerHTML += `product['price'] : ${product['price']}<br>`;
        div1.innerHTML += `product['brand'] : ${product['brand']}<br>`;
        div1.innerHTML += `product['spec'] : ${product['spec']}<br>`;
        div1.innerHTML += `product['spec'][0] : ${product['spec'][0]}<br>`;
        div1.innerHTML += `product['spec'][2] : ${product['spec'][2]}<br><br>`;

        div1.innerHTML += `product.pName : ${product.pName}<br>`;
        // div1.innerHTML += `product.0 : ${product.0}<br>`;
        div1.innerHTML += `product.price : ${product.price}<br>`;
        div1.innerHTML += `product.brand : ${product.brand}<br>`;
        div1.innerHTML += `product.spec : ${product.spec}<br>`;
        div1.innerHTML += `product.spec[0] : ${product.spec[0]}<br>`;
        div1.innerHTML += `product.spec[2] : ${product.spec[2]}<br><br>`;

        div1.innerHTML += `user['user name'] : ${user['user name']}<br>`;
        div1.innerHTML += `user['user-age'] : ${user['user-age']}<br>`;
    });

    // 3. 메소드
    let btn2 = document.getElementById('btn2');

    // btn2.addEventListener('click', () => {
    btn2.addEventListener('click', function() {
        let name = '홍길동';

        // console.log(this);

        let dog = {
            name: '백구',
            kind: '진돗개',
            // eat: (food) => {
            //     console.log(this);
            // eat: function(food) {
            // ES6에서는 function 키워드를 생략할 수 있다.
            eat(food) {
                // 메소드에서 객체 내부의 속성에 접근하기 위해서는 this.속성명으로 작성해야 한다.
                console.log(`${this.name}이(가) ${food}을(를) 먹고 있네요~!`);
            }
        };

        dog.eat('닭가슴살');
    });

    // 4. 객체의 속성 추가 및 삭제
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        let student = {};

        // 객체에 속성 추가
        student.name = '홍길동';
        student['age'] = 34;

        // 객체에 메소드 추가
        student.whoAreYou = function() {
            return `저는 ${this.name}, ${this.age}세 입니다.`;
        };

        console.log(student);
        console.log(student.whoAreYou());

        // 속성이 존재하는지 확인하는 연산자
        console.log('age' in student);

        // 속성, 메소드를 지우는 연산자
        console.log(delete student.name);
        console.log(delete student['age']);
        console.log(delete student.whoAreYou);

        console.log(student);
        console.log('\n');

        // Spread 연산자 활용
        // 1) 객체의 복사
        // let user = {name: '홍길동', age: 34};
        // let userCopy = {...user};
        
        // 2) 객체를 복사하고 새로운 속성을 추가
        // let user = {name: '홍길동', age: 34};
        // let userCopy = {...user, major: '체육학과'}
        
        // 3) 객체를 복사하고 기존 속성 변경
        // let user = {name: '홍길동', age: 34};
        // let userCopy = {...user, age:24};

        // console.log(user);
        // console.log(userCopy);

        // 구조 분해 할당(Destructuring assignment)
        //   -배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있는 표현식이다.
        // 1) 배열의 구조 분해 할당
        // let array = [10, 20, 30];
        // let x = array[0];
        // let y = array[1];
        // let z = array[1];
        // let [x, y, z] = array;

        // console.log(array);
        // console.log(x, y, z);

        // 2) 객체의 구조 분해 할당
        // let user = {name: '홍길동', age: 34};
        // // let name = user.name;
        // // let age = user.age;
        // let {name, age} = user;

        // // let n = user.name;
        // // let a = user.age;
        // let {name:n, age:a} = user;

        // console.log(user);
        // console.log(name, age);
        // console.log(n, a);

        // 3) 함수의 매개변수로 활용
        let user = {name: '홍길동', age: 34};

        // print(user);
        // print(user.name, user.age);
        print(user);
    });

    // function print(user) {
    // function print(name, age, addr='없음') {
    function print({name, age, addr='없음'}) {
        // let name = user.name;
        // let age = user.age;
        // let addr = user.addr;

        console.log(name, age, addr);
    }

    // 5. 객체 배열
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', () => {
        let div2 = document.getElementById('div2');
        let student = {name: '김영희', eng: 85, math: 85};

        // 배열 선언 및 초기화
        let students = [
            {name:'홍길동', eng: 80, math: 70},
            {name:'이몽룡', eng: 90, math: 90},
            {name:'임꺽정', eng: 50, math: 50}
        ];

        // 배열에 요소를 추가
        students.push({name: '성춘향', eng: 80, math: 80});
        students.push(student);

        // 배열에 담겨있는 모든 객체에 메소드를 추가
        students.forEach((student) => {
            student.getSum = function() {
                return this.eng + this.math;
            }

            student.getAvg = function() {
                return this.getSum() / 2;
            }
        });

        // 모든 학생의 정보가 담긴 배열을 출력(이름, 영어 점수, 수학 점수, 총점, 평균)
        // for (let i = 0; i < students.length; i++) {
        //     div2.innerHTML += `이름: ${students[i].name}, 영어 점수: ${students[i].eng}, 수학 점수: ${students[i].math}, 총점: ${students[i].getSum()}, 평균: ${students[i].getAvg()}<br><br>`;
        // }
    });

    // 6. 생성자 함수
    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click', () => {
        let div3 = document.getElementById('div3');
        let student = new Student('홍길동', 80, 80);
        let students = [];

        students.push(student);
        students.push(new Student('이몽룡', 70, 90));
        students.push(new Student('임꺽정', 60, 75));

        console.log(students);
        // instanceof는 해당 객체가 어떤 생성자 함수로 생성되었는지 확인하는 연산자이다.
        console.log(student instanceof Student);
        console.log(students instanceof Student);

        students.forEach((student) => {
            div3.innerHTML
            += `이름: ${student.name}, 총점: ${student.getSum()}, 평균: ${student.getAvg()}<br>`;
        });
        
    });

    function Student(name, eng, math) {
        // 속성 정의
        this.name = name;
        this.eng = eng;
        this.math = math;

        // 메소드 정의
        // this.getSum = function() {
        //     return this.eng + this.math;
        // }

        // this.getAvg = function() {
        //     return this.getSum() / 2;
        // }
    }

    // 프로토타입(prototype)
    // 모든 객체들이 메소드와 속성들을 상속 받기 위해 프로토타일 객체를 가진다.
    // 프로토탕비 객체는 어떤 객체의 상위 객체의 역할을 하는 객체로 공유 속성과 메소드를 제공한다.
    // 프로토타입 객체는 생성자 함수와 연결되어 있다.
    Student.prototype.getSum = function() {
        return this.eng + this.math;
    }

    Student.prototype.getAvg = function ()  {
        return this.getSum() / 2;
    }

    // ES6 이후에는 아래와 같이 class 기반으로 작성이 가능하다.
    // class Student {
    //     constructor(name, eng, math) {
    //         this.name = name;
    //         this.eng = eng;
    //         this.math = math;
    //     }

    //     getSum() {
    //         return this.eng + this.math;
    //     }

    //     getAvg() {
    //         return this.getSum() / 2;
    //     }
    // }

    // 7. 캡술화
    let btn6 = document.getElementById('btn6');

    btn6.addEventListener('click', () => {
        let user = new User('홍길동', 34);

        console.log(user);
        // console.log(user.name);
        console.log(user.getName());
        console.log(user.getAge());
    });

    function User(n, a) {
        let name = n;
        let age = a;

        this.getName = function() {
            return name;
        }

        this.getAge = function() {
            return age;
        }
    }

    // 8. 내장 객체
    // 1) Date 객체
    let btn7 = document.getElementById('btn7');

    btn7.addEventListener('click', () => {
        let div4 = document.getElementById('div4');

        // Date 객체를 생성하는 방법
        let now = new Date();
        let date1 = new Date(1000);
        let date2 = new Date('2024-08-08');
        let date3 = new Date('2024-08-08T20:30:58');
        let date4 = new Date('2024/08/08 20:30:58');
        let date5 = new Date(2024, 8, 8, 12, 30, 30); // 월은 0부터 시작

        div4.innerHTML = `now: ${now}<br>`;
        div4.innerHTML += `date1: ${date1}<br>`;
        div4.innerHTML += `date2: ${date2}<br>`;
        div4.innerHTML += `date3: ${date3}<br>`;
        div4.innerHTML += `date3: ${date3}<br>`;
        div4.innerHTML += `date4: ${date4}<br>`;
        div4.innerHTML += `date5: ${date5}<br><br>`;

        // Date 객체의 메소드 호출
        div4.innerHTML += `now.getYear(): ${now.getYear()}<br>`;
        div4.innerHTML += `now.getFullYear(): ${now.getFullYear()}<br>`;
        div4.innerHTML += `now.getMonth(): ${now.getMonth() + 1}<br>`; // 월은 0부터 시작
        div4.innerHTML += `now.getDate(): ${now.getDate()}<br>`;
        div4.innerHTML += `now.getDay(): ${now.getDay()}<br>`; // 0: 일요일, ...., 6: 토요일
        div4.innerHTML += `now.getHours(): ${now.getHours()}<br>`;
        div4.innerHTML += `now.getMinutes(): ${now.getMinutes()}<br>`;
        div4.innerHTML += `now.getSeconds(): ${now.getSeconds()}<br>`;
        div4.innerHTML += `now.getMilliseconds(): ${now.getMilliseconds()}<br>`;
        // 1970년 1월 1일 00시를 기준으로 현재 시간에 대한 밀리 세컨드 값을 반환한다.
        div4.innerHTML += `now.getTime(): ${now.getTime()}<br>`;
        div4.innerHTML += `now.toDateString(): ${now.toDateString()}<br>`;
        div4.innerHTML += `now.toTimeString(): ${now.toTimeString()}<br>`;
        div4.innerHTML += `now.toUTCString(): ${now.toUTCString()}<br>`;
        div4.innerHTML += `now.toISOString(): ${now.toISOString()}<br>`;
        div4.innerHTML += `now.toLocaleString(): ${now.toLocaleString()}<br>`;
        div4.innerHTML += `now.toLocaleDateString(): ${now.toLocaleDateString()}<br>`;
        div4.innerHTML += `now.toLocaleTimeString(): ${now.toLocaleTimeString()}<br>`;
    });

    // 2) JSON 객체
    let btn8 = document.getElementById('btn8');

    btn8.addEventListener('click', () => {
        // JSON.parse()
        //  - JSON 문자열을 자바스크립트 객체로 변환하는 메소드이다.
        let user = JSON.parse('{"no": 1, "name": "홍길동", "age": 34}');

        console.log('{"no": 1, "name": "홍길동", "age": 34}');
        console.log(user);

        // JSON.stringify()
        //  - 자바스크립트 객체를 JSON 문자열로 변환하는 메소드이다.
        let str = JSON.stringify(user);

        console.log(str);
    });
}