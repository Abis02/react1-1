# 백강민 202230115

## 2024-03-13 강의 내용
### GitHub 사용법


## 2024-03-20 강의 내용
※리액트의 장점 

1. 빠른 업데이트와 랜더링 속도

    - 이 것을 가능하게 하는 것이 바로 버츄얼 돔(Virtual DOM)
    - DOM이란, XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제하게 돕는 인터페이스. 
    - Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법
    - DOM은 동기식, Virtual DOM은 비동기식 방법으로 랜더링을 한다.
   동기식(Synchronous) VS 비동기식(Asynchronous)
   동기와 비동기를 나누는 가장 큰 차이점을 어떻게 실행 순서를 가지는 지에 있다.

   Syncronous 동기는 요청을 보낸 후 해당 요청의 응답을 받아야 다음 동작을 실행하는 방식을,
   Asynchronous 비동기는 요청을 보낸 후 응답과 관계없이 다음 동작을 실행할 수 있는 방식을 의미한다.

2. 컴포넌트 기반 구조

    - 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
    - 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
    - 컴포넌트를 조합해서 웹사이트를 개발
    - 재사용성이 뛰어남



3. 재사용성

    - 반복적인 작업을 줄여주기 때문에 생산성을 높여줌
    - 유지보수가 용이함
    - 재사용이 가능 하려면 의존성이 없어야 함



※리액트의 단점

1. 방대한 학습량
    - 자바스크립트를 공부한 경우 빠르게 학습할 수 있다

2. 높은 상태 관리 복잡도
    - state, component life cycle 등의 개념이 있지만 그리 어렵지 않음

## 2024-03-27 강의 내용

3.1
※ JSX란?
    자바스크립트에 XML을 추가한 확장 문법입니다. 
※ JSX의 역할
    JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.
    React가 createElement 함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.
    만일 JS 작업할 경우 직접 createElement 함수를 사용해야 합니다.
    앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX는 가독성을 높여주는 역할을 합니다.

※ JSX의 장점
    코드가 간결해 집니다.
    가독성이 향상 됩니다.
    Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다. 
    
※ JSX의 사용법
    모든 자바스크립트 문법을 지원합니다.
    자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
    아래 코드의 2번 라인처럼 섞어서 사용하는 것입니다.
    만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.
    만일 태그의 속성값을 넣고 싶을 때는 다음과 같이 합니다.
    : 큰 다음표 사이에 문자열을 넣거나
    const element = <div tabIndex="0"> </div>;
    const element = <img src={user.avatarUrl}></img>;

※ 엘리먼트의 정리
    엘리먼트는 리액트 앱을 구성하는 요소를 의미
    공식적인 입장 - "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들" 이라고 설명하고 있음.
    웹사이트의 경우 DOM 엘리먼트이며 HTML 요소를 의미


※ 리액트 엘리먼트와 DOM엘리먼트의 차이
    리액트 엘리먼트는 Virtual DOM의 형태
    DOM 엘리먼트는 페이지의 모든 정보 보유(무거움)
    리액트 엘리먼트는 변화한 부분만 보유(가벼움)

※ 엘리먼트의 생김새
    리액트 엘리먼트는 자바스크립트 객체의 형태로 존재
    컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체
    마음대로 변경할 수 없는 불변성 보유

자바스크립트 객체를 만드는 역할을 하는 함수 ( createElement() )
    첫 번째 매개변수 type. 이 곳에 태그가 들어가면 그대로 표현하고, 리액트 컴포넌트가 들어가면 이 것을 분해해 결국 태그로 만들게 됨
    두 번째 매개변수인 props는 속성을 나타냄
    세 번째 매개변수는 children. 자식 태그라고 이해하면 된다.

    {
        type: Button,
        props: {
            color: 'green'
            children: 'Hello, element';
        }
    }

※ 엘리먼트의 특징
    리액트 엘리먼트의 가장 큰 특징은 불변성
    한 번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없다.

    내용이 바뀌면?
        컴포넌트를 통해 새로운 엘리먼트를 생성
        그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꿈
        교체 작업을 위해 Virtual DOM을 사용.

