import React, { useState, useEffect } from 'react';
import MatchingAddForm from '../matching_add_form/matching_add_form';
import styles from './popupContent.module.css';
import { db } from "../../service/firebase";
import { collection, addDoc } from "firebase/firestore/lite";
import { useStore } from '../../store/store';

function PopupContent(props) {
  const {onClose, getList } = props;
  const [time, setTime] = useState('')
  const [matching, setMatching] = useState();
  const [imgUrl, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const { increaseCount } = useStore();

  const onSubmit = (e) => {
    e.preventDefault();
    setMatching({
      createdAt: new Date().getTime(),
      url: imgUrl,
      time: e.target.time.value,
      place: e.target.place.value,
      process: e.target.process.value,
      ask: e.target.ask.value,
      nstr: e.target.nstr.value,
      maxPeople: e.target.maxPeople.value,
    })
    increaseCount();
  }


  
  useEffect(async() => {
    const docRef = await addDoc(collection(db, 'users'), 
    {matching}
    )
    getList(docRef);
    onClose();
  });

  return(
    <div className={styles.dimmed_layer_wrapper}>
      <div className={styles.full_layer}>
        <form className={styles.common_alert} onSubmit={onSubmit}> 
          <h2>매칭 등록 신청</h2>
          <div>
            <MatchingAddForm setTime={setTime} time={time} setUrl={setUrl} loading={loading} setLoading={setLoading}/>
          </div>
          <div>
            <button onClick={onClose}>취소</button>
            <input type="submit" value="등록" onSubmit={onSubmit} disabled={loading}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PopupContent;