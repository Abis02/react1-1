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


※ 훅
    -훅이란 컴포넌트에서는 생성자에서 state를 정의하고, setState() 함수를 통해 state를 업데이트합니다.

    -예전에 사용했던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없다

    -함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅이다.

    -함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되었다

    -Hook이란 'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'를 의미한다
    
    -훅의 이름은 모두 'use'로 작한다

    -사용자의 정의 훅을 만들 수 없으며, 이 경우에 이름은 자유롭게 할 수 있으나 'use'로 시작할 것을 권장한다

## 2024-05-01

※ useState
    -useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook이다.
    
    -다음 예제는 클릭할 때 마다 카운트가 증가하는 함수형 컴포넌트다.

※ useEffect
    -useState와 함께 가장 많이 사용하는 Hook이다.

    -이 함수는 사이드 이펙트를 수행하기 위한 것이다.

    -영어로 side effect는 부작용을 의미한다. 일반적으로 프로그래밍에서 사이트 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말한다.

    -하지만 리액트에서는 효과 또는 영향을 뜻하는 effect의 의미에 가깝다.

    -예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미한다.
    
    -이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 때문이다.
    렌더링이 끝난 이후에 실행되어야 하는 작업들이다.

    -클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공한다.

    + 저자는 useEffect가 side effect가 아니라 effect에 가깝다고 설명하고 있지만, 이것은 부작용의 의미를 잘못 해석해서 생긴 오해이다. 부작용의 부를 不라고 생각했기 떄문.


    + 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말한다.
    + 예를 들면 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우들이다.


    + useEffect()함수는 다음과 같이 사용한다
    + 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어간다.
    useEffect(이펙트 함수, 의존성 배열);

    + 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행된다.

    + 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행된다.
    + 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 된다. 이 경우 props나 state에 있는 어떤 값에도 의존하지 않기 때문에
    여러 번 실행되지 않는다.

    
※ useMemo

    -useMemo() 혹은 Memoized value를 리턴하는 훅입니다.
    
    -이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 없다.

    -이 훅은 렌더링이 일어나는 동안 실행된다

    -따라서 렌더링이 일어나는 동안 실행되서는 안될 작업을 넣으면 안된다

    -예를 들면 useEffect에서 실행되어야 할 사이트 이펙트 같은 것이다.

    const memoizedValue = useMemo(
        () => {
            //연산량이 높은 작업을 수행하여 결과를 반환
            return computeExpensiveValue(의존성 변수1, 의존성 변수2);
        },
        [의존성 변수1, 의존성 변수2]
    );


※ useCallback

    -useCallback() 혹은 useMemo()와 유사한 역할을 한다
    -차이점은 값이 아닌 함수를 반환한다는 점이다.
    -의존성 배열을 파라미터로 받는 것은 useMemo와 동일하다
    -파라미터로 받은 함수를 콜백이라고 부른다
    -useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환한다

    const memoizedCallback = useCallback(
        () => {
            doSomething(의존성 변수1, 의존성 변수2);
          },
          [의존성 변수1, 의존성 변수2]
    );


※ useRef

    -useRef() 훅은 레퍼런스를 사용하기 위한 훅이다.

    -레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미한다.

    -useRef() 훅은 바로 이 레퍼런스 객체를 반환한다.

    -레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미한다.

    const refContainer = useRef(초깃값);

    -이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지된다.

    -즉, 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미다.


※ 훅의 규칙

    -첫 번째 규칙은 무조건 최상의 레벨에서만 호출해야 한다는 것이다. 여기서는 최상위 컴포넌트
    의 최상위 레벨을 의미한다.

    -따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 된다.

    -이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때 마다 같은 순서로 호출되어야 한다.

    -페이지 224의 코드는 조건에 따라 호출됨으로 




## 0529

File input 태그

    - File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 된다.


Input Null Value
    - 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없습니다.
    
    - 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 됩니다.

    

## 0605

합성

    - 합성(Composition)은 '여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것'입니다.
    
    - 조합 방법에 따라 합성의 사용 기믹은 다음과 같이 나눌 수 있습니다.


Containment (담다, 포함하다, 격리하다)

    - 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법이다.

    - 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있다.

    - 범용적인 '박스' 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있다.

    - 이런 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋다.

    - 이때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children속성을 사용한다.



    - 리액트에서는 props.children을 통해 하위 컴포넌트를 하나로 모아서 제공해 준다.


## 2024-06-11

