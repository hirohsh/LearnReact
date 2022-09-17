import React from 'react';

const EventTypes = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。');
  };
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <label>
        入力値のイベント:
        <input
          type="text"
          onChange={() => console.log('onChange検知')}
          onBlur={() => console.log('onBlur検知')}
          onFocus={() => console.log('onFocus検知')}
        />
      </label>
      <div>
        <label>
          入力値を取得:
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </div>
      <div
        className="hover-event"
        onMouseEnter={() => console.log('カーソルが入ってきました。')}
        onMouseLeave={() => console.log('カーソルが出て行きました。')}
      >
        ホバーしてね！
      </div>
    </>
  );
};

export default EventTypes;
