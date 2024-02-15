import React from 'react'
import "./Popup.scss"
const Popup = () => {
    return (
        <div ref={refPopup} className={`popupDetalisProject ${togglePopup ? "active" : ""}`}>
            {datePopup ? (<div className="details">
                <i onClick={handleTogglePopup} className="close"><FaXmark /></i>
                <Swiper
                    pagination={{
                        clickable: true
                        // type: "fraction"
                    }}
                    navigation
                    modules={[Navigation, Pagination]}
                    ref={refMySwiper}
                    className="mySwiper"
                >
                    {datePopup.images.map(scr => (
                        <SwiperSlide key={Math.random()}><img src={scr} alt={`project_Images`} /></SwiperSlide>
                    ))}
                </Swiper>
                <div className="btns">
                    <button onClick={() => handelBtnSwiper("prev")} className="btn"><FaChevronLeft /></button>
                    <button onClick={() => handelBtnSwiper("nex")} className="btn"><FaChevronRight /></button>
                </div>
            </div>) : ""}
        </div>
    )
}

export default Popup