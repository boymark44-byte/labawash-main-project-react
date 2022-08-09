import './slidestyle.css'

const Slider = () => {

  return (
        <div className="slider">
          <div className="slides">
            {/*radio buttons start*/}
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            {/*radio buttons end*/}
            {/*slide images start*/}
            <div className="slide first">
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className="slide">
              <img src="https://picsum.photos/200/301" alt="" />
            </div>
            <div className="slide">
              <img src="https://picsum.photos/200/302" alt="" />
            </div>
            <div className="slide">
              <img src="https://picsum.photos/200/303" alt="" />
            </div>
            {/*slide images end*/}
            {/*automatic navigation start*/}
            <div className="navigation-auto">
              <div className="auto-btn1" />
              <div className="auto-btn2" />
              <div className="auto-btn3" />
              <div className="auto-btn4" />
            </div>
            {/*automatic navigation end*/}
          </div>
          {/*manual navigation start*/}
          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn" />
            <label htmlFor="radio2" className="manual-btn" />
            <label htmlFor="radio3" className="manual-btn" />
            <label htmlFor="radio4" className="manual-btn" />
          </div>
          {/*manual navigation end*/}

        </div>
  );
};

export default Slider;
