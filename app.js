// 1. app.js 맨 상단의 고정 크기 변수를 아래 코드로 교체해줘
const container = document.getElementById('konva-holder');

// 현재 화면(툴바 너비)에 맞춘 가로 크기 계산
const canvasWidth = container.offsetWidth; 
// 16:9 비율을 유지하며 세로 크기 계산 (576 / 1024 = 0.5625)
const canvasHeight = canvasWidth * 0.5625;

// 📦 통합 에셋 데이터베이스
const r6Data = [
    // 🛡️ 수비팀 (Defenders)
    { name: 'Smoke', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Smoke.png' },
    { name: 'Mute', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Mute.png' },
    { name: 'Castle', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Castle.png' },
    { name: 'Pulse', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Pulse.png' },
    { name: 'Doc', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Doc.png' },
    { name: 'Rook', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Rook.png' },
    { name: 'Kapkan', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Kapkan.png' },
    { name: 'Tachanka', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Tachanka.png' },
    { name: 'Ja ger', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Jager.png' },
    { name: 'Bandit', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Bandit.png' },

    // 2. 1년차 ~ 5년차 대원
    { name: 'Frost', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Frost.png' },
    { name: 'Valkyrie', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Valkyrie.png' },
    { name: 'Caveira', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Caveira.png' },
    { name: 'Echo', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Echo.png' },
    { name: 'Mira', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Mira.png' },
    { name: 'Lesion', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Lesion.png' },
    { name: 'Ela', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Ela.png' },
    { name: 'Vigil', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Vigil.png' },
    { name: 'Maestro', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Maestro.png' },
    { name: 'Alibi', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Alibi.png' },
    { name: 'Clash', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Clash.png' },
    { name: 'Kaid', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Kaid.png' },
    { name: 'Mozzie', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Mozzie.png' },
    { name: 'Warden', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Warden.png' },
    { name: 'Goyo', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Goyo.png' },
    { name: 'Wamai', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Wamai.png' },
    { name: 'Oryx', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Oryx.png' },
    { name: 'Melusi', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Melusi.png' },
    { name: 'Aruni', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Aruni.png' },

    // 3. 6년차 ~ 현재
    { name: 'Thunderbird', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Thunderbird.png' },
    { name: 'Thorn', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Thorn.png' },
    { name: 'Azami', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Azami.png' },
    { name: 'Solis', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Solis.png' },
    { name: 'Fenrir', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Fenrir.png' },
    { name: 'Tubarão', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Tubarão.png' },
    { name: 'Sentry', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Sentry.png' },
    { name: 'Skopós', type: 'Defender', img: 'Gadgets/Operator Icons/defence/Skopos.png' },

        // ⚔️ 공격팀 (Attackers)
        { name: 'Sledge', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Sledge.png' },
    { name: 'Thatcher', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Thatcher.png' },
    { name: 'Ash', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Ash.png' },
    { name: 'Thermite', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Thermite.png' },
    { name: 'Twitch', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Twitch.png' },
    { name: 'Montagne', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Montagne.png' },
    { name: 'Glaz', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Glaz.png' },
    { name: 'Fuze', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Fuze.png' },
    { name: 'Blitz', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Blitz.png' },
    { name: 'IQ', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/IQ.png' },

    // 2. 1년차 ~ 5년차 대원
    { name: 'Buck', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Buck.png' },
    { name: 'Blackbeard', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Blackbeard.png' },
    { name: 'Capitão', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Capitao.png' },
    { name: 'Hibana', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Hibana.png' },
    { name: 'Jackal', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Jackal.png' },
    { name: 'Ying', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Ying.png' },
    { name: 'Zofia', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Zofia.png' },
    { name: 'Dokkaebi', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Dokkaebi.png' },
    { name: 'Lion', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Lion.png' },
    { name: 'Finka', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Finka.png' },
    { name: 'Maverick', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Maverick.png' },
    { name: 'Nomad', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Nomad.png' },
    { name: 'Gridlock', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Gridlock.png' },
    { name: 'Nokk', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Nokk.png' },
    { name: 'Amaru', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Amaru.png' },
    { name: 'Kali', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Kali.png' },
    { name: 'Iana', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Iana.png' },
    { name: 'Ace', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Ace.png' },
    { name: 'Zero', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Zero.png' },

    // 3. 6년차 ~ 현재
    { name: 'Flores', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Flores.png' },
    { name: 'Osa', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Osa.png' },
    { name: 'Sens', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Sens.png' },
    { name: 'Grim', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Grim.png' },
    { name: 'Brava', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Brava.png' },
    { name: 'Ram', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Ram.png' },
    { name: 'Deimos', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Deimos.png' },
    { name: 'Striker', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Striker.png' },

    // 🎒 가젯 (Gadgets)
    { name: 'Bulletproof Camera', type: 'Gadget', img: 'Gadgets/Defence_Util/Camera-White.png' },
    { name: 'Impact Grenade', type: 'Gadget', img: 'Gadgets/Defence_Util/Impact-White.png' },
    { name: 'Observation Blocker', type: 'Gadget', img: 'Gadgets/Defence_Util/Observation-Blocker-White.png' },
    { name: 'Reinforcement', type: 'Gadget', img: 'Gadgets/Defence_Util/Reinforncment-White.png' },
    { name: 'Deployable Shield', type: 'Gadget', img: 'Gadgets/Defence_Util/Shield-Full-White.png' },
    { name: 'Barbed Wire', type: 'Gadget', img: 'Gadgets/Defence_Util/Barbedwire-White.png' },
    { name: 'Barricade', type: 'Gadget', img: 'Gadgets/Defence_Util/Barricade-White.png' },
    { name: 'Proximity Alarm', type: 'Gadget', img: 'Gadgets/Defence_Util/Beeper-White.png' },
    { name: 'Bulletproof Shield', type: 'Gadget', img: 'Gadgets/Defence_Util/Bullet-Proof-White.png' },
    { name: 'Nitro Cell', type: 'Gadget', img: 'Gadgets/Defence_Util/C4-White.png' },
    { name: 'Line', type: 'Gadget', img: 'Gadgets/Defence_Util/line.png' },
];

let selectedGadget = null; // 현재 마우스로 클릭해 선택한 가젯을 담을 변수

// ★ 사용자의 모든 추가/그리기 행동을 기록할 배열
const historyStack = [];

const stage = new Konva.Stage({
    container: 'konva-holder', // index.html의 id와 매치
    width: canvasWidth,
    height: canvasHeight
});

const layer = new Konva.Layer();
stage.add(layer);

// 🎨 1. 그리기 전용 투명 레이어 추가 (배경 보호용)
const drawingLayer = new Konva.Layer();
stage.add(drawingLayer);

const transformer = new Konva.Transformer({
    nodes: [],
    keepRatio: true,
    enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    borderStroke: '#ffcc00', // 눈에 잘 띄는 노란색
    anchorStroke: '#ffcc00',
    anchorFill: '#ffffff',
    anchorSize: 8,
    borderDash: [3, 3]
});
layer.add(transformer);

// 빈 화면(배경) 클릭 시 선택 해제 및 조절기 끄기
stage.on('click tap', function (e) {
    // 클릭한 대상이 캔버스 자체이거나 맵 배경 이미지일 경우
    if (e.target === stage || e.target === mapBackground) {
        selectedGadget = null;
        transformer.nodes([]);
        layer.draw();
    }
});

// 🕹️ 2. 현재 선택된 도구 모드를 기억할 변수들
let currentMode = 'select'; // 기본값은 가젯을 만지는 'select' 모드
let isDrawing = false;
let currentShape = null;
let copiedGadget = null; // 복사된 가젯을 기억할 변수

// 캔버스 배경 이미지를 저장해둘 변수 (지도를 바꿀 때 이전 지도를 지우기 위함)
let mapBackground = null;

// 2. 맵 전환 함수 (사이드바 버튼 클릭 시 실행)
function loadMap(mapName, floor) {
    // [A] 버튼 하이라이트(active 클래스) 시각적 전환 처리
    const buttons = document.querySelectorAll('#panel-map .menu-btn');
    buttons.forEach(btn => {
        const clickAttr = btn.getAttribute('onclick') || '';
        if (clickAttr.includes(`'${mapName}'`) && clickAttr.includes(`'${floor}'`)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // ★ [추가된 핵심 기능] 맵이 바뀔 때 캔버스 위의 모든 요소 싹 비우기 (자동 초기화)
    // 1. 조절창(트랜스포머)이 켜져 있다면 끄기
    transformer.nodes([]);

    selectedGadget = null;

    // 2. 화면에 있는 모든 가젯 찾아서 파괴
    stage.find('.gadget-item').forEach(node => node.destroy());

    drawingLayer.destroyChildren();
    drawingLayer.draw(); // 지운 상태로 도화지 새로고침

    // [B] 이미지 경로 설정 
    const imagePath = `assets/${mapName}/${floor}.jpg`; 

    // [C] 자바스크립트로 이미지 로드 시작
    const imageObj = new Image();
    imageObj.src = imagePath;

    // 이미지가 정상적으로 다 불러와졌을 때 실행되는 함수
    imageObj.onload = function() {
        // 기존에 캔버스에 그려져 있던 배경 지도가 있다면 깨끗하게 제거
        if (mapBackground) {
            mapBackground.destroy();
        }

        // Konva용 이미지 객체 생성
        mapBackground = new Konva.Image({
            x: 0,
            y: 0,
            image: imageObj,
            width: canvasWidth,  // 캔버스 가로 크기에 맞춤
            height: canvasHeight // 캔버스 세로 크기에 맞춤
        });

        // 배경 이미지를 레이어의 가장 뒤(바닥)로 보냄
        layer.add(mapBackground);
        mapBackground.moveToBottom();

        // 변경된 레이어를 화면에 다시 그려줌
        layer.draw();
        console.log(`${mapName} 맵의 ${floor} 청사진 로드 및 캔버스 초기화 완료!`);
    };

    // 이미지 로드에 실패했을 때 가이드 메시지 출력
    imageObj.onerror = function() {
        console.error(`이미지를 찾을 수 없습니다: ${imagePath}`);
        alert(`${mapName} 맵의 ${floor} 이미지를 찾을 수 없어!\nassets 폴더 안의 실제 파일명과 확장자를 확인해봐.`);
    };
}

// 3. 진짜 이미지를 사용하는 가젯 생성 및 드래그 함수
// 3. 가젯/오퍼 소환 함수 (폴더 경로를 포함하도록 수정)
function spawnGadget(pathAndName,customX, customY) {
    // pathAndName 예시: 'Operator Icons/attacker/Ace.png'
    const imagePath = `assets/${pathAndName}`; 

    const imageObj = new Image();
    imageObj.src = imagePath;

    const startX = (customX !== undefined && customX !== null) ? customX : 100;
    const startY = (customY !== undefined && customY !== null) ? customY : 100;

    imageObj.onload = function() {
        const gadget = new Konva.Image({
            x: startX,
            y: startY,
            image: imageObj,
            width: 50,
            height: 50,
            draggable: currentMode === 'select', 
            name: 'gadget-item'
        });

        // 클릭 시 선택 및 조절 상자 표시
        gadget.on('click tap', function() {
            selectedGadget = gadget;
            transformer.nodes([gadget]);
            layer.draw();
        });

        layer.add(gadget);
        // [Ctrl+Z용 기록]
        historyStack.push(gadget);
        
        layer.draw();
    };

    imageObj.onerror = function() {
        console.error("이미지를 로드할 수 없습니다:", imagePath);
        alert("이미지 경로를 확인해줘! 현재 경로: " + imagePath);
    };
}

// 4. 기능 버튼 이벤트 리스너 설정
// [선택 가젯 삭제] 버튼 기능
document.getElementById('delete-btn').addEventListener('click', () => {
    if (selectedGadget) {
        selectedGadget.destroy(); // 1. 캔버스에서 가젯 객체 제거
        layer.draw();             // 2. 레이어 다시 그리기
        selectedGadget = null;    // 3. 변수 비우기
        console.log("선택한 가젯 삭제 완료");
    } else {
        alert('삭제할 가젯을 먼저 마우스로 클릭해 줘!');
    }
});

// [전체 초기화] 버튼 기능 (배경 지도는 남기고 가젯만 싹 지우기)
// [전체 초기화] 버튼 기능
document.getElementById('reset-btn').addEventListener('click', () => {
    // 네가 만든 훌륭한 안전장치 (알림창) 유지!
    if (confirm('배치된 모든 가젯과 그린 그림들을 싹 다 초기화할까?')) {
        
        // 1. 조절기(테두리)가 켜져 있다면 선택 해제
        transformer.nodes([]);
        selectedGadget = null;

        // 2. 가젯 파괴 (기존 기능)
        const gadgets = stage.find('.gadget-item');
        gadgets.forEach(gadget => gadget.destroy());
        
        drawingLayer.destroyChildren();

        // 4. 화면 새로고침 (두 레이어 모두 업데이트)
        layer.draw(); 
        drawingLayer.draw();
        console.log("모든 가젯 및 그리기 싹쓸이 초기화 완료!");
    }
});

// 5. 페이지가 처음 열릴 때 기본값으로 'Coastline 1F'를 먼저 띄워주기
window.onload = function() {
    loadMap('Coastline', '1F');
};

// ==========================================
// 🎨 그리기, 화살표, 지우기 툴바 로직 
// ==========================================

const drawBtn = document.getElementById('draw-btn');
const arrowBtn = document.getElementById('arrow-btn');
const eraserBtn = document.getElementById('eraser-btn');
const colorPicker = document.getElementById('color-picker');
const brushSize = document.getElementById('brush-size');

// 버튼 색상을 초기화하고 가젯 드래그 상태를 관리하는 함수
function updateToolMode(newMode, activeBtn) {
    // 1. 모드 변경
    currentMode = currentMode === newMode ? 'select' : newMode;

    // ★ 추가된 로직: 선택 모드(select)가 아닌 다른 툴을 집어 들면 가젯 선택 해제!
    if (currentMode !== 'select') {
        transformer.nodes([]);
        selectedGadget = null;
        layer.draw();
    }
    
    // 2. 모든 그리기 툴 버튼에서 'active' 클래스 제거 (깔끔한 배열 반복문 사용)
    [drawBtn, arrowBtn, eraserBtn].forEach(btn => btn.classList.remove('active'));
    
    // 3. 툴이 켜졌으면 해당 버튼에만 'active' 클래스 추가
    if (currentMode !== 'select' && activeBtn) {
        activeBtn.classList.add('active');
    }

    // 4. 그리기 모드일 땐 가젯이 드래그되지 않도록 고정
    const gadgets = layer.find('.gadget-item');
    gadgets.forEach(g => g.draggable(currentMode === 'select'));
}

// 툴바 버튼 클릭 이벤트 연결
drawBtn.addEventListener('click', () => updateToolMode('draw', drawBtn));
arrowBtn.addEventListener('click', () => updateToolMode('arrow', arrowBtn));
eraserBtn.addEventListener('click', () => updateToolMode('eraser', eraserBtn));

// 🖱️ 마우스를 눌렀을 때 (그리기 시작)
stage.on('mousedown touchstart', function (e) {
    if (currentMode === 'select') return; // 선택 모드면 그리지 않음
    
    isDrawing = true;
    const pos = stage.getPointerPosition();
    const color = colorPicker.value;
    const size = parseInt(brushSize.value, 10);

    // [선 그리기] 또는 [지우개]
    if (currentMode === 'draw' || currentMode === 'eraser') {
        currentShape = new Konva.Line({
            stroke: currentMode === 'eraser' ? 'white' : color, // 지우개는 일단 흰색으로 처리 (나중에 겹침 모드 활용 가능)
            strokeWidth: size,
            globalCompositeOperation: currentMode === 'eraser' ? 'destination-out' : 'source-over', // ★ 지우개 핵심 속성
            lineCap: 'round',
            lineJoin: 'round',
            points: [pos.x, pos.y, pos.x, pos.y],
            name: 'drawn-shape'
        });
        drawingLayer.add(currentShape);
    } 
    // [화살표 그리기]
    else if (currentMode === 'arrow') {
        currentShape = new Konva.Arrow({
            stroke: color,
            fill: color,
            strokeWidth: size,
            pointerLength: size * 2, // 화살표 머리 길이
            pointerWidth: size * 2,  // 화살표 머리 너비
            points: [pos.x, pos.y, pos.x, pos.y],
            name: 'drawn-shape'
        });
        drawingLayer.add(currentShape);
    }
});

// 🖱️ 마우스를 드래그할 때 (그리는 중)
stage.on('mousemove touchmove', function (e) {
    if (!isDrawing || currentMode === 'select') return;
    e.evt.preventDefault();
    const pos = stage.getPointerPosition();

    // 펜이나 지우개는 지나가는 경로(points)를 계속 추가
    if (currentMode === 'draw' || currentMode === 'eraser') {
        const newPoints = currentShape.points().concat([pos.x, pos.y]);
        currentShape.points(newPoints);
        drawingLayer.batchDraw(); // drawingLayer만 업데이트 (속도 향상)
    } 
    // 화살표는 시작점은 고정, 끝점만 마우스 위치로 업데이트
    else if (currentMode === 'arrow') {
        const points = currentShape.points();
        currentShape.points([points[0], points[1], pos.x, pos.y]);
        drawingLayer.batchDraw();
    }
});

// 🖱️ 마우스를 뗐을 때 (그리기 끝)
stage.on('mouseup touchend', function () {
    if (isDrawing && currentShape) {
        // ★ 방금 그린 선이나 화살표를 히스토리에 기록!
        historyStack.push(currentShape);
    }
    isDrawing = false;
    currentShape = null; // 초기화
});

// ==========================================
// 8. 실행 취소 (Ctrl + Z) 기능
// ==========================================
window.addEventListener('keydown', function(e) {
    // Ctrl 키(맥은 Cmd 키)와 Z 키가 동시에 눌렸는지 확인
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault(); // 웹 브라우저의 기본 단축키(뒤로가기 등) 방지

        // 장부에 기록된 작업이 있다면
        while (historyStack.length > 0) {
            const lastItem = historyStack.pop(); // 맨 마지막 작업물 꺼내기

            // '선택 삭제' 버튼 등으로 이미 파괴된 요소가 아닐 경우에만 실행
            if (lastItem && lastItem.parent) {
                
                // 만약 지우려는 가젯에 노란색 조절 상자(Transformer)가 켜져 있다면 먼저 끄기
                const selectedNodes = transformer.nodes();
                if (selectedNodes.includes(lastItem)) {
                    transformer.nodes([]);
                    selectedGadget = null;
                }

                // ★ 요소 파괴 전 어떤 레이어에 속해있었는지 파악
                const targetLayer = lastItem.getLayer(); 

                // 요소 파괴 및 해당 레이어 맞춤형 새로고침
                lastItem.destroy();
                if (targetLayer) targetLayer.draw(); // 가젯이면 layer를, 선이면 drawingLayer를 알아서 새로고침!

                transformer.nodes([]);
                
                console.log('실행 취소(Undo) 성공!');
                break; // 한 번 눌렀을 때 하나만 지우고 반복문 탈출
            }
        }
    }

    // ⌨️ Ctrl + C (복사하기)
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
            // 현재 선택된(조절 상자가 떠 있는) 가젯이 있을 때만 복사
            if (selectedGadget) {
                copiedGadget = selectedGadget;
                e.preventDefault(); // 브라우저 기본 복사 동작 방지
            }
        }

        // ⌨️ Ctrl + V (붙여넣기)
        if (e.ctrlKey && (e.key === 'v' || e.key === 'V')) {
            // 메모리에 복사된 가젯이 있다면
            if (copiedGadget) {
                e.preventDefault(); // 브라우저 기본 붙여넣기 동작 방지

                // 1. 기존 가젯과 속성(이미지, 크기, 회전 등)이 완벽히 똑같은 클론 생성!
                // (제자리에 겹치면 안 보이니까 x, y 좌표를 20px씩 살짝 비틀어서 소환)
                const clone = copiedGadget.clone({
                    x: copiedGadget.x() + 20,
                    y: copiedGadget.y() + 20
                });

                // 2. Konva의 clone()은 이벤트 리스너까지 복사하진 않으므로 수동 연결
                // (마우스 드래그가 끝났을 때 Ctrl+Z 히스토리에 저장하는 기능)
                clone.on('dragend', function () {
                    if (typeof saveState === 'function') saveState();
                });

                // 3. 레이어에 복제본 추가하고 캔버스 맨 위로 끌어올리기
                drawingLayer.add(clone);
                clone.moveToTop();

                // 4. 붙여넣은 가젯을 즉시 '선택된 상태(노란 테두리)'로 전환! UX 디테일 ✨
                selectedGadget = clone;
                if (typeof transformer !== 'undefined') {
                    transformer.nodes([clone]);
                    transformer.moveToTop();
                }

                // 5. 화면 싹 다시 그리고 실행 취소 스택에 찰칵! 저장
                drawingLayer.draw();
                if (typeof saveState === 'function') saveState();
            }
        }    
});

// ==========================================
// 9. 브라우저 창 크기 변경 시 캔버스 자동 반응형 조절
// ==========================================
window.addEventListener('resize', () => {
    // 1. 바뀐 컨테이너의 너비 다시 계산
    const newWidth = container.offsetWidth; 
    const newHeight = newWidth * 0.5625; // 16:9 비율 유지

    // 2. 스테이지 크기 업데이트
    stage.width(newWidth);
    stage.height(newHeight);

    // 3. 배경 지도가 깔려있다면 배경 지도 크기도 업데이트
    if (mapBackground) {
        mapBackground.width(newWidth);
        mapBackground.height(newHeight);
    }

    // 4. 화면 다시 그리기
    stage.draw();
});

// ==========================================
// 🗑️ 가젯 삭제 공통 함수 및 이벤트 (최적화 완료)
// ==========================================

// 1. 공통 삭제 로직 (여기에만 기능을 정의해 두면 유지보수가 엄청 쉬워져!)
function deleteActiveGadget() {
    if (selectedGadget) {
        transformer.nodes([]);    // 조절기(노란색 테두리) 끄기
        selectedGadget.destroy(); // 가젯 객체 완전 삭제
        selectedGadget = null;    // 변수 비우기
        layer.draw();             // 화면 새로고침
        console.log('가젯 삭제 완료!');
    }
}

// 2. 마우스 클릭 이벤트: [선택 가젯 삭제] 버튼
document.getElementById('delete-btn').addEventListener('click', () => {
    if (selectedGadget) {
        deleteActiveGadget();
    } else {
        alert('삭제할 가젯을 먼저 마우스로 클릭해 줘!');
    }
});

// 3. 키보드 이벤트: Delete / Backspace 단축키
window.addEventListener('keydown', function(e) {
    if (e.key === 'Delete') {
        // 입력창(펜 굵기, 색상 등)에서 글자를 지울 때는 작동하지 않도록 방어
        const activeTag = e.target.tagName;
        if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;

        if (selectedGadget) {
            e.preventDefault(); // 브라우저 뒤로가기 등 기본 동작 방지
            deleteActiveGadget();
        }
    }
});

// 검색창 관련 요소들 가져오기
const searchMenu = document.getElementById('search-menu');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// 💡 중요: Konva 캔버스가 들어있는 부모 div의 ID를 적어줘 (예: 'container')
const stageContainer = document.getElementById('konva-holder'); 

let spawnX = null;
let spawnY = null;

// 1. 캔버스 위에서 우클릭(contextmenu) 감지
stageContainer.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // 브라우저 기본 우클릭 메뉴가 뜨는 것을 완벽히 차단!

    // 마우스의 X, Y 좌표 계산
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const pointerPos = stage.getPointerPosition();
    if(pointerPos) {
        spawnX = pointerPos.x;
        spawnY = pointerPos.y;
    }

    // 마우스 위치에 검색창 띄우기
    searchMenu.style.left = mouseX + 'px';
    searchMenu.style.top = mouseY + 'px';
    searchMenu.classList.add('visible');

    // 검색창이 뜨자마자 사용자가 바로 키보드를 칠 수 있게 커서 깜빡이게 만들기 (핵심 UX!)
    searchInput.focus();
    searchInput.value = ''; // 기존에 적혀있던 검색어 초기화
    searchResults.innerHTML = ''; // 기존 검색 결과 리스트 초기화
});

// 2. 다른 곳(바탕)을 좌클릭하면 검색창 다시 숨기기
document.addEventListener('click', function(e) {
    // 클릭한 곳이 검색창 내부가 아니라면 숨김
    if (e.target.id !== 'search-input') {
        searchMenu.classList.remove('visible');
    }
});

// 3. 사용자가 키보드를 칠 때마다 실시간 검색 실행
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim(); // 입력값을 소문자로 변환하고 공백 제거
    searchResults.innerHTML = ''; // 기존 검색 결과 초기화 (싹 지우고 다시 그림)

    if (query === '') return; // 아무것도 입력 안 했으면 빈칸 유지

    // 🔍 r6Data에서 검색어가 포함된 데이터만 필터링
    const filteredData = r6Data.filter(item => 
        item.name.toLowerCase().includes(query)
    );

    // 📝 필터링된 데이터를 드롭다운 리스트로 만들기
    filteredData.forEach(item => {
        const li = document.createElement('li');
        
        // 리스트 디자인 (CSS를 따로 안 적고 여기서 바로 입혀줄게!)
        li.style.padding = '10px 12px';
        li.style.cursor = 'pointer';
        li.style.borderBottom = '1px solid #f0f0f0';
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        
        // 마우스 올렸을 때 하이라이트 효과
        li.addEventListener('mouseenter', () => li.style.backgroundColor = '#f4f6f8');
        li.addEventListener('mouseleave', () => li.style.backgroundColor = 'transparent');

        // 왼쪽엔 이름, 오른쪽엔 회색 글씨로 타입(Defender/Gadget 등) 표시
        li.innerHTML = `
            <span style="color: gray;">${item.name}</span>
            <span style="color: gray; font-size: 12px;">${item.type}</span>
        `;

        // 🎯 목록에서 항목을 클릭했을 때의 동작!
        li.addEventListener('click', () => {
            console.log('선택된 항목:', item.name); // (임시) 개발자 도구에 이름 띄우기
            
            if (typeof spawnGadget === 'function') {
                spawnGadget(item.img, spawnX, spawnY); 
            }
            // 선택이 끝났으니 검색창은 다시 숨기기
            searchMenu.classList.remove('visible');
        });

        // 완성된 항목을 결과 리스트에 추가
        searchResults.appendChild(li);
    });
});