import './styles.css';

import icon from '../../assets/img/avatar-icon.svg';
import { BASE_URL } from '../../utils/request';
import axios from 'axios';
import { toast } from 'react-toastify';

type Props = {
  saleId: number;
}

function handleClick (id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    toast.info("SMS enviado com sucesso!");
  })
}

function NotificationButton( {saleId} : Props)  {

  return (

    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src= {icon} alt="Notificar" />
    </div>


  )


}

export default NotificationButton
