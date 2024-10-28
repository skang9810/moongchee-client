import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Mypage(props) {

  // 전역 변수
  const isPetsitter = true;
  const petCnt = 1;
  //
  
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    setIsModalOpen(true); // 로그아웃 버튼 클릭 시 모달 open
  }

  const confirmLogout = () => {
    // 로그아웃 로직
    setIsModalOpen(false); // 모달 닫기
    alert("로그아웃되었습니다.");
  }

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  }

  const handleEditUserInfoClick = () => {
    navigate('/mypage/edituser')
  }

  const handleEditPetInfoClick = (petId) => {
    navigate(`/mypage/editpet/${petId}`)
  }

  return (
    <div className="container inline-grid h-full">
      <div className="pt-7 pb-7 pl-10 pr-10">

        {/* User Profile */}
        <div className="w-full bg-white rounded-lg p-5 rounded-lg shadow mb-5 flex justify-between items-center">
          <div className='flex items-center space-x-4'>
            <img src='/src/assets/images/dog.jpeg' alt="Profile" className="w-12 h-12 rounded-full" />
            <p className='text-lg'>홍길동</p>
          </div>
          <button onClick={handleEditUserInfoClick} className='border-2 border-blue-500 text-primary text-sm rounded-xl w-16 h-7'>편집</button>
        </div>

        {/* Petsitter Profile - 펫시터일 경우에만 표시 */}
        {isPetsitter && (
          <div className="w-full bg-white rounded-lg p-5 rounded-lg shadow mb-5">
            <p className='mb-2 text-lg'>펫시터 프로필</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <img src='/src/assets/images/dog.jpeg' alt="Profile" className="w-12 h-12 rounded-full" />
                <p className='text-lg'>홍길동</p>
              </div>
              <button className='border-2 border-blue-500 text-primary text-sm rounded-xl w-16 h-7'>편집</button>
            </div>
          </div>
        )}

        {/* Pet Profile */}
        <div className="w-full bg-white rounded-lg p-5 rounded-lg shadow mb-5">
          <p className='mb-2 text-lg'>내 반려동물 <span className='text-gray-300'>{petCnt}</span></p>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
              <img src='/src/assets/images/dog.jpeg' alt="Profile" className="w-12 h-12 rounded-full" />
              <div>
                <p className='text-lg'>미츄</p>
                <div className='text-gray-400 text-sm'>
                  말티즈 | 10살 | 여아 | 12.5kg
                  <br />
                  중성화 수술 전
                </div>
              </div>
            </div>
            <button onClick={() => handleEditPetInfoClick(1)} className='border-2 border-blue-500 text-primary text-sm rounded-xl w-16 h-7'>편집</button>
          </div>
        </div>

        {/* Point Recharge */}
        <div className="w-full bg-white rounded-lg p-5 rounded-lg shadow mb-5">
          <p className='mb-2 text-lg'>개껌 충전하기</p>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
              <img src='/src/assets/images/dogChew.svg' alt="Profile" className="w-12 h-12 rounded-full" />
              <p className='text-lg'><span className='font-bold'>500</span> 개</p>
            </div>
            <button className='border-2 border-blue-500 text-primary text-sm rounded-xl w-16 h-7'>충전</button>
          </div>
        </div>

        {/* Purchase History */}
        <div className="w-full bg-white rounded-lg p-5 rounded-lg shadow mb-5 flex justify-between items-center">
          <p className='text-lg'>구매 / 취소 내역</p>
          <button className='border-2 border-blue-500 text-primary text-sm rounded-xl w-16 h-7'>더보기</button>
        </div>

        {/* Petsitter Reservation History */}
        <div className="w-full bg-white rounded-lg p-5 rounded-lg shadow mb-8 flex justify-between items-center">
          <p className='text-lg'>펫시터 예약 / 취소 내역</p>
          <button className='border-2 border-blue-500 text-primary text-sm rounded-xl w-16 h-7'>더보기</button>
        </div>

        {/* Logout */}
        <div className="w-full text-center mt-20">
          <button onClick={handleLogout} className="text-base text-gray-600 underline">로그아웃</button>
        </div>

        {/* Confirm Logout Modal */}
        {isModalOpen && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
              <h2 className='text-xl font-semibold mb-6 text-center'>로그아웃 하시겠습니까?</h2>
              <div className='flex justify-center space-x-4'>
                <button onClick={closeModal} className='px-6 py-2 bg-divider text-gray-500 rounded-lg'>취소</button>
                <button onClick={confirmLogout} className='px-6 py-2 bg-primary text-white rounded-lg'>확인</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>

  );
}

export default Mypage;