※ 엘리먼트 렌더링하기
    ※ Root DOM node
        다음 html 코드는 id값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드
        div 태그 안에 리액트 엘리먼트가 렌더링되면 이 것을 Root DOM node라고 함
        <div id="root"></div>

        엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요

        const element = <h1>안녕, 리액트!</h1>
        ReactDOM.render(element, document.getElementById('root));

        이때 render()함수를 사용하게 됨
        이 함수의 첫 번째 파라메터 출력할 리액트 엘리먼트이고, 두 번째 파라메터는 출력할 타겟을 나타냄
        즉 리액트 렌더링 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정임.


※ 렌더링된 엘리먼트 업데이트
    tick()함수 정의
    현재 시간을 포함한 element를 생성해서 root div에 렌더링해줌
    라인12에 보면 setInterval()함수를 이용해서 위에서 정의한 tick()를 1초에 한번씩 호출함
    1초에 한번씩 element를 새로 만들고 그것을 교체하는 것임
    실행 후 크롬 개발자도구에서 확인해보면 시간 부분만 업데이트 되는 것을 확인할 수 있음

        function tick() {
            const element = (
                <div>
                    <h1>안녕, 리액트!</h1>
                    <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
                </div>
            );

            ReactDOM.render(element, document.getElementById('root'));
        }

        setInterval(tick, 1000);


## 2024-04-03 강의 내용

※ Props의 개념
    props는 prop(property : 속성, 특성)의 준말
    props가 바로 컴포넌트의 속성
    컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됨.
    props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체
    에어비엔비의 예도 마찬가지.

※ Props의 특징
    읽기 전용이다. 변경할 수 없다는 의미.
    속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달해야 한다.

※ Pure 함수 vs Impure 함수
    Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수이다.
    Impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수이다.

※ Props 사용법
    JSX에서는 key-value쌍으로 props를 구성한다.

    function App(props) {
        return {
            <Profile
                name="소플"
                introduction="안녕하세요, 소플입니다"
                viewCount={1500}
                
                />
        };
    }
    
    App 컴포넌트에서 props를 인자로 받아
    내부의 Profile 컴포넌트로 전달해서 name, introduction, viewCount에 각각 속성을 할당하는,
    이 때 전달되는 props는 다음과 같은 자바스크립트 객체다

    {
        name: "소플"
        introduction: "안녕하세여, 소플입니다.",
        viewCount: 1500
    }

※ 컴포넌트의 종류
    리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용
    이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용함
    예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기에
    클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 함.

1. 함수형 컴포넌트
    Welcome컴포넌트는 props를 받아, 받은 props중 name키의 값을 "안녕,"뒤에 넣어 반환

2. 클래스형 컴포넌트
    Welcome컴포넌트는 React.Component class로 부터 상속을 받아 선언함

※ 컴포넌트 이름 짓기
    이름은 항상 대문자로 시작
    리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문임. html tag.
    *컴포넌트 파일 이름과 컴포넌트 이름은 같게 해야함

※ 컴포넌트의 렌더링
    렌더링의 과정은 다음 코드와 같다.

    function Welcome(props) {
        return <h1>안녕, {props.name}</h1>
    }

    const element = <Welcome name="인제" />
    ReactDOM.render(
        element,
        document.getElementById('root')
    );


※ 컴포넌트 합성
    컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
    리액트에서 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현
    props값을 다르게 해서 Welcome 컴포넌트를 여러 번 사용한다.

※ 컴포넌트 추출
    복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있다.
    큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것.
    * 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋다

    Comment는 댓글 표시 컴포넌트
    내부에는 이미지, 이름, 댓글과 작성일이 포함되어 있다.
    첫 번째로 이미지 부분을 Avatar 컴포넌트로 출한다.

    function Avatar(props) {
        return (
        <img className="avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
            />
        );
    }

    두 번째로 사용자 정보 부분을 추출

    function UserInfo(props) {
        return (
            <div className="user-info">
            <Avatar user={props.user } />
            <div className="user-info-name">
                {props.user.name}
                </div>        
            </div>
        );
    }

    추출 후 다시 결합한 UserInfo를 Comment 컴포넌트 반영하면 다음과 같은 모습이 된다
    처음에 비해서 가독성이 높아진 것을 확인 가능

    function Comment(props) {
        return (
            <div className="comment">
                <UserInfo user={props.author} />
                <div className="comment-text">
                    {props.text}
                </div>
                <div className="comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        );
    }


※ state
    State란?
        리액트 컴포넌트의 상태를 의미
        상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미
        정확히는 컴포넌트의 변경가능한 데이터를 의미
        State가 변하면 다시 렌더링 되기 때문에 렌더링과 관련된 값만 state에 포함

    state의 특징
        리액트만의 특별한 형태가 아닌 자바 스크립트 객체

        예의 LikeButton은 class 컴포넌트
        constructor는 생성자이고 그 안에 있는
        this.state가 현 컴포넌트의 state

        함수형에서는 useState() 사용

        state는 변경은 가능하다고 했지만 직접 수정해서는 안 됨
        불가능 하다고 생각하는 것이 좋다
        state를 변경하고자 할 때는 setstate()함수를 사용

        //잘못된 예
        this.state = {
            name: 'Inje'
        };

        //옳은 예
        this.setState({
            name: 'Inje'
        });


※ 생명주기
    생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내느 것
    constructor가 실행 되면서 컴포넌트가 생성
    생성 직후 componentDidMount() 함수 호출
    컴포넌트가 소멸하기 전까지 여러 번 렌더링
    렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되며 이루어짐
    그리고 렌더링이 끝나면 componentDidUpdate() 함수가 호출
    컴포넌트가 언마운드 되면 componentWillunMoUNT()함수가 호출