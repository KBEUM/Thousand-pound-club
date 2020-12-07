import React from 'react';
import styles from './home.module.css'

const Home = (props) => {
    return(
        <section id='HOME' className={styles.main}
            style={{backgroundImage: `url('./image/55.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
                }}>
            {/* <p>근비대 근지구력 신경 안쓰고 3대운동 중량 증가를 위한 웹사이트</p>
            <p>볼륨트레이닝에 기반하여 3대운동 기록 & 볼륨만 기록</p>
            <p>warm up 및 다른 부가운동은 기록하지 않으며 본세트 5세트만 기록</p> */}
            <section>
                <p>운동보다 중요한 영양과 휴식? 신경쓰지 않는다</p>
                <p>닭가슴살 챙겨먹고 술 안마시고 이러면서 운동하지 않는다.</p>
                <p>헬스장 가기 싫으면 가지마라.</p>
                <p>웨이트 뭐빠지게 해서 3대 500kg 든다고 인생 달라지는거 별로 없다.</p>
                <p>그냥 무게 치는게 재밋으니깐 간다.</p>
            </section>
        </section>
    )};

export default Home;