Specialization (특수화, 전문화)

    - 웰컴다이얼로그는 다이얼로그의 특별한 케이스입니다.

    - 범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 합니다.

    - 객체지향 언어에서는 상속을 사용하여 특수화를 구현합니다.

    - 리액트에서는 합성을 사용하여 특수화를 구현합니다.

    - 다음 예와 같이 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수한 목적으로 사용하는 합성 방식입니다.

    function Dialog(props) {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {props.title}
                </h1>
                <p className="Dialog-message">
                    {props.message}
                </p>
                </FancyBorder>
        );
    }

    function WelcomeDialog(props) {
        return (
            <Dialog
                title="어서오세요"
                message=:"우리 사이트에서 방문하신 것을 환영합니다"
                />
        );
    }


    Containment와 Specialization을 같이 사용하기.

        - Containment를 위해서 props.children을 사용하고, Specialization을 위해 직접 정의한 props를 사용하면 됩니다.

        - Dialog컴포넌트는 이전의 것과 비슷한데 Containment를 위해 끝부분에 props.children을 추가했습니다.

        - Dialog를 사용하는 SignUpDialog는 Specialization을 위해 props인 title, message에 값을 넣어주고 있고,
        입력을 받기 위해 <input>과 <button>을 사용합니다.

        - 이러한 형태로 Containment와 Specialization을 동시에 사용할 수 있습니다.


    상속에 대해 알아보기

        - 합성과 대비되는 개념으로 상속(inheritance)이 있습니다.

        - 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념입니다.

        - 하지만 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성합니다


    
    컨텍스트란 무엇인가?

        - 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단방향으로 전달되었습니다.

        - 컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 '컴포넌트 트리를 통해
        곧바로 컴포넌트에 전달하는 새로운 방식'을 제공합니다

        - 이 것을 통해 어떤 컴포넌트라도 쉽게 데이터에 접근할 수 있습니다.

        - 컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 그림처럼 데이터를 필요로 하는 컴포넌트에 
        곧바로 데이터를 전달할 수 있습니다.


    컨텍스트를 사용하기 전에 고려할 점

        - 컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우에 주로 사용합니다.

        - 하지만 무조건 컨텍스트를 사용하는 것이 좋은 것이 아닙니다.

        - 왜냐하면 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 때문입니다.

        - 따라서 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니면 props를 통해 데이터를 전달하는 컴포넌트 합성 방법이
        더 적합 합니다

        - 페이지 395의 예제처럼 실제 user와 avatarSize를 사용하는 것은 Avatar 컴포넌트 뿐인데 여러 단계에 걸쳐 props를 전달하고 있습니다.

        - 이런 경우 컨텍스트를 사용하지 않고 문제를 해결할 수 있는 방법은 Avatar 컴포넌트를 변수에 저장하여 직접 넘겨주는 것입니다.

        - 이렇게 하면 중간 단계의 컴포넌트들은 user와 avatarSize에 대해 몰라도 됩니다.

        - 페이지386의 예제를 참고하세요.

        - 하지만 페이지 396의 에제가 모든 상황에서 좋은 것은 아닙니다.

        - 데이터가 많아질수록 상위 컴포넌트가 점점 더 복잡해지기 때문입니다.

        - 이런 경우 하위 컴포넌트를 여러 개의 변수로 나눠서 전달하면 됩니다.

        - 페이지 397의 예제를 참고하세요


        - 하지만 어떤 경우에는 하나의 데이터에 다양한 레벨에 있는 중첩된 컴포넌트들의 접근이 필요할 수 있습니다.

        - 이런 경우라면 컨텍스트가 유리합니다.

        - 컨텍스트는 해당 데이터와 데이터의 변경 사항을 모두 하위 컴포넌트들에게 broadcast해주기 때문입니다.

        - 컨텍스트를 사용하기에 적합한 데이터의 대표적인 예로는 '지역 정보', 'UI테마' 그리고 '캐싱된 데이터' 등이 있습니다.



Context.Provider

    - Context.Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 됩니다.

            <MyContext.Provider value={/* some value */}>

    - Provider 컴포넌트에는 value라는 prop이 있고, 이것은 Provider 컴포넌트 하위에 있는 컴포넌트에게 전달됩니다.

    - 하위 컴포넌트를 consumer 컴포넌트라고 부릅니다.


Class.contextType

    - Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용합니다.

    - Class 컴포넌트는 더 이상 사용하지 않으므로 참고만 합니다

Context.Consumer

    - 함수형 컴포넌트에서 Context.Consumer를 사용하여 컨텍스트를 구독할 수 있습니다.

        <MyContext.Consumer>
            {value => /* 컨텍스트의 값에 따라서 컴포넌트들을 렌더링 */}
        </MyContext.Consumer>

Context.displayName

    - 컨텍스트 객체는 displayName이라는 문자열 속성을 갖습니다.

    - 크롬의 리액트 개발자 도구에서는 컨텍스트의 Provider나 Consumer를 표시할 때 displayName을 함께 표시해 줍니다.


    
