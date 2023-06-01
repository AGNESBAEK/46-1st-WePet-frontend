import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { MODAL_UPPER_DATA, MODAL_LOWER_DATA } from './modalData'

import './Modal.scss'
import './modalAnimation.scss'

const Modal = () => {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalPtag">
          <p>앗!</p>
          <p>로그인이 필요해요</p>
        </div>
        <span className="ulTitle">테마</span>
        <ul className="ulBox">
          {MODAL_UPPER_DATA.map(data => {
            return (
              <Link to={data.link}>
                <li className="list">{data.name}</li>
              </Link>
            )
          })}
        </ul>
        <span className="ulTitle">카테고리</span>
        <ul className="ulBox">
          {MODAL_LOWER_DATA.map(data => {
            return (
              <Link to={data.link}>
                <li className="list">{data.name}</li>
              </Link>
            )
          })}
        </ul>

        <div className="modalBottom">
          <div className="inquire">
            <div className="inquireIcon">
              <FontAwesomeIcon icon={faHeadset} size="lg" className="icon" />
            </div>
            <span>1:1 문의</span>
          </div>
          <div className="bottomLine"></div>
          <div className="emailInquire">
            <span>이메일 문의</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
