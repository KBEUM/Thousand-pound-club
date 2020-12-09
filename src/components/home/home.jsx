import React from 'react';
import Logout from '../logout/logout';
import styles from './home.module.css'

const Home = ({authService}) => {
    return(
        <section id='HOME' className={styles.main}
            style={{backgroundImage: `url('./image/55.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
                }}>
            <div className={styles.info}>
                <p className={styles.infoP}>근비대 근지구력 신경 안쓰고 오로지 3대운동 중량 증가를 위한</p>
                <p className={styles.infoP}>볼륨트레이닝 기반 웹사이트입니다.</p>
                <p className={styles.infoP}>본세트만 기록하여 매 운동시 볼륨 증가를 목표로 </p>
                <p className={styles.infoP}>최종적으로 3대 운동 1000 Pound를 목표로 함.</p>
                <p className={styles.notice}>*Guest로 입장 시 운동기록 저장 안됩니다.</p>
                <p className={styles.notice}>*차트는 데이터 처리에 난항를 겪고 있어 추후 업데이트 예정</p>
            </div>
            <Logout authService={authService}/>
        </section>
    )};

export default Home;