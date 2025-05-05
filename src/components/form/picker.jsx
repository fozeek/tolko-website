import './picker.scss';

export function Picker({ children }) {
  return (
    <div className="picker">
      {children}
    </div>
  )
}

Picker.Choice = function ({ label, value, onPick }) {
  return (
    <div className="choice" onClick={() => onPick(value)}>
      <div className="checkbox">
        <div className="check"></div>
      </div>
      <div className="content">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.75 9.25V18.25C17.75 18.8023 17.3023 19.25 16.75 19.25H7.25C6.69772 19.25 6.25 18.8023 6.25 18.25V9.25M4.75 10.25L12 4.75L19.25 10.25" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        {label}
      </div>
    </div>
  );
}