const container = document.getElementById('konva-holder');

// 📐 논리 좌표계 (모든 맵·가젯·그림은 이 크기를 기준으로 저장됨)
// 맵 청사진이 4:3(5000x3750)이라 같은 비율 사용.
// 창 크기가 바뀌면 이 좌표계를 통째로 확대/축소(scale)만 하므로 위치가 절대 어긋나지 않음.
const BASE_WIDTH = 1024;
const BASE_HEIGHT = 768;

// 📦 통합 에셋 데이터베이스
const r6Data = [
    // 🛡️ 수비팀 (Defenders)
    { name: 'Smoke', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Smoke.png' },
    { name: 'Mute', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Mute.png' },
    { name: 'Castle', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Castle.png' },
    { name: 'Pulse', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Pulse.png' },
    { name: 'Doc', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Doc.png' },
    { name: 'Rook', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Rook.png' },
    { name: 'Kapkan', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Kapkan.png' },
    { name: 'Tachanka', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Tachanka.png' },
    { name: 'Jager', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Jager.png' },
    { name: 'Bandit', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Bandit.png' },

    // 2. 1년차 ~ 5년차 대원
    { name: 'Frost', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Frost.png' },
    { name: 'Valkyrie', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Valkyrie.png' },
    { name: 'Caveira', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Caveira.png' },
    { name: 'Echo', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Echo.png' },
    { name: 'Mira', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Mira.png' },
    { name: 'Lesion', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Lesion.png' },
    { name: 'Ela', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Ela.png' },
    { name: 'Vigil', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Vigil.png' },
    { name: 'Maestro', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Maestro.png' },
    { name: 'Alibi', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Alibi.png' },
    { name: 'Clash', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Clash.png' },
    { name: 'Kaid', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Kaid.png' },
    { name: 'Mozzie', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Mozzie.png' },
    { name: 'Warden', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Warden.png' },
    { name: 'Goyo', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Goyo.png' },
    { name: 'Wamai', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Wamai.png' },
    { name: 'Oryx', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Oryx.png' },
    { name: 'Melusi', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Melusi.png' },
    { name: 'Aruni', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Aruni.png' },

    // 3. 6년차 ~ 현재
    { name: 'Thunderbird', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Thunderbird.png' },
    { name: 'Thorn', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Thorn.png' },
    { name: 'Azami', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Azami.png' },
    { name: 'Solis', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Solis.png' },
    { name: 'Fenrir', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Fenrir.png' },
    { name: 'Tubarao', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Tubarao.png' },
    { name: 'Sentry', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Sentry.png' },
    { name: 'Skopos', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Skopos.png' },
    { name: 'Noor', type: 'Defender', img: 'Gadgets/Operator Icons/Defence/Noor.png' },

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
    { name: 'IQ', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Iq.png' },

    // 2. 1년차 ~ 5년차 대원
    { name: 'Buck', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Buck.png' },
    { name: 'Blackbeard', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Blackbeard.png' },
    { name: 'Capitao', type: 'Attacker', img: 'Gadgets/Operator Icons/Attack/Capitao.png' },
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
    { name: 'Bulletproof Camera', type: 'Gadget', img: 'Gadgets/Defence_Util/Bulletproof Camera.png' },
    { name: 'Impact Grenade', type: 'Gadget', img: 'Gadgets/Defence_Util/Impact-White.png' },
    { name: 'Observation Blocker', type: 'Gadget', img: 'Gadgets/Defence_Util/Observation-Blocker-White.png' },
    { name: 'Reinforcement', type: 'Gadget', img: 'Gadgets/Defence_Util/Reinforncment-White.png' },
    { name: 'Barbed Wire', type: 'Gadget', img: 'Gadgets/Defence_Util/Barbedwire-White.png' },
    { name: 'Barricade', type: 'Gadget', img: 'Gadgets/Defence_Util/Barricade-White.png' },
    { name: 'Proximity Alarm', type: 'Gadget', img: 'Gadgets/Defence_Util/Beeper-White.png' },
    { name: 'Shield', type: 'Gadget', img: 'Gadgets/Defence_Util/Shield-White.png' },
    { name: 'Nitro Cell', type: 'Gadget', img: 'Gadgets/Defence_Util/C4-White.png' },
];

let selectedGadget = null; // 현재 마우스로 클릭해 선택한 가젯을 담을 변수

// ★ 사용자의 모든 추가/그리기 행동을 기록할 배열 (현재 맵의 기록을 가리킴, 맵 전환 시 교체됨)
let historyStack = [];

const stage = new Konva.Stage({
    container: 'konva-holder', // index.html의 id와 매치
    width: BASE_WIDTH,
    height: BASE_HEIGHT
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

// 🗺️ 맵별 작업 보관함
// 같은 맵 안에서 층을 바꾸면 아이콘·그림이 그대로 유지되고,
// 다른 맵으로 가면 현재 맵 작업은 보관해 뒀다가 돌아올 때 복원함.
// boards[맵이름] = { gadgets: 가젯 그룹(layer), drawings: 그림 그룹(drawingLayer), history: Ctrl+Z 기록 }
const boards = {};
let currentMapName = null;
let currentBoard = null;

function switchBoard(mapName) {
    if (mapName === currentMapName) return; // 같은 맵의 층 전환 → 아무것도 건드리지 않음

    // 선택 상태 해제 (다른 맵의 가젯이 선택된 채로 남지 않게)
    transformer.nodes([]);
    selectedGadget = null;

    // 현재 맵 작업은 화면에서 떼어내 보관 (destroy가 아니라 remove라서 그대로 남아 있음)
    if (currentBoard) {
        currentBoard.gadgets.remove();
        currentBoard.drawings.remove();
    }

    // 처음 가는 맵이면 빈 보관함 생성
    if (!boards[mapName]) {
        boards[mapName] = {
            gadgets: new Konva.Group({ name: 'gadget-group' }),
            drawings: new Konva.Group({ name: 'drawing-group' }),
            history: []
        };
    }

    currentMapName = mapName;
    currentBoard = boards[mapName];
    historyStack = currentBoard.history;

    layer.add(currentBoard.gadgets);
    drawingLayer.add(currentBoard.drawings);
    transformer.moveToTop(); // 조절 테두리는 항상 가젯보다 위에

    // 그리기 모드 등 현재 도구 상태에 맞춰 드래그 가능 여부 맞춤
    currentBoard.gadgets.find('.gadget-item').forEach(g => g.draggable(currentMode === 'select'));
}

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

    // 맵별 작업 전환 (같은 맵의 층 전환이면 아이콘·그림 그대로 유지)
    switchBoard(mapName);

    // [B] 이미지 경로 설정 
    // 2048px WebP 경량본 사용 (원본 5000px JPG는 같은 폴더에 그대로 보관)
    const imagePath = `assets/${mapName}/${floor}.webp`;

    // [C] 자바스크립트로 이미지 로드 시작
    const imageObj = new Image();
    imageObj.src = imagePath;

    // 이미지가 정상적으로 다 불러와졌을 때 실행되는 함수
    imageObj.onload = function() {
        // 기존에 캔버스에 그려져 있던 배경 지도가 있다면 깨끗하게 제거
        if (mapBackground) {
            mapBackground.destroy();
        }

        // 이미지 원본 비율을 유지한 채 논리 좌표계 안에 꽉 차게 맞춤 (찌그러짐 방지)
        const fit = Math.min(BASE_WIDTH / imageObj.width, BASE_HEIGHT / imageObj.height);
        const drawW = imageObj.width * fit;
        const drawH = imageObj.height * fit;

        // Konva용 이미지 객체 생성
        mapBackground = new Konva.Image({
            x: (BASE_WIDTH - drawW) / 2,
            y: (BASE_HEIGHT - drawH) / 2,
            image: imageObj,
            width: drawW,
            height: drawH
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
        // ※ 클로저의 gadget 대신 this 사용: clone()이 이 리스너를 복사해도 복제본 자신이 선택되도록
        gadget.on('click tap', function() {
            selectedGadget = this;
            transformer.nodes([this]);
            layer.draw();
        });

        currentBoard.gadgets.add(gadget);
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
// ([선택 가젯 삭제] 버튼은 아래 deleteActiveGadget 섹션에서 연결)

// [전체 초기화] 버튼 기능 (현재 맵의 가젯·그림만 지움, 배경 지도와 다른 맵 작업은 유지)
document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('현재 맵에 배치된 모든 가젯과 그린 그림들을 싹 다 초기화할까?')) {
        
        // 1. 조절기(테두리)가 켜져 있다면 선택 해제
        transformer.nodes([]);
        selectedGadget = null;

        // 2. 현재 맵의 가젯·그림·실행취소 기록 비우기 (그룹 자체는 남겨둠)
        currentBoard.gadgets.destroyChildren();
        currentBoard.drawings.destroyChildren();
        historyStack.length = 0;

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
    const pos = stage.getRelativePointerPosition();
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
        currentBoard.drawings.add(currentShape);
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
        currentBoard.drawings.add(currentShape);
    }
});

// 🖱️ 마우스를 드래그할 때 (그리는 중)
stage.on('mousemove touchmove', function (e) {
    if (!isDrawing || currentMode === 'select') return;
    e.evt.preventDefault();
    const pos = stage.getRelativePointerPosition();

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

                // 실행 취소 후에는 선택 상태를 테두리와 변수 모두 함께 해제
                transformer.nodes([]);
                selectedGadget = null;

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

                // 2. clone()은 클릭 리스너도 복사함 (spawnGadget에서 this를 쓰므로 복제본이 정상 선택됨)
                //    현재 도구 모드에 맞춰 드래그 가능 여부만 맞춰줌
                clone.draggable(currentMode === 'select');

                // 3. 가젯 레이어(layer)에 추가 — spawnGadget과 동일한 레이어
                currentBoard.gadgets.add(clone);
                clone.moveToTop();

                // 4. 붙여넣은 가젯을 즉시 '선택된 상태(노란 테두리)'로 전환
                selectedGadget = clone;
                transformer.nodes([clone]);
                transformer.moveToTop();

                // 5. 화면 다시 그리고 Ctrl+Z 기록에 추가
                layer.draw();
                historyStack.push(clone);
            }
        }    
});

// ==========================================
// 9. 브라우저 창 크기 변경 시 캔버스 자동 반응형 조절
// ==========================================
// 스테이지 픽셀 크기만 바꾸고, 내용물은 scale로 통째로 확대/축소.
// 가젯·그림 좌표는 논리 좌표(BASE_WIDTH x BASE_HEIGHT) 그대로라 어긋나지 않음.
function fitStageToContainer() {
    const scale = Math.min(
        container.clientWidth / BASE_WIDTH,
        container.clientHeight / BASE_HEIGHT
    );
    stage.width(BASE_WIDTH * scale);
    stage.height(BASE_HEIGHT * scale);
    stage.scale({ x: scale, y: scale });
}

fitStageToContainer();
window.addEventListener('resize', fitStageToContainer);

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

let spawnX = null;
let spawnY = null;

// 1. 캔버스 위에서 우클릭(contextmenu) 감지
container.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // 브라우저 기본 우클릭 메뉴가 뜨는 것을 완벽히 차단!

    // 마우스의 X, Y 좌표 계산
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const pointerPos = stage.getRelativePointerPosition();
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
            spawnGadget(item.img, spawnX, spawnY);
            // 선택이 끝났으니 검색창은 다시 숨기기
            searchMenu.classList.remove('visible');
        });

        // 완성된 항목을 결과 리스트에 추가
        searchResults.appendChild(li);
    });
});