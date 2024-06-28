import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { comments as initialComments } from "../server/comment";
import { Link } from "react-router-dom";

const Coment = () => {
  const [commentList, setCommentList] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentData = {
      id: commentList.length + 1, // ID는 고유해야 하므로 길이에 1을 더해줌
      name: "오수", // 사용자 이름 (임의로 설정)
      userId: "슈포티파이개발자", // 사용자 아이디 (임의로 설정)
      date: "방금 전", // 현재 날짜
      userComment: newComment,
    };

    setCommentList([...commentList, newCommentData]);
    setNewComment(""); // 입력란 초기화
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // 기본적으로 엔터키를 누를 때만 작동
      e.preventDefault(); // 기본 엔터키 동작(줄바꿈) 방지
      setTimeout(() => handleAddComment(), 0); // 상태 업데이트 후에 handleAddComment 호출
    }
  };

  return (
    <div className="Coment">
      <div className="ComentHeader">
        <div className="ComentTitleBox">
          <p>댓글</p>
        </div>
        <div className="ComentIconBox">
          <Link to="/MusicPlayer">
            <FontAwesomeIcon icon={faXmark} className="ComentXIcon" />
          </Link>
        </div>
        <div className="ComentBtnBox">
          <div className="ComentFavBtn ComentBtn">인기순</div>
          <div className="ComentRecBtn ComentBtn">최신순</div>
        </div>
        <div className="ComentCautionBox">
          <p>
            댓글을 사용할 때에는 타인을 존중하고 <span>커뮤니티 가이드</span>를
            준수해야 합니다
          </p>
        </div>
      </div>
      <div className="ComentBody">
        <ul>
          {commentList.map((data) => (
            <li key={data.id}>
              <div className="ComentUserIconBox">
                <p>{data.name}</p>
              </div>
              <div className="ComentUserBox">
                <div className="ComentUserId">
                  <p>{data.userId}</p>
                  &nbsp;
                  <p>{data.date}</p>
                </div>
                <div className="ComentText">
                  <p>{data.userComment}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="ComentWriteBox">
          <div className="ComentWriteUserIcon">
            <p>Y</p>
          </div>
          <input
            type="text"
            className="ComentInput"
            placeholder="댓글 추가..."
            value={newComment}
            onChange={handleCommentChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Coment;
