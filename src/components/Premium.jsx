import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faHeadphones } from "@fortawesome/free-solid-svg-icons";

const Premium = () => {
  return (
    <div className="Premium">
      <div className="PremiumSlide">
        <ul>
          <li>
            <p>
              세계의 다양한
              <br /> 음악을 찾아보세요
            </p>
            <p>
              다양한 장르의 해외
              <br /> 음악을 감상하세요.
            </p>
          </li>
          <li>
            <p>
              나만의 맞춤
              <br /> 플레이리스트
            </p>
            <p>
              취향에 따라 나만의
              <br /> 리스트가 만들어져요.
            </p>
          </li>
          <li>
            <p>오프라인에서 감상</p>
            <p>
              앱에 곡을
              <br />
              다운로드하고
              <br />
              언제 어디서든 감상하세요.
            </p>
          </li>

          <li>
            <p>
              어떤 기기에서든지
              <br /> 음악을 스트리밍하세요
            </p>
            <p>
              모바일, PC,
              <br /> 태블릿에서 이용하실 수 <br />
              있습니다.
            </p>
          </li>
        </ul>
      </div>

      <div className="PremiumBox1">
        <div className="PremiumBox1TextBox">
          <p>Premium을 통해 더 좋은 Supotify를 즐겨보세요.</p>
        </div>
        <div className="premiumPriceTextBox">
          <p>요금제 옵션</p>
        </div>
        <div className="PremiumImgBox1">
          <div className="PremiumTextBox1">
            <p>Premium 개인</p>
            <ul>
              <li>나만의 플레이리스트</li>
              <li>다운로드하여 오프라인에서 감상</li>
              <li>언제든 해지 가능</li>
            </ul>
          </div>
        </div>
        <div className="PremiumImgBox2">
          <div className="PremiumTextBox2">
            <p>Premium 듀오</p>
            <ul>
              <li>premium 계정 2개</li>
              <li>모바일 기기 및 PC 맞춤 플레이 리스트</li>
              <li>다운로드하여 오프라인에서 감상</li>
              <li>언제든 해지 가능</li>
            </ul>
          </div>
        </div>
        <div className="PremiumImgBox3">
          <div className="PremiumTextBox3">
            <p>Premium 베이직</p>
            <ul>
              <li>모바일 기기 및 PC에서 스트리밍</li>
              <li>나만의 맞춤 플레이리스트</li>
              <li>언제든 해지 가능</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
