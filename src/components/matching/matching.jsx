import React from 'react';
import styles from './matching.module.css';
import { db } from "../../service/firebase";
import { doc, deleteDoc } from "firebase/firestore/lite";
import ModifyBtn from '../modifyBtn/modifyBtn';
import { useStore } from '../../store/store';


const DEFAULT_IMAGE = '/images/default_logo.png';

const Matching = ({ matchingRead, setMatchingRead, list, getList }) => {
  const {time, place, process, ask, nstr, maxPeople,url, id} = matchingRead;
  const gymUrl = url || DEFAULT_IMAGE;

  const { decreaseCount } = useStore();
  const deleteMatching = () => {
    const docRef = doc(db, "users", id);
    deleteDoc(docRef);
    const arr = list.filter(e => e.id !== id)
    setMatchingRead(arr);
    decreaseCount();
  }

  // const handleUrl = () => {
  //   const [modifiedUrl,setModifiedUrl] = useState('');
  //   setModifiedUrl(url);
  //   console.log(modifiedUrl);
  // }
  // handleUrl();


  return(
  <>
    <li className={styles.matchingBox}>
      <img src={gymUrl} alt="gymImg" className={styles.gymImg} />

      <div className={styles.matchingInfo}>
        <div>시간: {time}</div>
        <div>장소: {place}</div>
        <div>진행방식: {process}</div>
        <div>문의: {ask}</div>
        <div>특이사항:{nstr}</div>
        <div>최대인원:{maxPeople}</div>
      </div>

      <div className={styles.matchingUI}>
        <div className={styles.modifyUI} >
          <ModifyBtn id={id} getList={getList} matchingRead={matchingRead}/>
        </div>
        <button className={styles.deleteUI} onClick={deleteMatching}> 
          삭제
        </button>
      </div>
    </li>
    
  </>
  );
}

export default Matching;